<template>
  <div class="flex flex-col gap-2 cursor-pointer">
    <div class="flex justify-center">
      <img
        v-if="
          installationInfo && installationInfo.logo.image.thumbs['64x64@2x']
        "
        :src="installationInfo.logo.image.thumbs['64x64@2x'].url"
        alt=""
        class="w-12 h-12 rounded-full"
      />
      <div v-else class="w-12 h-12 rounded-full bg-gray-200"></div>
    </div>
    <div class="px-2 h-3">
      <div v-if="installationInfo" class="truncate text-xs">
        {{ installationInfo.name }}
      </div>
      <div v-else class="h-full rounded-sm bg-gray-200"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { Installation, InstallationInfo } from '@/types/models'
import axios from 'axios'

export default defineComponent({
  props: {
    data: {
      type: Object as PropType<Installation>,
      required: true
    }
  },

  setup (props) {
    const installationInfo = ref<InstallationInfo | null>(
      JSON.parse(
        (window as any).localStorage.getItem(`installation_${props.data.id}`)
      ) || null
    )

    watch(
      installationInfo,
      (val) => {
        (window as any).localStorage.setItem(
          `installation_${props.data.id}`,
          JSON.stringify(val)
        )
      },
      {
        deep: true
      }
    );

    (async () => {
      const { data } = await axios.get(
        `${props.data.url}/api.php/webasyst.getInfo`,
        {
          headers: { Authorization: `Bearer ${props.data.accessToken}` }
        }
      )

      installationInfo.value = data
    })()

    return {
      installationInfo
    }
  }
})
</script>
