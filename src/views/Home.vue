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
                @click="navigateToInstallation(installation.id)"
                :selected="i === 0"
                class="list-item"
              />
            </transition-group>
            <div
              @click.prevent="$router.replace({name: 'Cloud'})"
              class="cursor-pointer text-6xl text-center opacity-60"
            >
              +
            </div>
          </div>
          <div v-if="user" class="flex flex-col space-y-2">
            <div class="flex justify-center">
              <a @click.prevent="useAppState.openExternalLink('https://www.webasyst.com/my/profile/')" href="#">
                <img :src="user.userpic" class="w-10 rounded-full" />
              </a>
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
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, computed } from 'vue'
import InstallationComponent from '@/components/elements/Installation.vue'
import { Installation } from '@/types/models'
import { useAppState } from '@/composables/appState'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { http } from '@/composables/http'

const store = useStore()
const router = useRouter()
const installations = computed(() => store.state.installations)
const sortedInstallations = computed(() => store.getters.sortedInstallations)
const navigateToInstallation = (id: string) => {
  router.replace({ name: 'Installation', params: { id } })
}

const user = ref(
  JSON.parse((window as any).localStorage.getItem('WAID_user')) || null
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

;(async () => {
  // get User data
  const { data } = await http().get(
    'https://www.webasyst.com/id/api/v1/profile/'
  )
  user.value = data

  // get User Installations
  const { data: requestedInstallations } = await http().get(
    'https://www.webasyst.com/id/api/v1/installations/'
  )

  store.commit('SET_INSTALLATIONS', requestedInstallations.map((e: Installation) => {
    return {
      ...(installations.value.find((i: Installation) => i.id === e.id) ||
            {}),
      ...e
    }
  }))

  // if No Installations
  if (!installations.value.length) {
    router.replace({ name: 'Cloud' })
    return
  }

  // get AuthCodes for the Installations
  const { data: authCodes } = await http().post(
    'https://www.webasyst.com/id/api/v1/auth/client/',
    {
      client_id: installations.value.map((e: Installation) => e.id)
    }
  )

  // get Tokens for the Installations
  const promises = []
  for (const [i, v] of installations.value.entries()) {
    promises.push(
      (async () => {
        const { data: token } = await http().post(
              `${v.url}/api.php/token-headless`,
              {
                code: authCodes[v.id],
                scope: 'cash,webasyst,installer',
                client_id: 'WebasystDesktopApp'
              }
        )
        const { data: info } = await http(token.access_token).get(
              `${v.url}/api.php/webasyst.getInfo`)
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
  navigateToInstallation(sortedInstallations.value[0].id)
})()

</script>

<style scoped lang="scss">
.overflow-y-auto {
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
