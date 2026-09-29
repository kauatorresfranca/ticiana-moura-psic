import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoints } from '../../../../styles'

const palette = {
  sand: '#dbc3ad',
  sandLight: '#EDE1D6',
  sandDark: '#C4AD98',
  brown: '#422e22',
  brownSoft: '#6b4a36',
}

export const HeroSection = styled.section`
  position: relative;
  display: grid;
  align-items: center;
  min-height: 100vh;
  min-height: 100svh;
  padding: clamp(112px, 16vh, 160px) 0 clamp(48px, 8vh, 96px);
  overflow: hidden;
  color: ${palette.brown};
  background:
    radial-gradient(60% 55% at 78% 42%, ${palette.sandLight} 0%, transparent 70%),
    linear-gradient(180deg, ${palette.sand} 0%, #d3b9a2 100%);

  @media (max-width: ${breakpoints.tablet}) {
    min-height: auto;
    padding: 96px 0 56px;
    background:
      radial-gradient(80% 40% at 50% 85%, ${palette.sandLight} 0%, transparent 70%),
      linear-gradient(180deg, ${palette.sand} 0%, #d3b9a2 100%);
  }
`

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  align-items: center;
  gap: clamp(32px, 5vw, 80px);
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: minmax(0, 1fr);
    gap: 36px;
    text-align: center;
  }
`

export const HeroText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${breakpoints.tablet}) {
    align-items: center;
  }
`

export const Eyebrow = styled(motion.span)`
  display: inline-block;
  margin-bottom: 16px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${palette.brownSoft};
`

export const HeroTitle = styled(motion.h1)`
  margin: 0 0 20px;
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  line-height: 1.12;
  font-size: clamp(2rem, 1.2rem + 3.6vw, 3.75rem);
  color: ${palette.brown};
  text-wrap: balance;

  span {
    display: block;
    font-style: italic;
    color: ${palette.brownSoft};
  }
`

export const HeroDescription = styled(motion.p)`
  margin: 0 0 32px;
  max-width: 480px;
  font-size: clamp(0.95rem, 0.9rem + 0.3vw, 1.125rem);
  line-height: 1.65;
  color: rgba(66, 46, 34, 0.86);

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 24px;
  }
`

export const HeroActions = styled(motion.div)`
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    justify-content: center;
  }
`

export const HeroButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 52px;
  padding: 0 32px;
  border-radius: 999px;
  background: ${palette.brown};
  color: ${palette.sand};
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 12px 24px -8px rgba(66, 46, 34, 0.55);
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    background: #58402f;
    box-shadow: 0 16px 28px -8px rgba(66, 46, 34, 0.6);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 3px solid ${palette.brown};
    outline-offset: 3px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    max-width: 420px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const HeroBadges = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;

  li {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    border-radius: 999px;
    border: 1px solid rgba(66, 46, 34, 0.18);
    background: rgba(255, 255, 255, 0.35);
    font-size: 0.85rem;
    font-weight: 500;
    color: ${palette.brown};
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
    margin-top: 20px;
  }
`

export const Visual = styled(motion.div)`
  position: relative;
  justify-self: center;
  width: 100%;
  max-width: 460px;
  aspect-ratio: 4 / 5;

  /* contorno deslocado, dá profundidade ao arco */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 1.5px solid rgba(66, 46, 34, 0.28);
    border-radius: 999px 999px 32px 32px;
    transform: translate(14px, 14px);
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: min(320px, 82vw);

    &::before {
      transform: translate(10px, 10px);
    }
  }
`

export const ImageFrame = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 999px 999px 32px 32px;
  background: ${palette.sandDark};
  box-shadow: 0 30px 60px -24px rgba(66, 46, 34, 0.5);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }
`