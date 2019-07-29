export default function (context) {
  const { store, redirect, route } = context
  const { auth } = store.state

  // console.log('>>>>', auth.publicPages.includes(route.name) && !auth.payload)

  if (!auth.publicPages.includes(route.name) && !auth.payload) {
    return redirect('/authenticate')
  }
}
