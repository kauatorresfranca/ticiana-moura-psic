import styled, { keyframes } from 'styled-components'
import { colors, breakpoints } from '../../../../styles'

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`

export const HeaderWrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.05);
`

export const HeaderContainer = styled.header`
  background-color: #fff;
  padding: 12px 0;
  border-bottom: 1px solid #f5f5f5;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 16px;
  }
`

export const LogoContainer = styled.a`
  display: flex;
  
  img {
    width: 210px;
    height: auto;
  }
`

export const Nav = styled.nav<{ isOpen: boolean }>`
  ul {
    display: flex;
    gap: 28px;
    list-style: none;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #fff;
    padding: 40px 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    animation: ${slideIn} 0.3s ease-out;

    ul {
      flex-direction: column;
      align-items: center;
      gap: 25px;
    }
  }
`

export const HeaderMenuItem = styled.a`
  color: ${colors.text};
  font-weight: 600;
  font-size: 15px;
  position: relative;
  padding-bottom: 4px;
  transition: all 0.3s ease;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: ${colors.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${colors.primary};
    &::after { width: 100%; }
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const HeaderLink = styled.a`
  padding: 12px 24px;
  background-color: ${colors.primaryTransparent};
  color: ${colors.text};
  border-radius: 10px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: ${colors.primary};
    color: #fff;
    transform: scale(1.05);
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const MobileMenu = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.title};

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`