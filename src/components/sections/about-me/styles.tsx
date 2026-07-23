// About/styles.js
import styled from 'styled-components'
import { breakpoints, colors } from '../../../../styles'

export const AboutSection = styled.section`
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

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;

    .text-column {
      order: 1;
    }

    .image-column {
      order: 2;
    }
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`

export const ProfileImageContainer = styled.div`
  width: 100%;
  max-width: 420px;
  height: 500px;
  border-radius: 24px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 400px;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.tablet}) {
    align-items: center;
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
  font-size: 38px;
  color: ${colors.title};
  font-weight: 400;
  margin-bottom: 20px;
  line-height: 1.2;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 30px;
  }
`

export const Description = styled.p`
  font-size: 16px;
  color: ${colors.text};
  line-height: 1.7;
  margin-bottom: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 15px;
    text-align: center;
  }
`

export const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 10px;

  @media (max-width: ${breakpoints.tablet}) {
    align-items: flex-start;
    width: 100%;
    max-width: 380px;
    margin: 10px auto 0 auto;
  }
`

export const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  text-align: left;

  span {
    font-size: 15px;
    color: ${colors.title};
    font-weight: 500;
  }
`

export const IconBox = styled.div`
  width: 38px;
  height: 38px;
  background-color: ${colors.primaryTransparent};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid rgba(184, 154, 122, 0.2);
`