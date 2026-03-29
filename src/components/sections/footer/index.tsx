import * as S from './styles'
import logo from '../../../assets/images/logo.png'
import { Camera, Mail, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <S.FooterWrapper>
      <div className="container">
        <S.MainContent>
          <S.BrandArea>
            <img src={logo} alt="Ticiana Moura Psicóloga" />
            <S.Description>
              Empatia e renovação: seu caminho para uma vida plena e equilibrada.
            </S.Description>
          </S.BrandArea>

          <S.SocialLinks>
            <S.SocialLink 
              href="https://api.whatsapp.com/send?phone=5582996727126" 
              target="_blank" 
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <Phone size={24} />
            </S.SocialLink>
            
            <S.SocialLink 
              href="mailto:ticipsic@hotmail.com" 
              aria-label="Email"
            >
              <Mail size={24} />
            </S.SocialLink>

            <S.SocialLink 
              href="https://www.instagram.com/psi.ticianamoura/" 
              target="_blank" 
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Camera size={24} />
            </S.SocialLink>
          </S.SocialLinks>
        </S.MainContent>

        <S.CopyrightArea>
          <p>© {currentYear} Ticiana Moura. Todos os direitos reservados.</p>
          <span>
            Desenvolvido por {' '}
            <a 
              href="https://portfolio-kaua-torres.vercel.app/" 
              target="_blank" 
              rel="noreferrer"
            >
              Kauã Torres
            </a>
          </span>
        </S.CopyrightArea>
      </div>
    </S.FooterWrapper>
  )
}

export default Footer