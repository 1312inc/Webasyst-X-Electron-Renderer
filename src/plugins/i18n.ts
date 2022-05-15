import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    appName: 'Cash Flow',
    signInButton: 'Sign in with Webasyst ID',
    signInMessage: 'Manage your business cash flow wisely. Know how much money you’ll have on your business account tomorrow, in a week, in a month, and a year. Avoid cash gaps. Forecast the financial future of your business.',
    logout: 'Log out',
    cloud: {
      button: 'Create Webasyst Account',
      desc: 'A new Webasyst Cloud account will be automatically created with Cash, Team, Installer and other awesome apps pre-installed. This will be an account for your entire team.'
    },
    installCashApp: {
      title: 'Install Cash Flow on',
      button: 'Install Cash Flow',
      desc: '@:appName app is not installed on {name} at the moment. Tap the Install button above to install the app to your Webasyst account via the Webasyst Installer.',
      trial: '30 days free!'
    },
    loading: 'Loading...',
    errors: {
      install: {
        404: 'The app does not exist',
        403: 'No access to the Installer app',
        402: 'The app license is required',
        409: 'The Webasyst account server does not meet the app system requirements'
      }
    }
  },
  ru: {
    appName: 'Деньги',
    signInButton: 'Войти с Webasyst ID',
    signInMessage: 'Знайте с точностью до рубля, сколько денег будет на счете через месяц, через полгода, через год. Прогнозируйте финансовое будущее бизнеса. Избегайте кассовых разрывов.',
    logout: 'Выйти',
    cloud: {
      button: 'Создать аккаунт Webasyst',
      desc: 'В облаке Webasyst будет развернут новый аккаунт с предустановленными приложениями «Деньги», «Команда», «Инсталлер». Вы сможете приглашать своих коллег в этот аккаунт для совместной работы.'
    },
    installCashApp: {
      title: 'Установить «Деньги» на',
      button: 'Установить «Деньги»',
      desc: 'Приложение @:appName еще не установлено в аккаунте Webasyst {name}. Нажмите «Установить», и уже через пару мгновений приложение будет установлено в вашем аккаунте Webasyst с помощью Инсталлера.',
      trial: '30 дней бесплатно!'
    },
    loading: 'Загрузка...',
    errors: {
      install: {
        404: 'Приложение не существует',
        403: 'Нет доступа к «Инсталлеру»',
        402: 'Установка приложения требует лицензии',
        409: 'Сервер аккаунта Webasyst не соответствует системным требованиям приложения'
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
