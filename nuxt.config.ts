// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      app:{
        head:{
          title: 'Nuxt Store',
          meta:[
            {name:'description',content:"nuxt3 concepts"}
          ],
          link :[
            {rel:'stylesheet',href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
          ]
        }
      },
      runtimeConfig :{
        currencyKey:process.env.CURRENCY_API_KEY

      }
})
