<template>
  <div class="w-full h-screen flex flex-col justify-center bg-green">
    <div class="text-center mb-8">
      <img src="cash.png" alt="" class="w-24 mx-auto mb-4" />
      <div class="text-xl text-white max-w-xl mx-auto mb-4">
        This app automatically shows all Webasyst account with the Cash Flow app
        installed. Don't see anything here? Head on to the Cash Flow app site
        and install the app. Then get back here!
      </div>
      <div class="flex justify-center">
      <button @click.prevent="open">Install</button>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const open = () => {
      (window as any).appState.openExternalLink('https://2.webasyst.ru/store/app/cash/')
    }
    return {
      open
    }
  }
})
</script>
