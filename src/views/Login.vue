<template>
  <div class="w-screen h-screen flex flex-col justify-center">
    <div class="text-center mb-8">
      <img src="cash.png" alt="" class="w-24 mx-auto mb-4" />
      <div class="text-3xl mb-4 font-medium">{{ $t("appName") }}</div>
      <div
        v-html="$t('signInMessage')"
        class="max-w-sm text-sm mx-auto opacity-50"
      ></div>
    </div>
    <div class="flex justify-center">
      <button-component
        @click.prevent="useAppState.login"
        :text="$t('signInButton')"
        :outlined="true"
      >
        <img src="webasystIcon.svg" alt="" class="w-6 mr-3" />
      </button-component>
    </div>
    <a
      @click.prevent="
        useAppState.openExternalLink(
          `https://www.webasyst.${$i18n.locale === 'ru' ? 'ru' : 'com'}`
        )
      "
      href="#"
    >
      <img
        src="webasyst.svg"
        alt=""
        class="w-24 absolute bottom-8 left-1/2 transform -translate-x-1/2"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from '@/components/elements/Button.vue'
import { useAppState } from '@/composables/appState'
</script>
