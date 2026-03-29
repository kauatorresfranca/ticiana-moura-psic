import styled from 'styled-components'
import { colors, breakpoints } from '../../../../styles'

export const HeroSection = styled.section`
  padding: 80px 0;
  background-color: #fff;
  overflow: hidden;

  .container {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 40px 0;
  }
`

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

export const HeroTitle = styled.h1`
  font-size: 46px;
  line-height: 1.1;
  color: ${colors.title};
  font-weight: 800;
  margin-bottom: 24px;

  span {
    color: ${colors.primary};
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 40px;
  }
`

export const HeroDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: ${colors.text};
  margin-bottom: 32px;
  max-width: 480px;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 auto 32px;
  }
`

export const HeroButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: ${colors.primary};
  color: #fff;
  padding: 16px 32px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px ${colors.primary}40;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 25px ${colors.primary}60;
    filter: brightness(1.1);
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    justify-content: center;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 20px;
  }

  /* Detalhe decorativo sutil atrás da imagem, como na Ótica */
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 100px;
    height: 100px;
    background-color: ${colors.primaryTransparent};
    border-radius: 50%;
    z-index: -1;
  }
`