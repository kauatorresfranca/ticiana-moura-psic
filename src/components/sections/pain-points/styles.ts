import styled from 'styled-components'
import { breakpoints, colors } from '../../../../styles'

export const PainPointsSection = styled.section`
  padding: 80px 0;
  background-color: #fcfcfc;
  
  .container {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 16px;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const Title = styled.h2`
  font-size: 32px;
  color: ${colors.title};
  font-weight: 800;
  max-width: 800px;
  margin-bottom: 20px;
  line-height: 1.2;

  span {
    color: ${colors.primary};
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 26px;
  }
`

export const Subtitle = styled.p`
  font-size: 18px;
  color: ${colors.text};
  line-height: 1.6;
  max-width: 700px;
  margin-bottom: 48px;
`

export const SymptomsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  width: 100%;
  margin-bottom: 56px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

export const SymptomItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  .icon-wrapper {
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primaryTransparent};
    border-radius: 50%;
    transition: all 0.3s ease;

    img {
      width: 60px;
      height: auto;
    }
  }

  &:hover .icon-wrapper {
    transform: translateY(-5px);
    background-color: ${colors.primary};
    img { filter: brightness(0) invert(1); }
  }
`

export const SymptomText = styled.span`
  font-size: 16px;
  color: ${colors.title};
  font-weight: 600;
  line-height: 1.4;
`

export const CTAWrapper = styled.div`
  p {
    font-size: 20px;
    color: ${colors.title};
    font-weight: 500;
    margin-bottom: 32px;
    
    span {
      font-weight: 700;
      color: ${colors.primary};
    }
  }
`

export const Button = styled.a`
  display: inline-block;
  background-color: ${colors.primary};
  color: #fff;
  padding: 18px 40px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px ${colors.primary}40;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
    box-shadow: 0 12px 25px ${colors.primary}60;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    padding: 18px 20px;
  }
`