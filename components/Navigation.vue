<template>
  <ul class="navigation">
    <li>
      <nuxt-link exact to="/">
        index
      </nuxt-link>
    </li>
    <li v-if="!isAuthenticated">
      <nuxt-link to="/authenticate">
        Authenticate
      </nuxt-link>
    </li>
    <li v-if="isAuthenticated">
      <nuxt-link to="/HomeProtected">
        Secret Section
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Navigation',
  computed: {
    ...mapState('auth', ['accessToken']),
    isAuthenticated() {
      return this.accessToken
    }
  },
  created() {
    console.log('Navi IsClient:[%s]', process.client)
    // if (process.client) {
    //   this.$store.dispatch('auth/authenticate').then(() => { console.log('Auth Navi', this.isAuthenticated) }).catch((ex) => { console.log('Client Auth', ex) })
    // }
  }
}
</script>

<style>
.navigation {
  border-bottom: 1px solid #F2F2F2;
  display: flex;
  list-style: none;
  margin: 0 -2em 1em;
  padding: 1em;
}
.navigation li + li {
  margin-left: 1.5em;
}
.navigation a {
  color: #666;
  text-decoration: none;
}
.navigation .nuxt-link-active {
  color: coral;
  text-decoration: underline;
}
</style>
