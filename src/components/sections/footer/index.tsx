// Footer.jsx
import * as S from './styles'
import { MessageCircle, ArrowUp, Globe } from 'lucide-react'
import { colors } from '../../../../styles'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <S.FooterSection>
      <div className="container">
        <S.FooterContent>
          <S.BrandColumn>
            <S.FooterLogo>Dra. Ticiana Moura</S.FooterLogo>
            <S.FooterTagline>CRP/AL 15/1563</S.FooterTagline>
            <S.FooterDescription>
              Psicoterapia online e presencial com escuta acolhedora, ética e humanizada para ajudar você a resgatar seu bem-estar emocional.
            </S.FooterDescription>
          </S.BrandColumn>

          <S.LinksColumn>
            <S.ColumnTitle>Navegação</S.ColumnTitle>
            <S.FooterNav>
              <a href="#sobre">Sobre Mim</a>
              <a href="#servicos">Para Quem É</a>
              <a href="#como-funciona">Como Funciona</a>
              <a href="#faq">Dúvidas Frequentes</a>
            </S.FooterNav>
          </S.LinksColumn>

          <S.ContactColumn>
            <S.ColumnTitle>Contato</S.ColumnTitle>
            <S.SocialLinks>
              <S.SocialButton 
                href="https://instagram.com/psi.ticianamoura" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Globe size={20} color={colors.primary} />
                <span>Instagram</span>
              </S.SocialButton>
              <S.SocialButton 
                href="https://wa.me/+5582996727126?text=Oi, gostaria de agendar uma consulta." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} color={colors.primary} />
                <span>WhatsApp</span>
              </S.SocialButton>
            </S.SocialLinks>
          </S.ContactColumn>
        </S.FooterContent>

        <S.FooterBottom>
          <S.Copyright>
            &copy; {new Date().getFullYear()} Ticiana Moura. Todos os direitos reservados.
          </S.Copyright>
          <S.Credit>
            Desenvolvido por <a href="https://portfolio-kaua-torres.vercel.app/" target="_blank" rel="noopener noreferrer">Kauã Torres</a>
          </S.Credit>
          <S.ScrollTopButton onClick={scrollToTop} title="Voltar ao topo">
            <ArrowUp size={18} color={colors.primary} />
          </S.ScrollTopButton>
        </S.FooterBottom>
      </div>
    </S.FooterSection>
  )
}

export default Footer