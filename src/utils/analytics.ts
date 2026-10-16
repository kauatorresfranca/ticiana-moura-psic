// src/utils/analytics.ts
const GOOGLE_ADS_CONVERSION_ID = 'AW-18509326460/TrlBCJibn58dEPzQ9_lE'

export const trackWhatsAppConversion = (url: string, event?: React.MouseEvent) => {
  if (event) {
    event.preventDefault()
  }

  let navigated = false

  const openWhatsApp = () => {
    if (navigated) return
    navigated = true
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  if (typeof window.gtag !== 'function') {
    openWhatsApp()
    return
  }

  // Dispara o evento de conversão configurado no Google Ads
  window.gtag('event', 'conversion', {
    send_to: GOOGLE_ADS_CONVERSION_ID,
    event_callback: openWhatsApp,
    event_timeout: 2000,
  })

  // Garantia caso o event_callback demore mais de 2 segundos
  window.setTimeout(openWhatsApp, 2000)
}