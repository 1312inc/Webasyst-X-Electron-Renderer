import { Installation } from '../types/models'

const appState = (window as any).appState

const useAppState = {
  openExternalLink (url: string): void {
    appState.openExternalLink(url)
  },

  reload (): void {
    appState.reload()
  },

  token (): Promise<string> {
    return appState.token()
  },

  login (): void {
    appState.login()
  },

  logout (): void {
    appState.logout()
  },

  openAppInView (installation: Installation): void {
    appState.openAppInView(installation)
  }
}

export { useAppState }
