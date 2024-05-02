// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", ["@nuxtjs/google-fonts", {
    preload: true,
    families: {
      Raleway: [400, 700],
      'Open Sans': [400, 700]
    }
  }]],
  image: {
    format: ['avif', 'webp'],
    quality: 70,
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  }
})