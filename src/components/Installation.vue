<template>
  <div class="flex flex-col gap-2 cursor-pointer">
    <div class="flex justify-center">
      <img
        v-if="data && data.logo.image.thumbs['64x64@2x']"
        :src="data.logo.image.thumbs['64x64@2x'].url"
        :class="{ selected: selected }"
        alt=""
        class="userpic"
      />
      <div v-else class="w-12 h-12 rounded-full bg-gray-200"></div>
    </div>
    <div class="px-2 h-3">
      <div v-if="data" class="truncate text-xs">
        {{ data.name }}
      </div>
      <div v-else class="h-full rounded-sm bg-gray-200"></div>
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
  @apply w-12 h-12 rounded-full;
  border: 1px solid rgba(255, 255, 255, 0.5);

  &.selected {
    border: 2px solid rgba(255, 255, 255, 0.5);
  }
}
</style>
