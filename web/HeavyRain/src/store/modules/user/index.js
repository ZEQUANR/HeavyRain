import { defineStore } from "pinia"
import { userLogin } from "@/api/use"
import { setToken, clearToken } from "@/utils/auth"
// import { removeRouteListener } from "@/utils/route-listener"
// import useAppStore from "../app"

const useUserStore = defineStore("user", {
  state: () => ({
    userId: 0, // 用户 id
    account: "", // 用户名
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
      try {
        const res = await userLogin(loginForm)

        if (res.status === 200) {
          this.userId = res.data.id
          this.account = res.data.account
          this.role = res.data.role

          setToken(res.data.token)
        }
      } catch (err) {
        clearToken()
        throw err
      }
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
