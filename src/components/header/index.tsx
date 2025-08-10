import { useState } from 'react';
import * as S from './styles';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Lista de itens do menu (reutilizada para desktop e mobile)
  const menuItems = [
    'Início',
    'Sobre Mim',
    'Especialidades',
    'Dúvidas',
  ];

  return (
    <S.Header>
      <img src="/logo.png" alt="Logo" />
      <S.HeaderMenu>
        {menuItems.map((item) => (
          <S.HeaderMenuItem key={item}>{item}</S.HeaderMenuItem>
        ))}
      </S.HeaderMenu>
      <S.HeaderActions>
        <S.HeaderMenuMobileToggle
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </S.HeaderMenuMobileToggle>
        <S.HeaderLink>AGENDE SUA CONSULTA</S.HeaderLink>
      </S.HeaderActions>
      {isMenuOpen && (
        <S.HeaderMenuMobile>
          {menuItems.map((item) => (
            <S.HeaderMenuItem key={item} onClick={toggleMenu}>
              {item}
            </S.HeaderMenuItem>
          ))}
        </S.HeaderMenuMobile>
      )}
    </S.Header>
  );
};

export default Header;