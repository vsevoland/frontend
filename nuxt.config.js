module.exports = {
  head: {
    title: 'Всеволенд',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Всеволод Скрипник обо всём, что ему интересно',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/sanity/module'],
  modules: [['nuxt-highlightjs', { style: 'stackoverflow-light' }]],
  css: ['@/assets/scss/main', '@/assets/scss/custom'],
  plugins: ['~/plugins/api.js', '~/plugins/typographer.js'],
  components: true,
  telemetry: false,

  sanity: {
    projectId: 'g03uathm',
    dataset: 'production',
  },

  // Router configuration: https://nuxtjs.org/docs/configuration-glossary/configuration-router/
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'category-label',
        path: '/:category/labels/:label',
        props: (route) => ({ label: route.params.label }),
        component: resolve(__dirname, 'pages/_category/index.vue'),
      })
    },
  },
}
