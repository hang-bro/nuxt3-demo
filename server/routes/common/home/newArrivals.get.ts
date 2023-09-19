// import { useHttp } from '~/composables/useHttp'

export default defineEventHandler(async event => {
  // console.log(`event.path ==>`, event.path)
  // const { data } = await useHttp(event.path)
  return { data:[] }
})
