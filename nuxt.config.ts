// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", ["@nuxtjs/google-fonts", {
    families: {
      Raleway: [400, 700],
      'Open Sans': [400, 700]
    }
  }]],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  }
})