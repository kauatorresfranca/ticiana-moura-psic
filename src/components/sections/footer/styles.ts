// Footer/styles.js
import styled from 'styled-components'
import { breakpoints, colors } from '../../../../styles'

export const FooterSection = styled.footer`
  border-top: 1px solid rgba(184, 154, 122, 0.2);
  padding: 80px 0 40px 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 60px 0 30px 0;
  }
`

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 50px;
  margin-bottom: 60px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 40px;
  }
`

export const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const FooterLogo = styled.h3`
  font-family: 'DM Serif Display', serif;
  font-size: 26px;
  color: ${colors.title};
  font-weight: 400;
  margin-bottom: 4px;
`

export const FooterTagline = styled.span`
  font-size: 14px;
  color: ${colors.primary};
  font-weight: 600;
  margin-bottom: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
`

export const FooterDescription = styled.p`
  font-size: 15px;
  color: ${colors.text};
  line-height: 1.6;
  max-width: 380px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
  }
`

export const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const ColumnTitle = styled.h4`
  font-family: 'DM Serif Display', serif;
  font-size: 18px;
  color: ${colors.title};
  font-weight: 400;
  margin-bottom: 20px;
`

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;

  a {
    font-size: 15px;
    color: ${colors.text};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${colors.primary};
    }
  }
`

export const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: ${colors.text};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.primary};
  }
`

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid rgba(184, 154, 122, 0.15);
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`

export const Copyright = styled.p`
  font-size: 14px;
  color: ${colors.text};
`

export const Credit = styled.p`
  font-size: 14px;
  color: ${colors.text};
  display: inline-flex;
  align-items: center;
  gap: 6px;

  a {
    color: ${colors.primary};
    text-decoration: none;
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }
`

export const ScrollTopButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${colors.primaryTransparent};
  border: 1px solid rgba(184, 154, 122, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.primary};
    border-color: ${colors.primary};
    transform: translateY(-3px);

    svg {
      color: #fff !important;
    }
  }
`