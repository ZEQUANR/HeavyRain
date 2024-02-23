import { defineStore } from "pinia"
import { userLogin } from "@/api/use"
import { setToken, clearToken } from "@/utils/auth"
// import { removeRouteListener } from "@/utils/route-listener"
// import useAppStore from "../app"

const useUserStore = defineStore("user", {
  state: () => ({
    name: undefined, // 用户名
    accountId: undefined, // 用户 id
    role: "", // 权限
  }),

  getters: {
    // userInfo(state: UserState): UserState {
    //   return { ...state }
    // },
  },

  actions: {
    // 登陆
    async login(loginForm) {
      const res = await userLogin(loginForm)
      console.log(res)
      // try {
      //   const res = await userLogin(loginForm)

      //   if (res.status === 200) {
      //     this.role = res.data.data.role
      //     this.name = res.data.data.doctor_name
      //     this.accountId = res.data.data.doctor_id

      //     setToken(res.data.data.token)
      //   }
      //   localStorage.setItem(
      //     "userInfo",
      //     JSON.stringify({
      //       doctorId: res.data.data.doctor_id,
      //       doctorName: res.data.data.doctor_name,
      //       role: res.data.data.role,
      //     })
      //   )
      // } catch (err) {
      //   clearToken()
      //   localStorage.removeItem("userInfo")
      //   throw err
      // }
    },

    // 切换角色
    switchRoles() {
      //   return new Promise((resolve) => {
      //     this.role = this.role === "user" ? "admin" : "user"
      //     resolve(this.role)
      //   })
    },

    // 设置用户信息
    setInfo(partial) {
      //   this.$patch(partial)
    },

    // 重置用户信息
    resetInfo() {
      //   this.$reset()
    },

    // 获取用户信息
    async info() {
      // const res = await getUserInfo();
      // this.setInfo(res.data);
    },

    // 注销
    async logout() {
      //   try {
      //     // await userLogout();
      //   } finally {
      //     this.logoutCallBack()
      //   }
    },

    // 注销 函数的回调
    logoutCallBack() {
      //   const appStore = useAppStore()
      //   this.resetInfo()
      //   clearToken()
      //   localStorage.removeItem("userInfo")
      //   removeRouteListener()
      //   appStore.clearServerMenu()
    },
  },
})

export default useUserStore
