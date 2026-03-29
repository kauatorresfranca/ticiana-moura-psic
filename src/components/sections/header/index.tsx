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


  return (
    <S.HeaderWrapper>

      <S.HeaderContainer>
        <div className="container content">
          <S.LogoContainer href="/">
            <img src={logo} alt="Logo" />
          </S.LogoContainer>

          <S.Nav isOpen={isMenuOpen}>
            <ul>
              {menuItems.map((item) => (
                <li key={item}>
                  <S.HeaderMenuItem 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                  >
                    {item}
                  </S.HeaderMenuItem>
                </li>
              ))}
            </ul>
          </S.Nav>

          <S.Actions>
            <S.HeaderLink href='https://wa.me/+5582996727126?text=Olá, gostaria de agendar uma consulta.'>
              AGENDE SUA CONSULTA
            </S.HeaderLink>
            
            <S.MobileMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </S.MobileMenu>
          </S.Actions>
        </div>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header