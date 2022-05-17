<template>
  <div></div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { http } from '@/composables/http'
import { useAppState } from '@/composables/appState'
import { watch } from 'vue'

const store = useStore()
const router = useRouter()
const route = useRoute()

watch(() => route.params.id, async (id) => {
  if (typeof id === 'string') {
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
  }
}, {
  immediate: true
})

</script>
