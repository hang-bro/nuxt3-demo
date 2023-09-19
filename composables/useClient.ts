const isMobile = () => {
  if (process.client) {
    const ua = navigator.userAgent
    const flag = /Mobile|Android|iOS|iPhone|iPad|iPod|Opera Mini/i.test(ua)
    return flag || window.matchMedia('(max-width: 768px)').matches
  }
}

export const useClient = () => {
  return {
    platform: isMobile() ? 'h5' : 'web'
  }
}
