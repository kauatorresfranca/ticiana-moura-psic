import styled from "styled-components";
import { breakpoints, colors } from "../../../styles";

export const Treatments = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 60px 20px;
  background-color: ${colors.background};
  
  h2 {
    text-align: center;
  }

   @media (max-width: ${breakpoints.mobile}) {
    padding: 40px 16px;

    h2 {
      font-size: 24px;
    }
  }
`;

export const TreatmentsTitle = styled.h2`
    font-size: 32px;
    color: ${colors.title};
    font-weight: 500;
    text-align: center;
`;

export const TreatmentsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const TreatmentItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 48px 16px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  img {
    width: 80px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 48px 10px;

    img {
      width: 64px;
    }
  }
`;

export const TreatmentName = styled.span`
  font-size: 22px;
  color: ${colors.title};
  font-weight: 600;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 18px;
  }
`;
