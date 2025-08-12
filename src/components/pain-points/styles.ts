import styled from 'styled-components';
import { breakpoints, colors } from '../../../styles';

export const PainPoints = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 16px;
  background-color: #f9f9f9;
  text-align: center;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 64px 32px;
  }
`;

export const PainPointsTitle = styled.h2`
  font-size: 24px;
  color: ${colors.title};
  font-weight: 700;
  margin-bottom: 16px;

  span {
    color: ${colors.primary};
  }
`;

export const PainPointsText = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  max-width: 800px;
  margin-bottom: 2rem;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
`;

export const SymptomsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
`;

export const SymptomItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 250px;

  img {
    width: 142px;
    padding: 30px;
    border-radius: 50%;
    font-size: 80px;
    font-weight: 400;
    background-color: ${colors.primaryTransparent};
    color: ${colors.text};
  }
`;

export const SymptomText = styled.span`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
`;

export const CallToAction = styled.p`
  font-size: 1.1rem;
  color: ${colors.text};
  font-weight: 600;
  max-width: 600px;

  span {
    color: ${colors.primary}}
`;

export const Button = styled.a`
  margin-top: 16px;
  background-color: transparent;
  color: ${colors.title};
  padding: 12px 24px;
  border: 3px solid ${colors.primary};
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.4s ease;

  &:hover {
    background-color: ${colors.primaryTransparent};
    color: #fff;
    border: 3px solid transparent;
    transform: scale(1.05);
  }
`