<template>
  <div class="w-20 flex h-screen">
    <div class="w-20 bg-green-400 py-4">
      <div class="h-full flex flex-col justify-between text-white">
        <div class="flex flex-col gap-4">
          <installation-component
            v-for="installation in installations.filter((i) => i.accessToken)"
            :key="installation.id"
            :data="installation"
            @click="installationOnClick(installation)"
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
</template>

<script lang="ts">
import axios from 'axios'
import { watch, defineComponent, ref } from 'vue'
import InstallationComponent from '@/components/Installation.vue'
import { Installation, InstallationInfo } from '@/types/models'

export default defineComponent({
  components: {
    InstallationComponent
  },

  setup () {
    const user = ref(
      JSON.parse((window as any).localStorage.getItem('WAID_user')) || null
    )
    const installations = ref<Array<Installation>>(
      JSON.parse((window as any).localStorage.getItem('WAID_installations')) ||
        []
    )

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
      const name = (
        JSON.parse(
          (window as any).localStorage.getItem(
            `installation_${installation.id}`
          )
        ) as InstallationInfo
      ).name;
      (window as any).appState.openAppInView(
        JSON.parse(JSON.stringify({ ...installation, name } as Installation))
      )
    };

    (async () => {
      const token: string = await (window as any).appState.token()
      const http = axios.create({
        headers: { Authorization: `Bearer ${token}` }
      })

      const { data } = await http.get(
        'https://www.webasyst.com/id/api/v1/profile/'
      )
      user.value = data

      http
        .get('https://www.webasyst.com/id/api/v1/installations/')
        .then((res) => {
          installations.value = res.data.map((e: Installation) => {
            return {
              ...e,
              ...installations.value.find((i) => i.id === e.id)
            }
          })

          const ids = installations.value.map((e: Installation) => e.id)

          http
            .post('https://www.webasyst.com/id/api/v1/auth/client/', {
              client_id: ids
            })
            .then((res) => {
              for (const installation of installations.value) {
                const options = new URLSearchParams({
                  code: res.data[installation.id],
                  scope: 'cash,webasyst',
                  client_id: 'WebasystDesktopApp'
                }).toString()
                axios
                  .post(`${installation.url}/api.php/token-headless`, options)
                  .then((res) => {
                    installation.accessToken = res.data.access_token
                  })
              }
            })
        })
    })()

    return {
      user,
      installations,
      logout,
      installationOnClick
    }
  }
})
</script>
