import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    appName: 'Cash Flow',
    signInButton: 'Sign in with Webasyst ID',
    signInMessage: 'Know how much money you\'ll have on your business account tomorrow, in a week, in a month, and a year.<br /><br />Sign in with Webasyst ID to quickly connect to all your Webasyst accounts.',
    logout: 'Logout',
    cloud: {
      button: 'Create Webasyst Account',
      desc: 'This app automatically shows all Webasyst account with the Cash Flow app installed. Don\'t see anything here? Head on to the Cash Flow app site and install the app. Then get back here!'
    },
    installCashApp: {
      title: 'Install Cash Flow on',
      button: 'Install Cash Flow',
      desc: '@:appName app is not installed on {name} at the moment. Tap the Install button above to install the app to your Webasyst Account via the Webasyst Installer. A free license will be issued for first 30 days.',
      trial: 'First 30 days free!'
    },
    loading: 'Loading...',
    errors: {
      install: {
        404: 'Продукт не существует',
        403: 'Токен не содержит scope installer',
        402: 'Установка продукта требует лицензии',
        409: 'Установка не соответствует требованиям продукта'
      }
    }
  },
  ru: {
    appName: 'Cash Flow',
    signInButton: 'Sign in with Webasyst ID',
    signInMessage: 'Know how much money you\'ll have on your business account tomorrow, in a week, in a month, and a year.<br /><br />Sign in with Webasyst ID to quickly connect to all your Webasyst accounts.',
    logout: 'Logout',
    cloud: {
      button: 'Create Webasyst Account',
      desc: 'This app automatically shows all Webasyst account with the Cash Flow app installed. Don\'t see anything here? Head on to the Cash Flow app site and install the app. Then get back here!'
    },
    installCashApp: {
      title: 'Install Cash Flow on',
      button: 'Install Cash Flow',
      desc: '@:appName app is not installed on {name} at the moment. Tap the Install button above to install the app to your Webasyst Account via the Webasyst Installer. A free license will be issued for first 30 days.',
      trial: 'First 30 days free!'
    },
    loading: 'Loading...',
    errors: {
      install: {
        404: 'Продукт не существует',
        403: 'Токен не содержит scope installer',
        402: 'Установка продукта требует лицензии',
        409: 'Установка не соответствует требованиям продукта'
      }
    }
  }
}

const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'ru',
  messages
})

export { i18n }
