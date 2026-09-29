import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoints, palette } from '../../../../styles'

export const AboutSection = styled.section`
  position: relative;
  padding: clamp(72px, 10vw, 120px) 0;
  overflow: hidden;
  scroll-margin-top: 80px;
  color: ${palette.brown};
  /* começa na cor final do Hero, então a transição entre seções não tem "corte" */
  background: linear-gradient(180deg, #d3b9a2 0%, ${palette.sandLight} 160px, ${palette.sandLight} 100%);

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }
`

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: clamp(40px, 6vw, 88px);
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: minmax(0, 1fr);
    gap: 48px;
  }
`

export const TextColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Subtitle = styled.span`
  display: block;
  margin-bottom: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${palette.brownSoft};
`

export const Title = styled.h2`
  margin: 0 0 24px;
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  line-height: 1.15;
  font-size: clamp(1.75rem, 1.3rem + 1.8vw, 2.6rem);
  color: ${palette.brown};
  text-wrap: balance;
`

export const Description = styled.p`
  margin: 0 0 18px;
  max-width: 560px;
  font-size: clamp(0.95rem, 0.92rem + 0.2vw, 1.05rem);
  line-height: 1.75;
  color: rgba(66, 46, 34, 0.86);

  strong {
    font-weight: 600;
    color: ${palette.brown};
  }
`

export const BenefitsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 560px;
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
`

export const BenefitItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  border-radius: 16px;
  border: 1px solid rgba(66, 46, 34, 0.12);
  background: rgba(255, 255, 255, 0.55);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  span {
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 1.4;
    color: ${palette.brown};
  }

  &:hover {
    transform: translateX(4px);
    border-color: rgba(66, 46, 34, 0.3);
    box-shadow: 0 10px 24px -14px rgba(66, 46, 34, 0.4);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: ${palette.brown};
  color: ${palette.sand};
`

export const ImageColumn = styled(motion.div)`
  display: flex;
  justify-content: center;
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 440px;

  /* contorno deslocado, mesma linguagem visual do Hero */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 1.5px solid rgba(66, 46, 34, 0.28);
    border-radius: 28px;
    transform: translate(14px, 14px);
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: min(340px, 82vw);

    &::before {
      transform: translate(10px, 10px);
    }
  }
`

export const ProfileImageContainer = styled.div`
  position: relative;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: 28px;
  background: ${palette.sandDark};
  box-shadow: 0 30px 60px -28px rgba(66, 46, 34, 0.5);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }
`

export const ExperienceCard = styled.div`
  position: absolute;
  left: -24px;
  bottom: 28px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-width: 180px;
  padding: 16px 20px;
  border-radius: 20px;
  background: ${palette.brown};
  color: ${palette.sand};
  box-shadow: 0 20px 36px -16px rgba(66, 46, 34, 0.7);

  strong {
    font-family: 'DM Serif Display', serif;
    font-size: 2rem;
    font-weight: 400;
    line-height: 1;
  }

  span {
    font-size: 0.8rem;
    line-height: 1.35;
  }

  @media (max-width: ${breakpoints.tablet}) {
    left: 12px;
    bottom: 12px;
    padding: 12px 16px;

    strong {
      font-size: 1.6rem;
    }
  }
`