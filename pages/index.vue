<template>
  <h1>Wow</h1>
</template>
<script>
export default {
  created() {
    console.log('Created', this.$store.state.counter)
    console.log('Created', this.$store.getters.getCalculated)
    // this.$store.mutations.increment()
    // this.$store.commit('increment')
    this.$store.dispatch('increment')
    console.log('Created', this.$store.state.counter)
  }
}
</script>
