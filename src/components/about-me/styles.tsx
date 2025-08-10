import styled from "styled-components";
import { breakpoints, colors } from "../../../styles";

export const AboutMe = styled.section`
    display: flex;
    align-items: center;
    gap: 40px;
    background: linear-gradient(180deg, ${colors.primaryTransparent} 95%, ${colors.white} 100%);
    padding: 60px 40px;
    border-radius: 10%;

    @media (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
        border-radius: 10px;
    }
`;

export const AboutMeImage = styled.img`
    max-width: 560px;
    border-radius: 10%;
    height: auto;

    @media (max-width: ${breakpoints.tablet}) {
        height: 400px;
    }
`;

export const AboutMeContent = styled.div`
    max-width: 800px;
`;

export const AboutMeTitle = styled.h2`
    font-size: 32px;
    color: ${colors.title};
    font-weight: 700;
`;

export const AboutMeSubtitle = styled.h3`
    font-size: 18px;
    color: ${colors.text};
    font-weight: 500;
    margin-bottom: 16px;
`;

export const AboutMeDescription = styled.p`
    font-size: 18px;
    color: ${colors.text};
    line-height: 1.6;
`;

export const AboutMeTraining = styled.div`
    margin-top: 32px;
`;

export const AboutMeTrainingTitle = styled.h4`
    font-size: 20px;
    color: ${colors.title};
    font-weight: 700;
    margin-bottom: 16px;
`;

export const AboutMeTrainingList = styled.ul`
    padding-left: 0;

    li {
        font-size: 16px;
        color: ${colors.text};
        margin-bottom: 8px;
    }
`;
