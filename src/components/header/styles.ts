import styled from 'styled-components';
import { breakpoints, colors } from '../../../styles';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;

  img {
    width: 300px
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 16px;

    img {
      width: 250px;
    }
  }
`;

export const HeaderMenu = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const HeaderMenuItem = styled.a`
  padding: 8px 16px;
  border-bottom: 4px solid transparent;
  color: ${colors.text};
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  transition: 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    border-bottom: 4px solid ${colors.primary};
  }
`;

export const HeaderLink = styled.a`
  padding: 12px 24px;
  background-color: ${colors.primaryTransparent};
  color: ${colors.text};
  border: none;
  border-radius: 10px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${colors.primary};
    color: #fff;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const HeaderMenuMobileToggle = styled.div`
  display: none;

  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${colors.text};
    border-radius: 10px;
    margin: 4px 0;
    transition: all 0.3s ease;

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

export const HeaderMenuMobile = styled.div`
  display: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    background-color: #fff;
    position: absolute;
    top: 100%;
    left: 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    display: contents;
  }
`;