import posthog from 'posthog-js'

export default {
  install(app) {
    app.config.globalProperties.$posthog = posthog.init('phc_LaMi5BDvmelKrKDd4lL5Ftg6IcCGq7yPXObL7ZyjCnh', {
      api_host: 'https://eu.posthog.com',
    })
  },
}
