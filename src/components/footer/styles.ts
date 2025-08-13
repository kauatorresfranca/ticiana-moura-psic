import styled from "styled-components";
import { colors } from "../../../styles";

export const Footer = styled.footer`
  background-color: ${colors.background};
  padding: 20px 0;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.p`
  font-size: 14px;
  color: ${colors.text};
`;