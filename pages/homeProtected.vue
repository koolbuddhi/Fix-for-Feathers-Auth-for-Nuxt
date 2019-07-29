<template>
  <section>
    <navigation />
    <h1>This place is secret</h1>
    <li v-for="user in findUsersInStore" :key="user.email">
      {{ user.email }}
    </li>
    <p>This section requires user authentication. There's nothing else going on here.</p>
    <button @click.prevent="exit">
      Logout
    </button>
    <button @click="getUsers">
      GetUsers
    </button>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import Navigation from '~/components/Navigation'
export default {
  name: 'Secret',
  components: { Navigation },
  computed: {
    ...mapGetters('users', { findUsersInStore: 'list' }),
    ...mapState('auth', ['isAuthenticatePending', 'accessToken'])
  },
  async mounted() {
    try {
    // setTimeout(() => {
      console.log('Auth Status', this.isAuthenticatePending)
      console.log('Auth toekn', this.accessToken)
      await this.findUsers({ query: {} })
    // }, 100)
    } catch (error) {
      console.log('Error in HomeProtected', error)
    }
  },
  methods: {

    ...mapActions('auth', ['logout']),
    ...mapActions('users', { findUsers: 'find' }),
    async exit() {
      await this.logout()
      this.$router.push('/')
    },
    getUsers() {
      this.findUsers({ query: {} })
    }
  }

}
</script>
