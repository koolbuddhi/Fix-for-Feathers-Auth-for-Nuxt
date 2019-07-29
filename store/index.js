import feathersVuex, { initAuth } from 'feathers-vuex'
import feathersClient from '../feathersClient'
const { service, auth } = feathersVuex(feathersClient, { idField: '_id' })

export const state = () => ({
  counter: 5
})

export const getters = {
  getCalculated(state) {
    return state.counter * 5
  }
}

export const mutations = {
  increment(state) {
    state.counter++
  }
}

export const actions = {
  increment(context) {
    context.commit('increment')
  },
  nuxtServerInit({ commit, dispatch, state }, { req }) {
    return initAuth({
      commit,
      dispatch,
      req,
      moduleName: 'auth',
      cookieName: 'feathers-jwt'
    })
      .then((payload) => {
        // console.log('Server Init - InitAuth >>', payload)
        // console.log('Server Init - InitAuth >>', state.auth.accessToken)

        // dispatch('auth/authenticate').catch((ex) => { console.log('Server Auth', ex) })
        dispatch('auth/authenticate', { stategy: 'jwt', accessToken: state.auth.accessToken }).catch(ex => console.log('ServerAuth', ex))
        // dispatch('users/find')
      }).catch((_) => {})
  }
}

export const plugins = [
  service('users'),
  auth({
    state: { publicPages: ['index', 'authenticate'] },
    userService: 'users'
  })
]
