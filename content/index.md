> #### 自定义socket方法

```js
import { getToken } from '@/utils/auth'
/**
 * @description 创建实例并
 * @param {*} topic topic
 * @returns websocket实例
 */
let client = null
const connectSocket = (topic) => {
  const baseUrl = import.meta.env.VITE_APP_WS_URL
  const wsUrl = `ws://${baseUrl}/${topic}/` 
  if (client) {
    console.log(client);
    return client
  } else {
    client = new WebSocket(wsUrl)
  }
  return client

}

export default connectSocket
```

> #### 将方法使用provide提供给子组件使用

```js
import socket from './socket'
const app = createApp(App)
app.provide('socket', socket)
```



> #### layout中 或者在 App.vue文件中使用**inject**首次创建socket连接

```vue
import { onMounted, inject } from 'vue'
onMounted(() => {
  const socket = inject('socket')
  const ws = socket('websocket/message')
  ws.onopen = () => {
    let msg = {
      type: 'screen',
      classId: 1
    }
    ws.send(JSON.stringify(msg))
  }
  ws.onmessage = ({ data }) => {
    console.log(data)
  }
})
```



> #### 在其他页面中使用 不会创建第二个连接 

```
<el-button @click="test">test</el-button>


import { inject } from 'vue'
const socket = inject('socket')
const test = () => {
  const ws = socket('websocket/message')
  ws.send(JSON.stringify(msg))
}
```


> #### 配置vite中ws连接地址

```env
VITE_APP_WS_URL=192.168.66.66:8088
```



