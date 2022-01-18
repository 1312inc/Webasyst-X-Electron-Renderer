import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    signInButton: 'Sign in with Webasyst ID',
    signInMessage: 'Know how much money you\'ll have on your business account tomorrow, in a week, in a month, and a year.<br /><br />Sign in with Webasyst ID to quickly connect to all your Webasyst accounts.',
    installButton: 'Install',
    installMessage: 'This app automatically shows all Webasyst account with the Cash Flow app installed. Don\'t see anything here? Head on to the Cash Flow app site and install the app. Then get back here!',
    logout: 'Logout'
  },
  ru: {
    signInButton: 'Sign in with Webasyst ID',
    signInMessage: 'Know how much money you\'ll have on your business account tomorrow, in a week, in a month, and a year.<br /><br />Sign in with Webasyst ID to quickly connect to all your Webasyst accounts.',
    installButton: 'Install',
    installMessage: 'This app automatically shows all Webasyst account with the Cash Flow app installed. Don\'t see anything here? Head on to the Cash Flow app site and install the app. Then get back here!',
    logout: 'Logout'
  }
}

const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'ru',
  messages
})

export { i18n }
