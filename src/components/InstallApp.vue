<template>
  <div class="w-full h-screen flex flex-col justify-center bg-green dark:bg-greenDark">
    <div class="text-center mb-8">
      <img src="cash.png" alt="" class="w-36 mx-auto mb-4" />
      <div class="max-w-sm text-sm mx-auto opacity-50">
        {{ $t("installMessage") }}
      </div>
    </div>
    <div class="flex justify-center">
      <button @click.prevent="open">{{ $t("installButton") }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const open = () => {
      (window as any).appState.openExternalLink(
        'https://2.webasyst.ru/store/app/cash/'
      )
    }
    return {
      open
    }
  }
})
</script>
