export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BOLETIN EXTRAOFICIAL',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Esta colección de indicadores intenta develar de donde viene y hacia donde va la macroeconomía Argentina.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=auto' },      
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://api.mapbox.com/mapbox-gl-js/v1.10.0/mapbox-gl.css',
      },      
    ]
  },

 

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{src:'~/plugins/globalObject.js'} ],
   mapbox: {
    accessToken: 'pk.eyJ1IjoiZWtyb2YiLCJhIjoiY2xjdjkwb3F5MWdvcTNvcGh0OXl2aTZuaCJ9.V4FeZelBAA7iWaQSdVi0Fw'
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

 

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-mapbox-gl','@nuxtjs/axios',

/*     ['nuxt-supabase', {
      supabaseUrl: 'https://pibxnftttuyvvbnbkqtf.supabase.co',
      supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpYnhuZnR0dHV5dnZibmJrcXRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTUyOTkyMzgsImV4cCI6MTk3MDg3NTIzOH0.zRaSuTjYt_yP-dxTlM_43PEuaq8aQQFt3fmarG3JZCk'
    }] */
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    standalone: true,
    extend (config, { isDev, isClient }) {
 
      config.node = {
           fs: 'empty'
       }

      // ....
   }
  },
 
 
 }
