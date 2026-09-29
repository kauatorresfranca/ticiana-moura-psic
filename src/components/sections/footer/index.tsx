import { MessageCircle, ArrowUp, Camera } from 'lucide-react'
import * as S from './styles'

const WHATSAPP_URL =
  'https://wa.me/+5582996727126?text=Ol%C3%A1%2C%20Ticiana!%20Gostaria%20de%20agendar%20uma%20consulta.'

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre-mim', label: 'Sobre Mim' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#especialidades', label: 'Especialidades' },
  { href: '#duvidas', label: 'Dúvidas Frequentes' },
]

const Footer = () => {
  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <S.FooterSection>
      <div className="container">
        <S.FooterContent>
          <S.BrandColumn>
            <S.FooterLogo>Ticiana Moura | Psicóloga</S.FooterLogo>
            <S.FooterTagline>CRP 15/1563</S.FooterTagline>
            <S.FooterDescription>
              Atendimento psicológico presencial em <strong>Maceió, Alagoas</strong>, e consultas
              de terapia online. Espaço ético e acolhedor focado no seu bem-estar e equilíbrio
              emocional.
            </S.FooterDescription>
          </S.BrandColumn>

          <S.LinksColumn>
            <S.ColumnTitle>Navegação</S.ColumnTitle>
            <S.FooterNav aria-label="Navegação do rodapé">
              {navLinks.map(({ href, label }) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
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
                <Camera size={20} aria-hidden="true" />
                <span>Instagram</span>
              </S.SocialButton>
              <S.SocialButton
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agende sua consulta pelo WhatsApp com Ticiana Moura"
              >
                <MessageCircle size={20} aria-hidden="true" />
                <span>WhatsApp</span>
              </S.SocialButton>
            </S.SocialLinks>
          </S.ContactColumn>
        </S.FooterContent>

        <S.FooterBottom>
          <S.Copyright>
            &copy; {new Date().getFullYear()} Ticiana Moura | Psicóloga. Todos os direitos
            reservados.
          </S.Copyright>
          <S.Credit>
            Desenvolvido por{' '}
            <a
              href="https://portfolio-kaua-torres.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kauã Torres
            </a>
          </S.Credit>
          <S.ScrollTopButton
            type="button"
            onClick={scrollToTop}
            title="Voltar ao topo da página"
            aria-label="Voltar ao topo da página"
          >
            <ArrowUp size={18} aria-hidden="true" />
          </S.ScrollTopButton>
        </S.FooterBottom>
      </div>
    </S.FooterSection>
  )
}

export default Footer