module.exports = {
  router: { middleware: ['auth'] },
  dev: process.env.NODE_ENV !== 'production',
  head: {
    title: 'My Feathers + Nuxt App'
  },
  build: {
    extend(config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.devtool = '#source-map'
      }
    }

  },
  plugins: [
    '~/plugins/authenticateBeforeNuxtRender.client'
  ]
}
