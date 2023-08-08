// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],
  modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],
  auth: {
    origin: 'http://localhost:3000',
    enableGlobalAppMiddleware: true
  },
  nitro: {
    prerender : {
      crawlLinks : false
    },
        preset: "static"
  },ssr : true
})
