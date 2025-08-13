import styled from 'styled-components';
import { breakpoints, colors } from '../../../styles';

// Define props interface for components with active prop
interface ActiveProps {
  active?: boolean;
}

export const Testimonials = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 60px 20px;

  h2 {
    font-size: 32px;
    color: ${colors.title};
    font-weight: 500;
    text-align: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 40px 16px;

    h2 {
      font-size: 24px;
    }
  }
`;

export const TestimonialsList = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding: 0 10%;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${breakpoints.mobile}) {
    justify-content: center;
    flex-wrap: wrap;
    overflow-x: visible;
    scroll-snap-type: none;
    padding: 0;
  }
`;

export const TestimonialItem = styled.div<ActiveProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 12px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 32px 24px;
  flex: 0 0 80%;
  scroll-snap-align: center;
  transition: filter 0.2s ease, transform 0.2s ease;
  filter: ${(props) => (props.active ? 'none' : 'blur(2px)')};
  transform: ${(props) => (props.active ? 'scale(1)' : 'scale(0.95)')};

  @media (min-width: ${breakpoints.mobile}) {
    flex: 0 0 30%;
    filter: none;
    transform: none;
    scroll-snap-align: none;
  }
`;

export const TestimonialText = styled.p`
  font-size: 18px;
  color: ${colors.title};
  line-height: 1.6;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const TestimonialLocation = styled.p`
  position: absolute;
  bottom: 16px;
  font-size: 14px;
  color: ${colors.text};
`;

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
`;

export const Indicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;

  @media (min-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const Indicator = styled.div<ActiveProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? colors.primary : colors.text)};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;