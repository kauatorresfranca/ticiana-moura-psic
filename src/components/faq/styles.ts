import styled from "styled-components";
import { colors } from "../../../styles";

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
`; 

export const FAQList = styled.ul`
    list-style: none;
    padding: 0;
`;

export const FAQItem = styled.li`
    border-bottom: 1px solid ${colors.text};
    padding: 16px 0;

    &:last-child {
        border-bottom: none;
    }
`;

export const FAQQuestion = styled.h3`
    display: flex;
    justify-content: space-between;
    padding: 4px 8px;
    font-size: 16px;
    color: ${colors.title};
    font-weight: 500;
    transition: 0.3s ease-in-out;

    i {
        transition: 0.3s ease-in-out;
        color: ${colors.title};
    }

    &:hover {
        cursor: pointer;
    }

    &.active {
        i {
            transform: rotate(90deg);
        }
    }
`;

export const FAQAnswer = styled.p`
    display: none;
    font-size: 14px;
    padding: 4px 8px;
    color: ${colors.text};
    margin-top: 8px;

    &.active {
        display: block;
    }
`;
