<template>
  <div class="w-screen h-screen flex flex-col justify-center">
    <div class="text-center mb-8">
      <img src="cash.png" alt="" class="w-36 mx-auto mb-4" />
      <div class="text-3xl mb-4 font-medium">Cash Flow</div>
      <div
        v-html="$t('signInMessage')"
        class="max-w-sm text-sm mx-auto opacity-50"
      ></div>
    </div>
    <div class="flex justify-center">
      <button @click.prevent="login">
        <div class="flex items-center space-x-2">
          <img src="webasystIcon.svg" alt="" class="w-6" />
          <span>{{ $t("signInButton") }}</span>
        </div>
      </button>
    </div>
    <img
      src="webasyst.svg"
      alt=""
      class="w-24 absolute bottom-8 left-1/2 transform -translate-x-1/2"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const login = () => {
      (window as any).appState.login()
    }

    return {
      login
    }
  }
})
</script>
