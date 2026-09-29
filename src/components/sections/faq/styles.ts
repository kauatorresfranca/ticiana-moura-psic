import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoints, palette } from '../../../../styles'

type OpenProps = { $isOpen: boolean }

export const FaqSection = styled.section`
  position: relative;
  padding: clamp(72px, 10vw, 120px) 0;
  overflow: hidden;
  color: ${palette.brown};
  background:
    radial-gradient(45% 40% at 0% 0%, ${palette.sand} 0%, transparent 70%),
    ${palette.sandLight};
`

/* Desktop: título + CTA à esquerda, perguntas à direita.
   Mobile: título, perguntas, CTA (nessa ordem). */
export const FaqGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  grid-template-areas:
    'header list'
    'help   list';
  grid-template-rows: auto 1fr;
  column-gap: clamp(40px, 6vw, 88px);
  row-gap: 32px;
  align-items: start;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      'header'
      'list'
      'help';
    grid-template-rows: none;
    max-width: 720px;
    row-gap: 36px;
  }
`

export const SectionHeader = styled(motion.div)`
  grid-area: header;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 620px;
    margin: 0 auto;
    text-align: center;
  }
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
  font-size: clamp(1.75rem, 1.3rem + 2vw, 2.6rem);
  color: ${palette.brown};
  text-wrap: balance;
`

export const Description = styled.p`
  max-width: 440px;
  font-size: clamp(0.95rem, 0.92rem + 0.25vw, 1.0625rem);
  line-height: 1.7;
  color: rgba(66, 46, 34, 0.86);

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 auto;
    max-width: 560px;
  }
`

export const AccordionList = styled.ul`
  grid-area: list;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
`

/* Só border/background mudam no hover: nada de transform aqui,
   então não há conflito com o transform inline do framer-motion. */
export const AccordionItem = styled(motion.li)<OpenProps>`
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid
    ${({ $isOpen }) => ($isOpen ? 'rgba(66, 46, 34, 0.45)' : 'rgba(66, 46, 34, 0.14)')};
  background: ${({ $isOpen }) =>
    $isOpen ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.55)'};
  box-shadow: ${({ $isOpen }) =>
    $isOpen ? '0 18px 32px -22px rgba(66, 46, 34, 0.55)' : 'none'};
  transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;

  @media (hover: hover) {
    &:hover {
      border-color: rgba(66, 46, 34, 0.4);
      background: rgba(255, 255, 255, 0.8);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

/* O heading envolve o botão (padrão WAI-ARIA para accordion). */
export const QuestionHeading = styled.h3`
  margin: 0;
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  font-size: clamp(1.05rem, 1rem + 0.4vw, 1.25rem);
  line-height: 1.3;
  color: ${palette.brown};
`

export const AccordionTrigger = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  min-height: 64px;
  padding: 16px clamp(18px, 3vw, 28px);
  border: none;
  background: none;
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 3px solid ${palette.brown};
    outline-offset: -3px;
    border-radius: 20px;
  }
`

export const QuestionText = styled.span`
  flex: 1;
  text-wrap: balance;
`

export const IconWrapper = styled.span<OpenProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({ $isOpen }) => ($isOpen ? palette.brown : 'rgba(66, 46, 34, 0.1)')};
  color: ${({ $isOpen }) => ($isOpen ? palette.sand : palette.brown)};
  transform: rotate(${({ $isOpen }) => ($isOpen ? '180deg' : '0deg')});
  transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

/* Altura animada via grid (0fr -> 1fr): o conteúdo continua no DOM
   quando fechado (bom para SEO e Ctrl+F). O visibility esconde o
   conteúdo fechado de leitores de tela e do foco do teclado. */
export const AccordionBody = styled.div<OpenProps>`
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? '1fr' : '0fr')};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition:
    grid-template-rows 0.3s ease,
    visibility 0s linear ${({ $isOpen }) => ($isOpen ? '0s' : '0.3s')};

  > div {
    min-height: 0;
    overflow: hidden;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const AnswerText = styled.p`
  padding: 0 clamp(18px, 3vw, 28px) clamp(20px, 2.5vw, 26px);
  font-size: 0.95rem;
  line-height: 1.75;
  color: rgba(66, 46, 34, 0.88);
`

export const Help = styled(motion.div)`
  grid-area: help;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    align-items: center;
    text-align: center;
  }
`

export const HelpText = styled.p`
  max-width: 320px;
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.6;
  color: ${palette.brown};

  @media (max-width: ${breakpoints.tablet}) {
    max-width: none;
  }
`

export const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 52px;
  padding: 0 28px;
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

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    max-width: 420px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`