// FAQ/styles.js
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoints, colors } from '../../../../styles'

export const FaqSection = styled.section`
  padding: 120px 0;
  background-color: transparent;

  .container {
    max-width: 900px;
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

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 50px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 36px;
  }
`

export const AccordionItem = styled.div.attrs<{ $isOpen?: boolean }>((props) => ({
  style: {
    borderColor: props.$isOpen ? colors.primary : 'rgba(184, 154, 122, 0.2)',
    backgroundColor: props.$isOpen ? 'rgba(248, 245, 240, 1)' : 'rgba(248, 245, 240, 0.7)'
  }
}))`
  border-radius: 20px;
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${colors.primary};
    background-color: rgba(248, 245, 240, 1);
  }
`

export const AccordionHeader = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 28px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px;
  }
`

export const QuestionText = styled.h3`
  font-family: 'DM Serif Display', serif;
  font-size: 20px;
  color: ${colors.title};
  font-weight: 400;
  padding-right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 17px;
  }
`

export const IconWrapper = styled.div.attrs<{ $isOpen?: boolean }>((props) => ({
  style: {
    transform: props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
  }
}))`
  width: 36px;
  height: 36px;
  background-color: ${colors.primaryTransparent};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.3s ease;
`

export const AccordionBody = styled(motion.div)`
  overflow: hidden;
  padding: 0 28px 24px 28px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 20px 20px 20px;
  }
`

export const AnswerText = styled.p`
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