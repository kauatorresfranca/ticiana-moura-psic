import { useState } from 'react'
import * as S from './styles'
import logo from '../../../assets/images/logo.png'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    'Início',
    'Sobre Mim',
    'Especialidades',
    'Dúvidas',
  ]

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <div className="container content">
          <S.LogoContainer href="/">
            <img src={logo} alt="Logo Psicóloga" />
          </S.LogoContainer>

          <S.Nav isOpen={isMenuOpen}>
            <ul>
              {menuItems.map((item) => (
                <li key={item}>
                  <S.HeaderMenuItem 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    onClick={handleLinkClick}
                  >
                    {item}
                  </S.HeaderMenuItem>
                </li>
              ))}
            </ul>
          </S.Nav>

          <S.Actions>
            <S.HeaderLink 
              href='https://wa.me/+5582996727126?text=Olá, gostaria de agendar uma consulta.'
              target="_blank"
              rel="noopener noreferrer"
            >
              AGENDE SUA CONSULTA
            </S.HeaderLink>
            
            <S.MobileMenu onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </S.MobileMenu>
          </S.Actions>
        </div>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header