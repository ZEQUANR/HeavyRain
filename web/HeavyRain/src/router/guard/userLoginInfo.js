import NProgress from "nprogress" // progress bar

import { useUserStore } from "@/store"
import { isLogin } from "@/utils/auth"

export default function setupUserLoginInfoGuard(router) {
  router.beforeEach(async (to, from, next) => {
    NProgress.start()
    const userStore = useUserStore()
    // 判断用户是否登录
    if (isLogin()) {
      // 有角色信息表示当前用户已经登录且获取过用户信息
      if (userStore.role) {
        next()
      } else {
        try {
          // 获取用户角色信息后再进行后续跳转处理
          await userStore.info()
          next()
        } catch (error) {
          await userStore.logout()
          next({
            name: "login",
            query: {
              redirect: to.name,
              ...to.query,
            },
          })
        }
      }
    } else {
      // 如果未登录则重定向到登录页面
      if (to.name === "login") {
        next()
        return
      }
      next({
        name: "login",
        query: {
          redirect: to.name,
          ...to.query,
        },
      })
    }
  })
}
