<template>
  <div :class="{ 'opacity-100': selected }" class="flex flex-col space-y-1 cursor-pointer opacity-60">
    <div class="userpic">
      <img
        v-if="data.logo.mode === 'image'"
        :src="data.logo.image.thumbs['64x64@2x'].url"
        alt=""
      />
      <div
        v-else
        :style="`background: linear-gradient(to right, ${data.logo.gradient.from}, ${data.logo.gradient.to});`"
        class="w-full h-full flex items-center justify-center"
      >
        <div
          v-if="data.logo.text"
          class="text-xs"
          :style="{ color: data.logo.text.color }"
        >
          <span>{{ data.logo.text.formatted_value }}</span>
        </div>
      </div>
    </div>
    <div class="px-2 text-center text-xs">
      {{ data.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Installation } from '@/types/models'

export default defineComponent({
  props: {
    data: {
      type: Object as PropType<Installation>,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="scss" scoped>
.userpic {
  @apply w-10 h-10 rounded-full flex justify-center overflow-hidden mx-auto;
}
</style>
