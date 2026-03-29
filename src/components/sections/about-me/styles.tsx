import styled from 'styled-components'
import { breakpoints, colors } from '../../../../styles'

export const AboutSection = styled.section`
  padding: 100px 0;
  background-color: #fff;

  .container {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 16px;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 60px;
  align-items: flex-start;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  
  img {
    width: 100%;
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 400px;
    margin: 0 auto;
  }
`

export const ExperienceBadge = styled.div`
  position: absolute;
  bottom: -20px;
  right: -20px;
  background-color: ${colors.primary};
  color: #fff;
  padding: 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  box-shadow: 0 10px 20px ${colors.primary}40;

  span {
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    line-height: 1.2;
  }

  @media (max-width: ${breakpoints.mobile}) {
    right: 0;
    bottom: 0;
    padding: 15px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeaderInfo = styled.div`
  margin-bottom: 24px;
`

export const Title = styled.h2`
  font-size: 40px;
  color: ${colors.title};
  font-weight: 800;
  margin-bottom: 8px;
`

export const Subtitle = styled.h3`
  font-size: 18px;
  color: ${colors.primary};
  font-weight: 600;
  letter-spacing: 1px;
`

export const Description = styled.p`
  font-size: 18px;
  color: ${colors.text};
  line-height: 1.7;
  margin-bottom: 32px;

  strong {
    color: ${colors.title};
    font-weight: 700;
  }
`

export const TrainingArea = styled.div`
  background-color: ${colors.primaryTransparent};
  padding: 32px;
  border-radius: 20px;
  border-left: 5px solid ${colors.primary};
`

export const TrainingTitle = styled.h4`
  font-size: 20px;
  color: ${colors.title};
  font-weight: 700;
  margin-bottom: 20px;
`

export const TrainingList = styled.ul`
  list-style: none;
  display: grid;
  gap: 12px;

  li {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 15px;
    color: ${colors.text};
    font-weight: 500;
    line-height: 1.4;

    svg {
      flex-shrink: 0;
    }
  }
`