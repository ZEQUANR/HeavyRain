import { defineStore } from 'pinia';
import { userRegister, userLogin, userInfo } from '@/api/use';
import { setToken, clearToken } from '@/utils/auth';
// import { removeRouteListener } from '@/utils/route-listener';
// import useAppStore from "../app"

const useUserStore = defineStore('user', {
  state: () => ({
    userId: 0, // 用户 id
    account: '', // 用户名
    role: '', // 权限
  }),

  getters: {
    // userInfo(state: UserState): UserState {
    //   return { ...state }
    // },
  },

  actions: {
    // 注册
    async register(registerForm) {
      try {
        const res = await userRegister(registerForm);
      } catch (err) {
        throw err;
      }
    },
    // 登陆
    async login(loginForm) {
      try {
        const res = await userLogin(loginForm);
        setToken(res.data.token);
      } catch (err) {
        clearToken();
        throw err;
      }
    },
    // 获取用户信息
    async info() {
      const res = await userInfo();
      this.setInfo(res.data);
    },
    // 设置用户信息
    setInfo(partial) {
      this.$patch(partial);
    },
    // 注销
    async logout() {
      try {
        // await userLogout();
      } finally {
        this.logoutCallBack();
      }
    },
    // 注销 函数的回调
    logoutCallBack() {
      this.resetInfo();
      clearToken();
      // removeRouteListener();
    },
    // 重置用户信息
    resetInfo() {
      this.$reset();
    },

    // 切换角色
    switchRoles() {
      //   return new Promise((resolve) => {
      //     this.role = this.role === "user" ? "admin" : "user"
      //     resolve(this.role)
      //   })
    },
  },
});

export default useUserStore;
