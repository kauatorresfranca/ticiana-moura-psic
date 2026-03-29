import styled from 'styled-components'
import { colors } from '../../../../styles'

export const FooterWrapper = styled.footer`
  background-color: #fcfcfc;
  padding: 80px 0 30px;
  border-top: 1px solid #f0f0f0;

  .container {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-bottom: 60px;
  text-align: center;
`

export const BrandArea = styled.div`
  img {
    width: 240px;
    margin-bottom: 16px;
  }
`

export const Description = styled.p`
  font-size: 16px;
  color: ${colors.text};
  max-width: 320px;
  line-height: 1.5;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #fff;
  color: ${colors.title};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;

  &:hover {
    transform: translateY(-5px);
    background-color: ${colors.primary};
    color: #fff;
    border-color: ${colors.primary};
    box-shadow: 0 8px 20px ${colors.primary}40;
  }
`

export const CopyrightArea = styled.div`
  width: 100%;
  padding-top: 30px;
  border-top: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  p, span {
    font-size: 14px;
    color: ${colors.text};
    opacity: 0.8;
  }

  span {
    font-size: 12px;
    font-weight: 500;

    a {
      color: ${colors.primary};
      text-decoration: none;
      font-weight: 700;
      transition: opacity 0.2s;

      &:hover {
        text-decoration: underline;
        opacity: 0.7;
      }
    }
  }
`