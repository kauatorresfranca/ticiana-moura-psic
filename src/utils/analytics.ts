// src/utils/analytics.ts
const GOOGLE_ADS_CONVERSION_ID = 'AW-18509326460/TrlBCJibn58dEPzQ9_lE'

export const trackWhatsAppConversion = (url: string, event?: React.MouseEvent) => {
  if (event) {
    event.preventDefault()
  }

  const openWhatsApp = () => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  if (typeof window.gtag !== 'function') {
    openWhatsApp()
    return
  }

  let navigated = false

  const handleNavigation = () => {
    if (navigated) return
    navigated = true
    openWhatsApp()
  }

  window.gtag('event', 'conversion', {
    send_to: GOOGLE_ADS_CONVERSION_ID,
    event_callback: handleNavigation,
    event_timeout: 2000,
  })

  window.setTimeout(handleNavigation, 2000)
}