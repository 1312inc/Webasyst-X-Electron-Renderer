<template>
    <div class="flex w-full">
        <div class="w-20 flex h-screen">
            <div class="w-20 bg-green dark:bg-greenDark pt-4 pb-4">
                <div class="h-full flex flex-col justify-end">
                    <div class="flex flex-col space-y-2">
                        <div class="flex justify-center opacity-60">
                            <router-link to="login">
                                <img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1LjkyIDE2aDEzIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIycHgiIGNsYXNzPSJzdHJva2UtMDAwMDAwIj48L3BhdGg+PHBhdGggZD0iTTIzLjkzIDI1djNoLTE2VjRoMTZ2M2gyVjNhMSAxIDAgMCAwLTEtMWgtMThhMSAxIDAgMCAwLTEgMXYyNmExIDEgMCAwIDAgMSAxaDE4YTEgMSAwIDAgMCAxLTF2LTRaIiBmaWxsPSIjZmZmZmZmIiBjbGFzcz0iZmlsbC0wMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtMjguOTIgMTYtNCA0TTI4LjkyIDE2bC00LTRNMjQuOTIgOC4wOXYtMk0yNC45MiAyNnYtMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMnB4IiBjbGFzcz0ic3Ryb2tlLTAwMDAwMCI+PC9wYXRoPjwvc3ZnPg==" class="w-8 rounded-full" />
                            </router-link>
                        </div>
                        <div class="flex justify-center opacity-60">
                            <router-link to="login" class="text-xs text-white">
                                {{ $t('demo.exit') }}
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-grow"></div>
    </div>
</template>

<script setup lang="ts">
import { useAppState } from '@/composables/appState'
import { useI18n } from 'vue-i18n'
const i18n = useI18n()

const installation = {
  url: `https://demo1${i18n.locale.value === 'ru' ? '-ru' : ''}.webasyst.com`,
  accessToken: '983cc51ad6abb3ed29e9f6fe9bdc1131'
}

useAppState.openAppInView(
  JSON.parse(JSON.stringify(installation))
)

</script>
