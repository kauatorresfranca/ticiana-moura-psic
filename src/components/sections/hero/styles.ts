import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoints } from '../../../../styles'

const palette = {
  sand: '#dbc3ad',
  sandLight: '#EDE1D6',
  sandDark: '#C4AD98',
  brown: '#422e22',
  brownSoft: '#6b4a36',
  white: '#ffffff',
}

export const HeroSection = styled.section`
  position: relative;
  display: grid;
  align-items: center;
  min-height: 100vh;
  min-height: 100svh;
  padding: clamp(96px, 12vh, 136px) 0 clamp(48px, 6vh, 72px);
  overflow: hidden;
  color: ${palette.brown};
  background:
    radial-gradient(60% 55% at 78% 42%, ${palette.sandLight} 0%, transparent 70%),
    linear-gradient(180deg, ${palette.sand} 0%, #d3b9a2 100%);

  @media (max-width: ${breakpoints.tablet}) {
    min-height: auto;
    padding: 84px 0 48px;
    background:
      radial-gradient(80% 40% at 50% 85%, ${palette.sandLight} 0%, transparent 70%),
      linear-gradient(180deg, ${palette.sand} 0%, #d3b9a2 100%);
  }
`

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  align-items: center;
  gap: clamp(32px, 4vw, 64px);
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
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
  margin-bottom: 12px;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${palette.brownSoft};
  opacity: 0.9;
`

export const HeroTitle = styled(motion.h1)`
  margin: 0 0 16px;
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  line-height: 1.14;
  font-size: clamp(2.1rem, 1.4rem + 3.2vw, 3.4rem);
  color: ${palette.brown};
  text-wrap: balance;

  /* Sem quebra de linha forçada para manter o ritmo e a fluidez */
  span {
    display: inline;
    font-style: italic;
    color: #2e1e15;
  }
`

export const HeroDescription = styled(motion.p)`
  margin: 0 0 28px;
  max-width: 470px;
  font-size: clamp(0.95rem, 0.9rem + 0.2vw, 1.05rem);
  line-height: 1.6;
  color: rgba(66, 46, 34, 0.85);

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 24px;
  }
`

export const HeroActions = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    align-items: center;
  }
`

export const HeroButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 52px;
  padding: 0 32px;
  border-radius: 999px;
  /* Fundo claro para criar contraste limpo sobre o fundo areia */
  background: ${palette.white};
  color: ${palette.brownSoft};
  border: 1px solid rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 10px 24px -6px rgba(66, 46, 34, 0.22);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

  svg {
    color: ${palette.brownSoft};
  }

  &:hover {
    transform: translateY(-2px);
    background: #fbf9f6;
    box-shadow: 0 14px 28px -6px rgba(66, 46, 34, 0.3);
  }

  &:active {
    transform: scale(0.98);
  }


  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    max-width: 380px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const TrustHint = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color:${palette.brown};
  font-weight: 500;
  padding-left: 4px;

  svg {
    color: ${palette.brown};
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding-left: 0;
  }
`

export const Visual = styled(motion.div)`
  position: relative;
  justify-self: center;
  width: 100%;
  max-width: 430px;
  aspect-ratio: 4 / 5;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 1.5px solid rgba(66, 46, 34, 0.22);
    border-radius: 999px 999px 32px 32px;
    transform: translate(12px, 12px);
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: min(290px, 78vw);

    &::before {
      transform: translate(8px, 8px);
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
  box-shadow: 0 20px 40px -18px rgba(66, 46, 34, 0.4);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }
`