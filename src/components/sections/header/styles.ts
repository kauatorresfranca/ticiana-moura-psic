// Header/styles.js
import styled, { keyframes } from 'styled-components'
import { colors, breakpoints } from '../../../../styles'

const slideDown = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(-20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(184, 154, 122, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(184, 154, 122, 0); }
  100% { box-shadow: 0 0 0 0 rgba(184, 154, 122, 0); }
`

export const HeaderWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
`

export const HeaderContainer = styled.header`
  background-color: transparent;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
    padding-bottom: 24px;
  }
`

export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
  
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(248, 245, 240, 0.98);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: 100px 32px 48px 32px;
    animation: ${slideDown} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 999;
    justify-content: center;
    align-items: center;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.08);

    ul {
      flex-direction: column;
      align-items: center;
      gap: 28px;
      width: 100%;
    }
  }
`

export const HeaderMenuItem = styled.a`
  color: ${colors.title};
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

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
    font-family: 'DM Serif Display', serif;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: ${colors.title};
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: ${colors.primary};
      transform: translateY(-2px);
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
  border-radius: 18px;
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
  background: ${colors.primaryTransparent};
  border: 1px solid rgba(184, 154, 122, 0.2);
  cursor: pointer;
  color: ${colors.title};
  width: 48px;
  height: 48px;
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  animation: ${pulseGlow} 3s infinite;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.white};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    /* Transforma o botão em um "X" elegante quando o menu estiver aberto */
    &.is-open {
      background-color: ${colors.primary};
      color: ${colors.white};
      animation: none;
    }
  }
`