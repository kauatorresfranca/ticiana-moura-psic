import styled from 'styled-components'
import { breakpoints, colors } from '../../../../styles'
import { motion } from 'framer-motion'

export const FAQSection = styled.section`
  padding: 100px 0;
  background-color: #fff;

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 16px;
  }
`

export const Title = styled.h2`
  font-size: 36px;
  color: ${colors.title};
  font-weight: 800;
  text-align: center;
  margin-bottom: 12px;
`

export const Subtitle = styled.p`
  font-size: 18px;
  color: ${colors.text};
  text-align: center;
  margin-bottom: 48px;
`

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const FAQItem = styled.div`
  border-radius: 16px;
  background-color: #fcfcfc;
  border: 1px solid #f0f0f0;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${colors.primary}40;
  }
`

export const FAQQuestion = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 18px;
  font-weight: 600;
  color: ${colors.title};
  transition: all 0.3s ease;

  .icon {
    color: ${colors.primary};
    transition: transform 0.3s ease;
  }

  &.active {
    color: ${colors.primary};
    background-color: ${colors.primaryTransparent};
    
    .icon {
      transform: rotate(180deg);
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
    padding: 20px;
  }
`

export const FAQAnswer = styled(motion.div)`
  overflow: hidden;

  .answer-content {
    padding: 24px 24px;
    font-size: 16px;
    line-height: 1.6;
    color: ${colors.text};
  }
`