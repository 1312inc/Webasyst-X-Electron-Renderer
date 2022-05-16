<template>
  <div :class="classes">
    <img
      v-if="props.installation.logo.mode === 'image'"
      :src="props.installation.logo.image.thumbs['64x64@2x'].url"
      alt=""
    />
    <div
      v-else
      :style="`background: linear-gradient(to right, ${props.installation.logo.gradient.from}, ${props.installation.logo.gradient.to});`"
      class="w-full h-full flex items-center justify-center"
    >
      <div
        v-if="props.installation.logo.text"
        :style="{ color: props.installation.logo.text.color }"
      >
        <span>{{ props.installation.logo.text.formatted_value }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Installation } from '@/types/models'

const props = defineProps<{
  installation: Installation;
  large?: boolean;
}>()

const classes = {
  userpic: true,
  'userpic--large': props.large
}
</script>

<style lang="scss">
.userpic {
  @apply w-10 h-10 rounded-full flex justify-center overflow-hidden mx-auto text-xs;

  &--large {
      @apply w-24 h-24 text-2xl;
  }
}
</style>
