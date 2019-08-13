export default function (context) {
  const { store, redirect, route } = context
  const { auth } = store.state

  console.log('Route: %s', route.path)
  if (!auth.publicPages.includes(route.name) && !auth.payload) {
    return redirect('/authenticate')
  }
}
