import styled from 'styled-components'
import { breakpoints, palette } from '../../../../styles'

export const FooterSection = styled.footer`
  position: relative;
  padding: clamp(56px, 8vw, 88px) 0 calc(28px + env(safe-area-inset-bottom, 0px));
  overflow: hidden;
  color: ${palette.sand};
  background:
    radial-gradient(50% 60% at 0% 0%, #4d3729 0%, transparent 70%),
    ${palette.brown};
`

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(32px, 5vw, 64px);
  margin-bottom: clamp(40px, 5vw, 56px);

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 36px;
  }
`

export const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${breakpoints.tablet}) {
    grid-column: 1 / -1;
  }
`

export const FooterLogo = styled.p`
  margin: 0 0 12px;
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  line-height: 1.2;
  font-size: clamp(1.5rem, 1.3rem + 0.8vw, 1.9rem);
  color: ${palette.sandLight};
`

export const FooterTagline = styled.span`
  display: inline-block;
  margin-bottom: 18px;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid rgba(219, 195, 173, 0.4);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${palette.sand};
`

export const FooterDescription = styled.p`
  max-width: 400px;
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(219, 195, 173, 0.85);

  strong {
    font-weight: 600;
    color: ${palette.sandLight};
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 560px;
  }
`

export const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const ColumnTitle = styled.h2`
  margin: 0 0 16px;
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  font-size: 1.15rem;
  line-height: 1.3;
  color: ${palette.sandLight};
`

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2px;

  a {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    min-height: 44px; /* área de toque confortável */
    font-size: 0.95rem;
    color: rgba(219, 195, 173, 0.85);
    text-decoration: none;
    transition: color 0.25s ease;

    &:hover {
      color: ${palette.sandLight};
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    &:focus-visible {
      outline: 2px solid ${palette.sand};
      outline-offset: 3px;
      border-radius: 4px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    a {
      transition: none;
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
  gap: 12px;
  width: fit-content;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 999px;
  border: 1px solid rgba(219, 195, 173, 0.35);
  font-size: 0.95rem;
  font-weight: 500;
  color: ${palette.sand};
  text-decoration: none;
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;

  &:hover {
    background: ${palette.sand};
    border-color: ${palette.sand};
    color: ${palette.brown};
  }

  &:focus-visible {
    outline: 3px solid ${palette.sand};
    outline-offset: 3px;
  }

  @media (max-width: 560px) {
    width: 100%;
    max-width: 320px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const FooterBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px 24px;
  padding-top: 28px;
  border-top: 1px solid rgba(219, 195, 173, 0.2);

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`

export const Copyright = styled.p`
  font-size: 0.85rem;
  line-height: 1.6;
  color: rgba(219, 195, 173, 0.75);
`

export const Credit = styled.p`
  font-size: 0.85rem;
  color: rgba(219, 195, 173, 0.75);

  a {
    color: ${palette.sand};
    font-weight: 600;
    text-decoration: none;

    &:hover {
      color: ${palette.sandLight};
      text-decoration: underline;
      text-underline-offset: 3px;
    }

    &:focus-visible {
      outline: 2px solid ${palette.sand};
      outline-offset: 3px;
      border-radius: 4px;
    }
  }
`

export const ScrollTopButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(219, 195, 173, 0.4);
  background: transparent;
  color: ${palette.sand};
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;

  &:hover {
    background: ${palette.sand};
    color: ${palette.brown};
    transform: translateY(-3px);
  }

  &:focus-visible {
    outline: 3px solid ${palette.sand};
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`