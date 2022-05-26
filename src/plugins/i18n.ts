import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    appName: 'Webasyst X',
    signInButton: 'Sign in with Webasyst ID',
    signInMessage: 'To make this screen look great, simply replace the app icon and the app name above with your project credentials, and add an encouraging welcome message.',
    logout: 'Log out',
    cloud: {
      title: 'New Webasyst account',
      button: 'Create Webasyst Account',
      desc: 'A new Webasyst Cloud account will be automatically created with awesome apps pre-installed. This will be an account for your entire team.',
      notAllow: 'Sorry, we cannot create another account for you at the moment. Most likely, a limit on the number of free Webasyst cloud accounts has been exceeded.',
      loading: 'Creating an account...'

    },
    installCashApp: {
      title: 'Install Cash Flow on',
      button: 'Install Cash Flow',
      desc: '@:appName app is not installed on {name} at the moment. Tap the Install button above to install the app to your Webasyst account via the Webasyst Installer.',
      trial: '30 days free!',
      loading: 'Installing...'
    },
    loading: 'Loading...',
    errors: {
      install: {
        404: 'The app does not exist',
        403: 'No access to the Installer app',
        402: 'The app license is required',
        409: 'The Webasyst account server does not meet the app system requirements'
      }
    },
    demo: {
      link: 'View demo account',
      exit: 'Exit demo'
    }
  },
  ru: {
    appName: 'Webasyst X',
    signInButton: 'Войти с Webasyst ID',
    signInMessage: 'Чтобы эта страница была не такой скучной, подставьте иконку и название своего приложения и напишите какой-нибудь классный приветственный текст.',
    logout: 'Выйти',
    cloud: {
      title: 'Новый аккаунт Webasyst',
      button: 'Создать аккаунт Webasyst',
      desc: 'В облаке Webasyst будет развернут новый аккаунт с предустановленными приложениями. Вы сможете приглашать своих коллег в этот аккаунт для совместной работы.',
      notAllow: 'Не удалось создать аккаунт Webasyst. Скорее всего, превышен лимит на количество бесплатных облачных аккаунтов.',
      loading: 'Создаю новый аккаунт...'
    },
    installCashApp: {
      title: 'Установить «Деньги» на',
      button: 'Установить «Деньги»',
      desc: 'Приложение @:appName еще не установлено в аккаунте Webasyst {name}. Нажмите «Установить», и уже через пару мгновений приложение будет установлено в вашем аккаунте Webasyst с помощью Инсталлера.',
      trial: '30 дней бесплатно!',
      loading: 'Устанавливаю...'
    },
    loading: 'Загрузка...',
    errors: {
      install: {
        404: 'Приложение не существует',
        403: 'Нет доступа к «Инсталлеру»',
        402: 'Установка приложения требует лицензии',
        409: 'Сервер аккаунта Webasyst не соответствует системным требованиям приложения'
      }
    },
    demo: {
      link: 'Посмотреть демо-аккаунт',
      exit: 'Выйти из демо'
    }
  }
}

const i18n = createI18n({
  locale: navigator.language.split('-')[0],
  fallbackLocale: 'en',
  messages
})

export { i18n }
