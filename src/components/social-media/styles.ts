import styled from "styled-components";
import { colors } from "../../../styles";

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 40px 20px;
  background-color: #f9f9f9;

  img {
    width: 300px;
  }
`;

export const SocialMediaDescription = styled.p`
  font-size: 16px;
  color: ${colors.text};
  margin-bottom: 24px;
`;

export const SocialMediaLinks = styled.div`
  display: flex;
  gap: 16px;
`;

export const SocialMediaLink = styled.a`
  text-decoration: none;

  i {
    background-color: ${colors.primaryTransparent};
    padding: 16px;
    border-radius: 50%;
    font-size: 24px;
    color: ${colors.text};
  }
`;
