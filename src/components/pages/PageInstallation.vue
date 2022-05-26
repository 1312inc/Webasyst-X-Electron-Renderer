<template>
  <div></div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { useAppState } from '@/composables/appState'
import { watch } from 'vue'

const store = useStore()
const route = useRoute()

watch(() => route.params.id, async (id) => {
  if (typeof id === 'string') {
    const installation = store.getters.installationById(id)
    useAppState.openAppInView(
      JSON.parse(JSON.stringify(installation))
    )
    installation.last_use_datetime = new Date().getTime()
    document.title = installation.name
  }
}, {
  immediate: true
})

</script>
