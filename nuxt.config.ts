// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head:{
      script:[
        {
          src:'https://open.spotify.com/embed-podcast/iframe-api/v1',
          async:true,
        }
      ]
    }
  }
})
