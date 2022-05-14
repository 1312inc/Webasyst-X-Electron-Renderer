<template>
  <div
    :class="{ 'opacity-100': selected }"
    class="flex flex-col space-y-1 cursor-pointer opacity-60"
  >
    <Userpic :installation="data" />
    <div class="px-2 text-center text-xs">
      {{ data.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import { Installation } from '@/types/models'
import Userpic from './Userpic.vue'

const props = defineProps<{
  data: Installation;
  selected: boolean;
}>()

const { data, selected } = toRefs(props)
</script>

<style lang="scss" scoped>
.userpic {
  @apply w-10 h-10 rounded-full flex justify-center overflow-hidden mx-auto;
}
</style>
