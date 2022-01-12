<template>
  <div class="flex w-full">
    <div class="w-20 flex h-screen">
      <div class="w-20 bg-green pt-8 pb-4">
        <div class="h-full flex flex-col justify-between text-white">
          <div class="flex flex-col gap-4">
            <installation-component
              v-for="installation in sortedInstallations.filter(
                (i) => i.accessToken
              )"
              :key="installation.id"
              :data="installation"
              @click="installationOnClick(installation)"
              :selected="selectedId === installation.id"
            />
          </div>
          <div v-if="user" class="flex flex-col gap-2">
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
    <div style="flex-grow: 1">
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
    const selectedId = ref(
      (window as any).localStorage.getItem('installation_selected') || ''
    )
    const showInstallAppComponent = ref(false)

    const sortedInstallations = computed(() => {
      if (selectedId.value) {
        const temp = [...installations.value]
        temp.unshift(
          temp.splice(
            temp.findIndex((i: Installation) => i.id === selectedId.value),
            1
          )[0]
        )
        return temp
      }
      return installations.value
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

    watch(selectedId, (val: string) => {
      (window as any).localStorage.setItem('installation_selected', val)
    })

    const logout = () => {
      if ((window as any).appState.logout) {
        (window as any).appState.logout()
      }
    }

    const installationOnClick = (installation: Installation) => {
      (window as any).appState.openAppInView(
        JSON.parse(JSON.stringify(installation))
      )
      selectedId.value = installation.id
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
      if (selectedId.value) {
        const instn = installations.value.find(
          (i: Installation) => i.id === selectedId.value
        )
        if (instn) {
          installationOnClick(instn)
          return
        }
      }
      installationOnClick(installations.value[0])
    })()

    return {
      selectedId,
      user,
      sortedInstallations,
      logout,
      showInstallAppComponent,
      installationOnClick
    }
  }
})
</script>
