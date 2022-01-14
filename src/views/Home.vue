<template>
  <div class="flex w-full">
    <div class="w-20 flex h-screen">
      <div class="w-20 bg-green pt-8 pb-4">
        <div class="h-full flex flex-col space-y-4 text-white">
          <div class="h-4"></div>
          <div class="flex flex-grow overflow-y-auto flex-col space-y-4 pt-1">
            <transition-group name="list">
              <installation-component
                v-for="(installation, i) in sortedInstallations"
                :key="installation.id"
                :data="installation"
                @click="installationOnClick(installation)"
                :selected="i === 0"
                class="list-item"
              />
            </transition-group>
          </div>
          <div v-if="user" class="flex flex-col space-y-2">
            <div class="flex justify-center">
              <img :src="user.userpic" class="w-12 rounded-full" />
            </div>
            <div class="flex justify-center">
              <a href="#" @click.prevent="logout" class="text-xs">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-grow">
      <install-app v-if="showInstallAppComponent"></install-app>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { watch, defineComponent, ref, computed } from 'vue'
import InstallationComponent from '@/components/Installation.vue'
import InstallApp from '@/components/InstallApp.vue'
import { Installation } from '@/types/models'

export default defineComponent({
  components: {
    InstallationComponent,
    InstallApp
  },

  setup () {
    const user = ref(
      JSON.parse((window as any).localStorage.getItem('WAID_user')) || null
    )
    const installations = ref<Array<Installation>>(
      JSON.parse((window as any).localStorage.getItem('WAID_installations')) ||
        []
    )
    const showInstallAppComponent = ref(false)

    const sortedInstallations = computed(() => {
      return installations.value
        .filter((i) => i.accessToken)
        .sort((a, b) => {
          if ((a.last_use_datetime || 0) > (b.last_use_datetime || 0)) {
            return -1
          }
          if ((a.last_use_datetime || 0) < (b.last_use_datetime || 0)) {
            return 1
          }
          return 0
        })
    })

    watch(user, (val: any) => {
      (window as any).localStorage.setItem('WAID_user', JSON.stringify(val))
    })

    watch(
      installations,
      (val: Installation[]) => {
        (window as any).localStorage.setItem(
          'WAID_installations',
          JSON.stringify(val)
        )
      },
      { deep: true }
    )

    const logout = () => {
      if ((window as any).appState.logout) {
        (window as any).appState.logout()
      }
    }

    const installationOnClick = (installation: Installation) => {
      (window as any).appState.openAppInView(
        JSON.parse(JSON.stringify(installation))
      )
      installation.last_use_datetime = new Date().getTime()
    };

    (async () => {
      const token: string = await (window as any).appState.token()
      const http = axios.create({
        headers: { Authorization: `Bearer ${token}` }
      })

      // get User data
      const { data } = await http.get(
        'https://www.webasyst.com/id/api/v1/profile/'
      )
      user.value = data

      // get User Installations
      const { data: requestedInstallations } = await http.get(
        'https://www.webasyst.com/id/api/v1/installations/'
      )
      installations.value = requestedInstallations.map((e: Installation) => {
        return {
          ...(installations.value.find((i: Installation) => i.id === e.id) ||
            {}),
          ...e
        }
      })

      // if No Installations
      if (!installations.value.length) {
        showInstallAppComponent.value = true
        return
      }

      // get AuthCodes for the Installations
      const { data: authCodes } = await http.post(
        'https://www.webasyst.com/id/api/v1/auth/client/',
        {
          client_id: installations.value.map((e: Installation) => e.id)
        }
      )

      // get Tokens for the Installations
      const promises = []
      for (const [i, v] of installations.value.entries()) {
        const options = new URLSearchParams({
          code: authCodes[v.id],
          scope: 'cash,webasyst',
          client_id: 'WebasystDesktopApp'
        }).toString()
        promises.push(
          (async () => {
            const { data: token } = await axios.post(
              `${v.url}/api.php/token-headless`,
              options
            )
            const { data: info } = await axios.get(
              `${v.url}/api.php/webasyst.getInfo`,
              {
                headers: { Authorization: `Bearer ${token.access_token}` }
              }
            )
            installations.value[i] = {
              ...installations.value[i],
              accessToken: token.access_token,
              ...info
            }
          })()
        )
      }

      await Promise.all(promises)

      // open default Installation
      installationOnClick(sortedInstallations.value[0])
    })()

    return {
      user,
      sortedInstallations,
      logout,
      showInstallAppComponent,
      installationOnClick
    }
  }
})
</script>

<style scoped lang="scss">
.overflow-y-auto {
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>