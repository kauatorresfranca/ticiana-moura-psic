import styled from 'styled-components';
import { colors } from '../../../styles';

export const Hero = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0 16px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 500px;
  width: 100%;
`;

export const HeroTitle = styled.h1`
  font-size: 32px;
  color: ${colors.primary};
  font-weight: 700;
  margin-bottom: 24px;
`;

export const HeroDescription = styled.p`
  font-size: 18px;
  color: ${colors.text};
  margin-bottom: 24px;
`;

export const HeroButton = styled.a`
  background-color: ${colors.primaryTransparent};
  color: ${colors.title};
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.4s ease;

  i {
    color: ${colors.title};
    font-size: 18px;
    font-weight: 500;
  }

  &:hover {
    background-color: ${colors.primary};
    transform: scale(1.05);
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;

  @media (min-width: 768px) {
    max-width: 45%;
  }

  @media (min-width: 1200px) {
    max-width: 500px;
  }
`;