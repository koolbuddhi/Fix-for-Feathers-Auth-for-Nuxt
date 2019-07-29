<template>
  <div>
    <navigation />
    <h1>Home</h1>
  </div>
</template>
<script>
import Navigation from '~/components/Navigation'
export default {
  name: 'Home',
  components: { Navigation },
  created() {
    // console.log('Created', this.$store.state.counter)
    // console.log('Created', this.$store.getters.getCalculated)
    // this.$store.mutations.increment()
    // this.$store.commit('increment')
    // this.$store.dispatch('increment')
    // console.log('Created', this.$store.state.counter)

  }
}
</script>
