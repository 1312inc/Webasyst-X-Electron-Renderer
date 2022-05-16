<template>
  <button :class="classes" :disabled="disabled" type="button">
    <svg
      v-if="loading"
      class="motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <slot></slot>
    {{ loading ? (loadingText || $t("loading")) : text }}
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps, toRefs } from 'vue'

const props = defineProps<{
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  outlined?: boolean;
  text: string;
}>()

const { disabled, loading, loadingText, outlined, text } = toRefs(props)

const classes = computed(() => {
  return {
    outlined: outlined?.value
  }
})
</script>

<style lang="scss" scoped>
button {
  @apply inline-flex items-center font-semibold leading-6 text-sm bg-blue-600 text-white px-6 py-2 rounded-xl transition-opacity hover:opacity-80;

  &.outlined {
    @apply bg-white text-gray-700 border-2;
  }
}
</style>
