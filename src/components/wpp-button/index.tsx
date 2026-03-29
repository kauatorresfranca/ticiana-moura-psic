import * as S from './styles'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  const phone = "558296727126"
  const message = encodeURIComponent("Olá! Vi o site e gostaria de agendar um horário.")

  return (
    <S.WhatsAppWrapper 
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <S.Label>Agendar Horário</S.Label>
      <FaWhatsapp size={32} />
    </S.WhatsAppWrapper>
  )
}

export default WhatsAppButton