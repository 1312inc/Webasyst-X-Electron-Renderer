<template>
  <div class="w-full h-screen flex flex-col space-y-8 justify-center">
    <div class="text-center">
      <img src="cash.png" alt="" class="w-24 mx-auto mb-4" />
      <div class="text-3xl mb-4 font-medium">{{ $t("cloud.title") }}</div>
      <div class="max-w-sm text-sm mx-auto opacity-50">
        {{ $t("cloud.desc") }}
      </div>
    </div>
    <div class="flex justify-center">
      <button-component
        @click.prevent="open"
        :loading="loading"
        :disabled="loading"
        :text="$t('cloud.button')"
      />
    </div>
    <div v-if="errorMessage" class="text-center">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { http } from '@/composables/http'
import ButtonComponent from '@/components/elements/Button.vue'
import { useAppState } from '@/composables/appState'

const loading = ref(false)
const errorMessage = ref('')

const open = async () => {
  try {
    loading.value = true
    errorMessage.value = ''

    await http().post('https://www.webasyst.com/id/api/v1/cloud/signup/', {
      bundle: 'cashflow',
      plan_id: 'X-1312-CASHFLOW-1'
    })

    useAppState.reload()
  } catch (error) {
    if (axios.isAxiosError(error)) {
      loading.value = false
      errorMessage.value = error.response?.data.error
    }
  }
}
</script>
