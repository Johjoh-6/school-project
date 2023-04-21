// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
      ],
      runtimeConfig: {
        publicRuntimeConfig: {
          apiUrl: process.env.API_URL
        }
      },
})
