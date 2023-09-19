/*
 * @Description:userStore
 * @Author: HYH
 * @LastEditors: HYH
 * @LastEditTime: 2023-06-07 17:10:29
 */
import { defineStore } from 'pinia'

const userStore = defineStore('userStore', {
  /** state==>必须是一个方法 && 返回值为对象 */
  state: () => ({
    id: '',
    email: '',
    avatar: '',
    username: '',
    address: '',
    token: ''
  }),
  actions: {
    setInfo(info: any) {}
  }

  // /**pinia持久化方式 */
  // persist: {
  //   enabled: true, // 开启存储
  //   // **strategies: 指定存储位置以及存储的变量都有哪些,该属性可以不写，不写的话默认是存储到sessionStorage里边，默认存储state里边的所有数据**
  //   strategies: [
  //     { storage: localStorage }
  //     // storage 存储到哪里 sessionStorage/localStorage
  //     // paths是一个数组,要存储缓存的变量,当然也可以写多个
  //     // paths如果不写就默认存储state里边的所有数据，如果写了就存储指定的变量
  //   ]
  // }
})

export default userStore
