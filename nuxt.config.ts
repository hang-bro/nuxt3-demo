import { resolve } from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, './')
  },
  modules: [
    '@element-plus/nuxt',
    'nuxt-icon',
    '@nuxtjs/i18n',
    // '@nuxt/content',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper'
  ],
  css: [
    'element-plus/dist/index.css',
    'element-plus/theme-chalk/display.css',
    '~/assets/css/main.css'
  ],
  runtimeConfig: {
    public: {
      baseUrl: '/api/'
    }
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  nitro: {
    // 改配置用于服务端请求转发
    // routeRules: {
    //   '/api/**': {
    //     proxy: 'http://192.168.5.240:2333/api/**'
    //   }
    // },
    // 该配置用于服务端请求转发
    routeRules: {
      '/api/**': {
        proxy: 'http://192.168.5.240:2333/api/**'
      }
    },
    minify: true,
    sourceMap: false
  }
})
