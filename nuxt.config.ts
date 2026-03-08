// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  pages: true,
  ssr: false, 
  nitro: {
    preset: 'netlify-static', 
    prerender: {
      failOnError: false 
    }
  }
})
