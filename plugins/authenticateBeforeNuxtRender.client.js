// Plugin to Authticate before Nuxt Render.
// This is solution for FeathersBug which failed to read the cookie if user refresh nuxt app
export default async function (context) {
  console.log('Client - AuthPlugIn route=%s auth=%s ', context.route.path, context.store.state.auth.accessToken)
  // context.store.dispatch('auth/authenticate')
  //   .then((res) => { console.log('Plugin Auth', res) })
  //   .catch((ex) => { console.log('Plugin Auth', ex) })
  if (context.route.path === '/authenticate' || !context.store.state.auth.accessToken) return
  try {
    await context.store.dispatch('auth/authenticate')
  } catch (ex) {
    console.log('AuthPlugIn - Authentication Error ', ex)
    await context.store.dispatch('auth/logout')
    // context.router.replace({
    //   path: '/login'
    // })
  }
}
