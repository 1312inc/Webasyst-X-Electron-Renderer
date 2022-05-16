<template>
  <div class="flex w-full">
    <div class="w-20 flex h-screen">
      <div class="w-20 bg-green dark:bg-greenDark pt-4 pb-4">
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
              <img :src="user.userpic" class="w-10 rounded-full" />
            </div>
            <div class="flex justify-center opacity-60">
              <a href="#" @click.prevent="useAppState.logout" class="text-xs">{{
                $t("logout")
              }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-grow">
      <component v-if="showStub" :is="stubComponentName" :installation="activeInstallation"></component>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { watch, defineComponent, ref, computed } from 'vue'
import InstallationComponent from '@/components/Installation.vue'
import CreateCloud from '@/components/CreateCloud.vue'
import { Installation } from '@/types/models'
import InstallCashApp from '@/components/InstallCashApp.vue'
import { useAppState } from '@/composables/appState'

export default defineComponent({
  components: {
    InstallationComponent,
    CreateCloud,
    InstallCashApp
  },

  setup () {
    const user = ref(
      JSON.parse((window as any).localStorage.getItem('WAID_user')) || null
    )
    const installations = ref<Array<Installation>>(
      JSON.parse((window as any).localStorage.getItem('WAID_installations')) ||
        []
    )
    const showStub = ref(false)
    const stubComponentName = ref('')
    const activeInstallation = ref<Installation | null>(null)

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

    const installationOnClick = async (installation: Installation) => {
      activeInstallation.value = installation
      try {
        const http = axios.create({
          headers: { Authorization: `Bearer ${installation.accessToken}` }
        })
        await http.get(`${installation.url}/api.php/cash.account.getList`)
      } catch (error) {
        if (error.response.data.error === 'app_not_installed') {
          showStub.value = true
          stubComponentName.value = 'InstallCashApp'
          return
        }
      }

      useAppState.openAppInView(
        JSON.parse(JSON.stringify(installation))
      )
      installation.last_use_datetime = new Date().getTime()
      document.title = installation.name
    };

    (async () => {
      const token: string = await useAppState.token()
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
        showStub.value = true
        stubComponentName.value = 'CreateCloud'
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
          scope: 'cash,webasyst,installer',
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

      await Promise.allSettled(promises)

      // open default Installation
      installationOnClick(sortedInstallations.value[0])
    })()

    return {
      user,
      sortedInstallations,
      showStub,
      installationOnClick,
      stubComponentName,
      activeInstallation,
      useAppState
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
