import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoints, palette } from '../../../../styles'

export const ServicesSection = styled.section`
  position: relative;
  padding: clamp(72px, 10vw, 120px) 0;
  overflow: hidden;
  color: ${palette.brown};
  background:
    radial-gradient(50% 45% at 100% 100%, ${palette.sandLight} 0%, transparent 70%),
    ${palette.sand};
`

export const SectionHeader = styled(motion.div)`
  max-width: 700px;
  margin: 0 auto clamp(40px, 6vw, 64px);
  text-align: center;
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
  margin: 0 0 16px;
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  line-height: 1.15;
  font-size: clamp(1.75rem, 1.3rem + 2vw, 2.75rem);
  color: ${palette.brown};
  text-wrap: balance;
`

export const Description = styled.p`
  font-size: clamp(0.95rem, 0.92rem + 0.25vw, 1.0625rem);
  line-height: 1.7;
  color: rgba(66, 46, 34, 0.86);
`

export const CardsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(16px, 2.5vw, 28px);
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: minmax(0, 1fr);
  }
`

/* li animado pelo framer-motion; o hover fica no card interno
   para o transform do CSS não ser sobrescrito pelo inline do framer */
export const CardItem = styled(motion.li)`
  display: flex;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: clamp(24px, 3vw, 36px);
  border-radius: 24px;
  border: 1px solid rgba(66, 46, 34, 0.14);
  background: rgba(255, 255, 255, 0.55);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease,
    background 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(66, 46, 34, 0.4);
    background: rgba(255, 255, 255, 0.75);
    box-shadow: 0 20px 36px -20px rgba(66, 46, 34, 0.5);
  }

  /* mobile: ícone ao lado do título economiza altura */
  @media (max-width: ${breakpoints.mobile}) {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-areas:
      'icon title'
      'desc desc';
    column-gap: 14px;
    row-gap: 14px;
    align-items: center;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  margin-bottom: 22px;
  border-radius: 16px;
  background: ${palette.brown};
  color: ${palette.sand};

  @media (max-width: ${breakpoints.mobile}) {
    grid-area: icon;
    width: 48px;
    height: 48px;
    margin-bottom: 0;
  }
`

export const CardTitle = styled.h3`
  margin: 0 0 12px;
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  line-height: 1.25;
  font-size: clamp(1.15rem, 1.05rem + 0.5vw, 1.5rem);
  color: ${palette.brown};

  @media (max-width: ${breakpoints.mobile}) {
    grid-area: title;
    margin: 0;
  }
`

export const CardDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(66, 46, 34, 0.86);

  @media (max-width: ${breakpoints.mobile}) {
    grid-area: desc;
  }
`