import styled from "styled-components";
import { breakpoints, colors } from "../../../styles";

export const FAQ = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 60px 40px;

  h2 {
    font-size: 32px;
    color: ${colors.title};
    font-weight: 500;
    text-align: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 32px 16px;
  }
`;

export const FAQList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FAQItem = styled.li`
  border-bottom: 1px solid ${colors.text}20; // Mais sutil com transparência
  padding: 16px 0;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); // Sombra suave para modernidade
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const FAQQuestion = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  font-size: 18px;
  color: ${colors.title};
  font-weight: 500;
  background-color: #f9f9f9; // Fundo claro para destaque moderno
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  i {
    font-size: 20px;
    transition: transform 0.3s ease;
    color: ${colors.primary};
  }

  &:hover {
    background-color: #e9e9e9;
    color: ${colors.primary};
  }

  &.active {
    background-color: ${colors.primaryTransparent};
    color: ${colors.primary};

    i {
      transform: rotate(180deg); // Rotação para seta para cima
    }
  }
`;

export const FAQAnswer = styled.p`
  max-height: 0;
  overflow: hidden;
  font-size: 16px;
  color: ${colors.text};
  margin-top: 8px;
  padding: 0 16px;
  transition: max-height 0.5s ease, opacity 0.3s ease, padding 0.3s ease;
  opacity: 0;

  &.active {
    max-height: 200px; // Ajuste conforme o conteúdo; permite expansão suave
    opacity: 1;
    padding: 12px 16px;
  }
`;