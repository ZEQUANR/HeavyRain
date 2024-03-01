import NProgress from "nprogress" // progress bar

import usePermission from "@/hook/permission"
import { useUserStore } from "@/store"
import { appRoutes } from "../routes"
import { NOT_FOUND } from "../constants"

export default function setupPermissionGuard(router) {
  router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore()
    const Permission = usePermission()
    const permissionsAllow = Permission.accessRouter(to)

    if (permissionsAllow) next()
    else {
      const destination =
        Permission.findFirstPermissionRoute(appRoutes, userStore.role) ||
        NOT_FOUND
      next(destination)
    }
    NProgress.done()
  })
}
