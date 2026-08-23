import * as S from './styles'
import { MessageCircle, ArrowUp, Camera  } from 'lucide-react'
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
            <S.FooterLogo>Ticiana Moura | Psicóloga</S.FooterLogo>
            <S.FooterTagline>CRP 15/1563</S.FooterTagline>
            <S.FooterDescription>
              Atendimento psicológico presencial em <strong>Maceió, Alagoas</strong>, e consultas de terapia online. Espaço ético e acolhedor focado no seu bem-estar e equilíbrio emocional.
            </S.FooterDescription>
          </S.BrandColumn>

          <S.LinksColumn>
            <S.ColumnTitle>Navegação</S.ColumnTitle>
            <S.FooterNav>
              <a href="#inicio">Início</a>
              <a href="#sobre-mim">Sobre Mim</a>
              <a href="#especialidades">Especialidades</a>
              <a href="#duvidas">Dúvidas Frequentes</a>
            </S.FooterNav>
          </S.LinksColumn>

          <S.ContactColumn>
            <S.ColumnTitle>Atendimento & Contato</S.ColumnTitle>
            <S.SocialLinks>
              <S.SocialButton 
                href="https://instagram.com/psi.ticianamoura" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Acesse o perfil da Psicóloga Ticiana Moura no Instagram"
              >
                <Camera size={20} color={colors.primary} />
                <span>Instagram</span>
              </S.SocialButton>
              <S.SocialButton 
                href="https://wa.me/+5582996727126?text=Ol%C3%A1%2C%20Ticiana!%20Gostaria%20de%20agendar%20uma%20consulta." 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Agende sua consulta pelo WhatsApp com Ticiana Moura"
              >
                <MessageCircle size={20} color={colors.primary} />
                <span>WhatsApp</span>
              </S.SocialButton>
            </S.SocialLinks>
          </S.ContactColumn>
        </S.FooterContent>

        <S.FooterBottom>
          <S.Copyright>
            &copy; {new Date().getFullYear()} Ticiana Moura | Psicóloga. Todos os direitos reservados.
          </S.Copyright>
          <S.Credit>
            Desenvolvido por <a href="https://portfolio-kaua-torres.vercel.app/" target="_blank" rel="noopener noreferrer">Kauã Torres</a>
          </S.Credit>
          <S.ScrollTopButton 
            onClick={scrollToTop} 
            title="Voltar ao topo da página"
            aria-label="Voltar ao topo da página"
          >
            <ArrowUp size={18} color={colors.primary} />
          </S.ScrollTopButton>
        </S.FooterBottom>
      </div>
    </S.FooterSection>
  )
}

export default Footer