import { createStore } from 'vuex'
import { Installation } from '@/types/models'

export default createStore({
  state: {
    installations: JSON.parse((window as any).localStorage.getItem('WAID_installations')) || []
  },
  getters: {
    sortedInstallations (state) {
      return state.installations
        .filter((i: Installation) => i.accessToken)
        .sort((a: Installation, b: Installation) => {
          if ((a.last_use_datetime || 0) > (b.last_use_datetime || 0)) {
            return -1
          }
          if ((a.last_use_datetime || 0) < (b.last_use_datetime || 0)) {
            return 1
          }
          return 0
        })
    },

    installationById: state => (id: string) => {
      return state.installations.find((i: Installation) => i.id === id)
    }
  },
  mutations: {
    SET_INSTALLATIONS (state, data) {
      state.installations = data
    }
  },
  actions: {
  },
  modules: {
  }
})
