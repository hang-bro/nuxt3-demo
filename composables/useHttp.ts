// composables/useServerRequest.ts
import { useFetch, UseFetchOptions } from '#app'

function isArray(str: unknown) {
  return Object.prototype.toString.call(str) === '[object Array]'
}

export const useHttp = <T = unknown>(url: string, opts?: UseFetchOptions<T, unknown>) => {
  // const token = useCookie('token')
  const runtimeConfig = useRuntimeConfig()
  console.log(`runtimeConfig ==>`, JSON.parse(JSON.stringify(runtimeConfig)))

  const defaultOptions: UseFetchOptions<unknown> = {
    baseURL: runtimeConfig.public.baseUrl as string,
    onRequest({ options }) {
      options.headers = options.headers || {}
      // if (token.value) {
      //   // @ts-ignore
      //   options.headers.Authorization = 'Bearer ' + token.value
      // }
    },
    onResponse({ response }) {
      // console.log(`onResponse ==>`, response._data)
      const {
        _data: { code, data, message }
      } = response
      if (code !== 200) {
        // process.client && ElMessage.error(message)
      }
    },
    onResponseError({ response }) {
      console.log(`onResponseError ==>`)
      process.client && ElMessage.error(response._data)
    }
  }

  return useFetch<T>(url, { ...defaultOptions, ...opts } as any)
}
