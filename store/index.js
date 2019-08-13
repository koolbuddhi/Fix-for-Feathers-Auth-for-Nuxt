import Vuex from 'vuex'
import feathersVuex, { initAuth } from 'feathers-vuex'
import { CookieStorage } from 'cookie-storage'
import feathersClient from '../feathersClient'

let plugins = []
// Create services for the browser
if (process.client) {
  const browserClient = feathersClient('', new CookieStorage())
  const { service: browserService, auth: browserAuth } = feathersVuex(browserClient, { idField: '_id', enableEvents: false })

  plugins = [
    browserService('users', { paginate: true }),
    browserAuth({
      userService: 'users',
      state: {
        publicPages: [
          'index',
          'authenticate'
        ]
      }
    })
  ]
}

const createStore = () => {
  return new Vuex.Store({
    state: {},
    actions: {
      nuxtServerInit({ commit, dispatch, state }, { req, store }) {
        let origin = req.headers.host.split(':')
        origin = `http://${origin[0]}`

        const storage = {
          getItem(key) {
            return store.state.auth ? store.state.auth.accessToken : ''
          },
          setItem(key, value) {
            store.state.auth.accessToken = value
          },
          removeItem(key) {
            store.state.auth.accessToken = null
          }
        }
        // Create a new client for the server
        const client = feathersClient(origin, storage)
        const { service, auth } = feathersVuex(client, { idField: '_id', enableEvents: false })
        // Register services for the server
        service('users', { paginate: true })(store)
        auth({
          userService: 'users',
          state: {
            publicPages: [
              'index',
              'authenticate'
            ]
          }
        })(store)

        return initAuth({
          commit,
          dispatch,
          req,
          moduleName: 'auth',
          cookieName: 'feathers-jwt'
        })
          .then((response) => {
            // console.log('AfterAuth', response)
            return dispatch('auth/authenticate', { accessToken: store.state.auth.accessToken, strategy: 'jwt' }).then(res => console.log('After ServerAuth', store.state.auth))
              .catch((_) => {})
          })
      }
    },
    plugins
  })
}

export default createStore
