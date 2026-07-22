// Hero/styles.js
import styled from 'styled-components'
import { colors, breakpoints } from '../../../../styles'
import BackgroundImage from '../../../assets/images/background2.png'
import BackgroundMobile from '../../../assets/images/background1-mobile.png'

export const HeroSection = styled.section`
  min-height: 88vh;
  display: flex;
  align-items: center;
  padding: 140px 0 60px 0;
  overflow: hidden;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    min-height: 82vh;
    padding: 110px 0 0 0;
    background-image: url(${BackgroundMobile});
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
`

export const HeroTitle = styled.h1`
  font-family: 'DM Serif Display', serif;
  font-size: 52px;
  line-height: 1.15;
  color: ${colors.title};
  font-weight: 400;
  margin-bottom: 24px;

  span {
    font-family: 'DM Serif Display', serif;
    color: ${colors.primary};
    display: block;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 32px;
    margin-bottom: 12px;
  }
`

export const HeroDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: ${colors.text};
  margin-bottom: 24px;
  max-width: 480px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
    margin: 0 auto 16px;
    max-width: 100%;
    line-height: 1.5;
  }
`

export const HeroButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: ${colors.primary};
  color: #fff;
  padding: 14px 28px;
  border-radius: 18px;
  font-weight: 700;
  font-size: 15px;
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
    padding: 12px 24px;
    font-size: 14px;
  }
`

export const HeroBadges = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
  flex-wrap: wrap;

  .badge {
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${colors.text};
    font-size: 13px;
    font-weight: 500;
    
    svg {
      color: ${colors.primary};
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
    gap: 12px;
    margin-top: 14px;
    margin-bottom: 0px;
  }
`

export const ImageContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 6%;
  width: 42%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  z-index: 2;

  img {
    width: 100%;
    height: auto;
    max-height: 82vh;
    object-fit: contain;
    object-position: bottom;
    display: block;
  }

  @media (max-width: ${breakpoints.tablet}) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;

    img {
      max-height: 38vh;
      object-fit: contain;
      object-position: bottom;
    }
  }
`