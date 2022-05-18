<template>
  <div v-if="installation" class="w-full h-screen flex flex-col space-y-12 justify-center">
    <div class="flex justify-center">
      <div class="text-2xl text-center font-bold">
        {{ $t("installCashApp.title") }}<br />
        {{ installation.name }}
      </div>
    </div>
    <div class="flex justify-center items-center space-x-4">
      <div>
        <img src="app.png" class="w-24" alt="" />
      </div>
      <div>
        <svg
          width="25"
          height="21"
          viewBox="0 0 25 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.378 10.4933C24.378 10.1041 24.2148 9.7274 23.926 9.45117L15.6768 1.20201C15.3504 0.888114 15.0114 0.75 14.6598 0.75C13.8562 0.75 13.2787 1.31501 13.2787 2.08092C13.2787 2.4827 13.4419 2.82171 13.693 3.07282L16.5181 5.93555L20.1592 9.26283L17.2463 9.08705L2.02867 9.08705C1.18743 9.08705 0.609863 9.66462 0.609863 10.4933C0.609863 11.3094 1.18743 11.887 2.02867 11.887L17.2463 11.887L20.1592 11.7112L16.5181 15.0385L13.693 17.9012C13.4419 18.1523 13.2787 18.4914 13.2787 18.8931C13.2787 19.659 13.8562 20.2241 14.6598 20.2241C15.0114 20.2241 15.3504 20.0859 15.6517 19.7972L23.926 11.5229C24.2148 11.2467 24.378 10.87 24.378 10.4933Z"
            fill="#AEAEB2"
          />
        </svg>
      </div>
      <div>
        <userpic :installation="installation" :large="true"></userpic>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="flex flex-col space-y-2">
        <button-component
          @click.prevent="install"
          :loading="loading"
          :loadingText="$t('installCashApp.loading')"
          :disabled="loading"
          :text="$t('installCashApp.button')"
        />
        <div class="flex justify-center text-sm text-green">
          {{ $t("installCashApp.trial") }}
        </div>
        <div v-if="errorStatus">
          {{ $t(`errors.install[${errorStatus}]`) }}
        </div>
      </div>
    </div>
    <div class="max-w-sm text-sm mx-auto text-center opacity-50">
      {{ $t("installCashApp.desc", { name: installation.name }) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { onBeforeMount, ref } from 'vue'
import Userpic from '@/components/elements/Userpic.vue'
import ButtonComponent from '@/components/elements/Button.vue'
import { http } from '@/composables/http'
import { useAppState } from '@/composables/appState'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { Installation } from '@/types/models'

const route = useRoute()
const store = useStore()
const loading = ref(false)
const errorStatus = ref<number | undefined>(undefined)
const installation = ref<Installation | undefined>(undefined)

const install = async () => {
  if (installation.value) {
    try {
      loading.value = true
      errorStatus.value = undefined

      await http(installation.value.accessToken).post(
      `${installation.value.url}/api.php/installer.product.install`,
      {
        slug: 'cash'
      }
      )

      useAppState.reload()
    } catch (error) {
      if (axios.isAxiosError(error)) {
        loading.value = false
        errorStatus.value = error.response?.status
      }
    }
  }
}

onBeforeMount(() => {
  installation.value = store.getters.installationById(route.params.id)
})

</script>
