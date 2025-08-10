import styled from "styled-components";
import { colors } from "../../../styles";

export const Testimonials = styled.section`
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
`;

export const TestimonialsList = styled.div`
    display: flex;
    gap: 32px;
`

export const TestimonialItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 24px;
`;

export const TestimonialText = styled.p`
    font-size: 18px;
    color: ${colors.title};
    line-height: 1.6;
`;

export const TestimonialLocation = styled.p`
    font-size: 14px;
    color: ${colors.text};
`

export const TestimonialAuthor = styled.span`
    display: flex;
    align-items: center;
`;

export const TestimonialAuthorContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const TestimonialAuthorImage = styled.img`
    border-radius: 50%;
    width: 48px;
    height: 48px;
    object-fit: cover;
    margin-right: 12px;
`;

export const TestimonialAuthorName = styled.span`
    font-size: 16px;
    color: ${colors.title};
    font-weight: bold;
`;

export const TestimonialAuthorReview = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    i {
        color: ${colors.primary};
    }
`
