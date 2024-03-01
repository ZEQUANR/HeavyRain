import { useUserStore } from "@/store"

export default function usePermission() {
  const userStore = useUserStore()
  return {
    // 判断当前用户是否有该路由的权限
    accessRouter(route) {
      return (
        !route.meta?.requiresAuth ||
        !route.meta?.roles ||
        route.meta?.roles?.includes("*") ||
        route.meta?.roles?.includes(userStore.role)
      )
    },
    // 在给定的路由配置 _routers 中找到第一个与指定角色 role（默认为 "admin"）匹配权限的路由对象，并返回该路由的名称
    findFirstPermissionRoute(_routers, role = "admin") {
      const cloneRouters = [..._routers]
      while (cloneRouters.length) {
        const firstElement = cloneRouters.shift()
        if (
          firstElement?.meta?.roles?.find((el) => {
            return el.includes("*") || el.includes(role)
          })
        )
          return { name: firstElement.name }
        if (firstElement?.children) {
          cloneRouters.push(...firstElement.children)
        }
      }
      return null
    },
    // You can add any rules you want
  }
}
