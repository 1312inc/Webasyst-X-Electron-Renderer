<template>
<div></div>
</template>

<script lang="ts">
import axios from 'axios'
import { NavigationGuardNext, onBeforeRouteUpdate, RouteLocationNormalized, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { http } from '@/composables/http'
import { useAppState } from '@/composables/appState'
import { defineComponent } from 'vue'

export default defineComponent({

  setup () {
    const store = useStore()
    const router = useRouter()

    const updateInstallation = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext, withNext = true) => {
      const id = to.params.id
      if (id) {
        const installation = store.getters.installationById(id)
        try {
          await http(installation.accessToken).get(`${installation.url}/api.php/cash.account.getList`)
          useAppState.openAppInView(
            JSON.parse(JSON.stringify(installation))
          )
        } catch (error) {
          if (axios.isAxiosError(error)) {
            if (error.response?.data.error === 'app_not_installed') {
              router.replace({ name: 'InstallApp', params: { id } })
              return
            }
          }
        }
        installation.last_use_datetime = new Date().getTime()
        document.title = installation.name

        if (withNext) {
          next()
        }
      } else {
        next()
      }
    }

    onBeforeRouteUpdate(updateInstallation)

    return {
      store,
      updateInstallation
    }
  },

  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      vm.updateInstallation(to, from, next, false)
    })
  }
})

</script>
