import { createI18n } from 'vue-i18n'
import { useAppState } from '@/composables/appState'

const i18n = createI18n({
  locale: useAppState.locale.lang,
  messages: {
    [useAppState.locale.lang]: useAppState.locale.messages
  }
})

export { i18n }
