<template>
  <div class="flex flex-col space-y-1 cursor-pointer">
    <div :class="{ selected: selected }" class="userpic">
      <img
        v-if="data.logo.mode === 'image'"
        :src="data.logo.image.thumbs['64x64@2x'].url"
        alt=""
      />
      <div
        v-else-if="data.logo.mode === 'gradient'"
        :style="`background: linear-gradient(to right, ${data.logo.gradient.from}, ${data.logo.gradient.to});`"
        class="w-12 h-12 rounded-full flex items-center justify-center"
      >
        <div
          v-if="data.logo.text"
          class="text-xs"
          :style="{ color: data.logo.text.color }"
        >
          <span>{{ data.logo.text.formatted_value }}</span>
        </div>
      </div>
      <div v-else class="w-12 h-12 rounded-full bg-gray-200"></div>
    </div>
    <div class="px-2 text-center">
      <div class="truncate text-xs">
        {{ data.name }}
      </div>
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
  @apply w-12 h-12 rounded-full flex justify-center overflow-hidden mx-auto;
  outline: 1px solid rgba(255, 255, 255, 0.5);

  &.selected {
    outline: 2px solid rgba(255, 255, 255, 0.5);
  }
}
</style>
