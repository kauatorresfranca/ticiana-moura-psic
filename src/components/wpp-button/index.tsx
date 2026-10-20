import * as S from './styles'
import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_URL =
  'https://wa.me/+5582996727126?text=' +
  encodeURIComponent('Oi, gostaria de agendar um horário.')

const WhatsAppButton = () => {
  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const reportConversion = (
      window as Window & { gtag_report_conversion?: (url: string) => void }
    ).gtag_report_conversion

    if (typeof reportConversion === 'function') {
      reportConversion(WHATSAPP_URL)
    } else {
      window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <S.WhatsAppWrapper
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      onClick={handleWhatsAppClick}
    >
      <S.Label>Agendar Horário</S.Label>
      <FaWhatsapp size={32} />
    </S.WhatsAppWrapper>
  )
}

export default WhatsAppButton