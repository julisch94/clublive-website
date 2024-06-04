import posthog from 'posthog-js'

export const useTracking = () => {
  const init = () => {
    if (!window.location.host.includes('127.0.0.1') && !window.location.host.includes('localhost')) {
      posthog.init('phc_LaMi5BDvmelKrKDd4lL5Ftg6IcCGq7yPXObL7ZyjCnh', { api_host: 'https://eu.posthog.com' })
    }
  }

  return {
    init,
  }
}
