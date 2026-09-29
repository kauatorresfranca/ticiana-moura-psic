import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoints, palette } from '../../../../styles'

const GAP = '32px'

export const HowSection = styled.section`
  position: relative;
  padding: clamp(72px, 10vw, 120px) 0;
  overflow: hidden;
  color: ${palette.sand};
  background:
    radial-gradient(60% 50% at 50% 0%, #5a4131 0%, transparent 70%),
    ${palette.brown};
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
  color: rgba(219, 195, 173, 0.8);
`

export const Title = styled.h2`
  margin: 0 0 16px;
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  line-height: 1.15;
  font-size: clamp(1.75rem, 1.3rem + 2vw, 2.75rem);
  color: ${palette.sandLight};
  text-wrap: balance;
`

export const Description = styled.p`
  font-size: clamp(0.95rem, 0.92rem + 0.25vw, 1.0625rem);
  line-height: 1.7;
  color: rgba(219, 195, 173, 0.88);
`

export const StepsGrid = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${GAP};
  margin: 0 0 clamp(36px, 5vw, 56px);
  padding: 0;
  list-style: none;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: minmax(0, 1fr);
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
  }
`

/* li animado pelo framer-motion; o hover fica no card interno
   para o transform do CSS não ser sobrescrito pelo transform inline do framer */
export const StepItem = styled(motion.li)`
  position: relative;

  /* conector entre os passos (desktop: horizontal) */
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 66px;
    left: 100%;
    width: ${GAP};
    border-top: 1.5px dashed rgba(219, 195, 173, 0.4);
  }

  @media (max-width: ${breakpoints.tablet}) {
    /* tablet e mobile: vertical */
    &:not(:last-child)::after {
      top: 100%;
      left: 45px;
      width: 0;
      height: ${GAP};
      border-top: none;
      border-left: 1.5px dashed rgba(219, 195, 173, 0.4);
    }
  }
`

export const StepCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 36px 30px;
  border-radius: 24px;
  border: 1px solid rgba(219, 195, 173, 0.2);
  background: rgba(219, 195, 173, 0.07);
  transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(219, 195, 173, 0.5);
    background: rgba(219, 195, 173, 0.11);
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-areas:
      'icon title'
      'icon desc';
    column-gap: 20px;
    row-gap: 8px;
    align-items: start;
    padding: 28px 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    column-gap: 16px;
    padding: 24px 20px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`

export const StepNumber = styled.span`
  position: absolute;
  top: 20px;
  right: 26px;
  font-family: 'DM Serif Display', serif;
  font-size: 2rem;
  line-height: 1;
  color: rgba(219, 195, 173, 0.3);

  @media (max-width: ${breakpoints.mobile}) {
    top: 16px;
    right: 18px;
    font-size: 1.5rem;
  }
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin-bottom: 24px;
  border-radius: 16px;
  background: ${palette.sand};
  color: ${palette.brown};

  @media (max-width: ${breakpoints.tablet}) {
    grid-area: icon;
    width: 52px;
    height: 52px;
    margin-bottom: 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 46px;
    height: 46px;
  }
`

export const StepTitle = styled.h3`
  margin: 0 0 12px;
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  line-height: 1.25;
  font-size: clamp(1.15rem, 1.05rem + 0.5vw, 1.5rem);
  color: ${palette.sandLight};

  @media (max-width: ${breakpoints.tablet}) {
    grid-area: title;
    margin: 0;
    padding-right: 36px; /* espaço para o número */
  }
`

export const StepDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(219, 195, 173, 0.88);

  @media (max-width: ${breakpoints.tablet}) {
    grid-area: desc;
  }
`

export const ActionContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
`

export const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 52px;
  padding: 0 32px;
  border-radius: 999px;
  background: ${palette.sand};
  color: ${palette.brown};
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 14px 28px -12px rgba(0, 0, 0, 0.6);
  transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;

  svg {
    transition: transform 0.25s ease;
  }

  &:hover {
    transform: translateY(-2px);
    background: ${palette.sandLight};
    box-shadow: 0 18px 32px -12px rgba(0, 0, 0, 0.65);

    svg {
      transform: translateX(4px);
    }
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 3px solid ${palette.sand};
    outline-offset: 3px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    max-width: 420px;
    padding: 12px 24px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    svg {
      transition: none;
    }
    &:hover svg {
      transform: none;
    }
  }
`