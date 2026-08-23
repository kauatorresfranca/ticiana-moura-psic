import { useState } from 'react'
import * as S from './styles'
import logo from '../../../assets/images/logo.png'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Mim', href: '#sobre-mim' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Dúvidas', href: '#duvidas' },
  ]

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <div className="container content">
          <S.LogoContainer href="/" aria-label="Ticiana Moura Psicóloga - Página Inicial">
            <img 
              src={logo} 
              alt="Ticiana Moura - Psicóloga em Maceió" 
              title="Ticiana Moura | Psicóloga"
            />
          </S.LogoContainer>

          <S.Nav isOpen={isMenuOpen} aria-label="Navegação Principal">
            <ul>
              {menuItems.map((item) => (
                <li key={item.label}>
                  <S.HeaderMenuItem 
                    href={item.href}
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </S.HeaderMenuItem>
                </li>
              ))}
            </ul>
          </S.Nav>

          <S.Actions>
            <S.HeaderLink 
              href="https://wa.me/+5582996727126?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Psic%C3%B3loga%20Ticiana%20Moura."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agende sua consulta pelo WhatsApp com a Psicóloga Ticiana Moura"
            >
              AGENDE SUA CONSULTA
            </S.HeaderLink>
            
            <S.MobileMenu 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </S.MobileMenu>
          </S.Actions>
        </div>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header