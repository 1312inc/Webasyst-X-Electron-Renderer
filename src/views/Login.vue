<template>
  <div class="w-screen h-screen flex flex-col justify-center bg-green">
    <div class="text-center mb-8">
      <img src="cash.png" alt="" class="w-24 mx-auto mb-4" />
      <div class="text-xl">Welcome message</div>
    </div>
    <div class="flex justify-center">
      <button @click.prevent="login">Login</button>
    </div>
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
