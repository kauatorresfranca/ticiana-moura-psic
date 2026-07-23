// Services/styles.js
import styled from 'styled-components'
import { breakpoints, colors } from '../../../../styles'

export const ServicesSection = styled.section`
  padding: 120px 0;
  background-color: transparent;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 80px 0;
  }
`

export const SectionHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px auto;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 40px;
  }
`

export const Subtitle = styled.span`
  font-family: 'DM Serif Display', serif;
  font-size: 16px;
  color: ${colors.primary};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  display: block;
  margin-bottom: 12px;
`

export const Title = styled.h2`
  font-family: 'DM Serif Display', serif;
  font-size: 42px;
  color: ${colors.title};
  font-weight: 400;
  margin-bottom: 16px;
  line-height: 1.2;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 32px;
  }
`

export const Description = styled.p`
  font-size: 17px;
  color: ${colors.text};
  line-height: 1.6;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 15px;
  }
`

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 50px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 36px;
  }
`

export const Card = styled.div`
  background-color: rgba(248, 245, 240, 0.7);
  border: 1px solid rgba(184, 154, 122, 0.2);
  padding: 36px;
  border-radius: 24px;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    border-color: ${colors.primary};
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
    background-color: rgba(248, 245, 240, 1);
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 24px;
  }
`

export const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${colors.primaryTransparent};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 50px;
    height: 50px;
    margin-bottom: 18px;
  }
`

export const CardTitle = styled.h3`
  font-family: 'DM Serif Display', serif;
  font-size: 24px;
  color: ${colors.title};
  font-weight: 400;
  margin-bottom: 12px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
`

export const CardDescription = styled.p`
  font-size: 16px;
  color: ${colors.text};
  line-height: 1.6;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`

export const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: ${colors.primary};
  color: #fff;
  padding: 16px 32px;
  border-radius: 18px;
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
    padding: 14px 20px;
    font-size: 15px;
  }
`