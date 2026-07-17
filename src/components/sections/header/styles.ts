import styled, { keyframes } from 'styled-components'
import { colors, breakpoints } from '../../../../styles'

const slideIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(-15px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`

export const HeaderWrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
`

export const HeaderContainer = styled.header`
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(184, 154, 122, 0.1);

  /* CORREÇÃO: O comportamento de grid flexível agora se limita à largura máxima do container */
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`

export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  
  img {
    width: 180px;
    height: auto;
    object-fit: contain;

    @media (max-width: ${breakpoints.mobile}) {
      width: 150px;
    }
  }
`

export const Nav = styled.nav<{ isOpen: boolean }>`
  ul {
    display: flex;
    gap: 32px;
    list-style: none;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: ${colors.white};
    padding: 32px 24px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    border-bottom: 2px solid ${colors.primaryTransparent};
    animation: ${slideIn} 0.25s ease-out;

    ul {
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }
  }
`

export const HeaderMenuItem = styled.a`
  color: ${colors.text};
  font-weight: 600;
  font-size: 15px;
  position: relative;
  padding-bottom: 4px;
  transition: color 0.3s ease;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${colors.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${colors.primary};
    
    &::after { 
      width: 100%; 
    }
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const HeaderLink = styled.a`
  padding: 12px 24px;
  background-color: ${colors.primaryTransparent};
  color: ${colors.title};
  border-radius: 50px;
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.white};
    transform: translateY(-2px);
    box-shadow: 0 6px 12px ${colors.primary}30;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`

export const MobileMenu = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.title};
  padding: 4px;
  transition: color 0.2s;

  &:hover {
    color: ${colors.primary};
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`