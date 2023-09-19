export default defineNuxtRouteMiddleware((to, from) => {
  const isLogin = false
  // console.log(`to, ==>`, to)
  if (isLogin) {
    return navigateTo(to.fullPath)
  }
  //  重定向  login
  return navigateTo('/login')
})
