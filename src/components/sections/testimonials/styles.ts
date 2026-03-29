import styled from 'styled-components'
import { breakpoints, colors } from '../../../../styles'

export const TestimonialsSection = styled.section`
  padding: 100px 0;
  background-color: #fff;

  .container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 16px;
  }
`

export const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;

  p {
    color: ${colors.text};
    font-size: 18px;
    margin-top: 12px;
  }
`

export const Title = styled.h2`
  font-size: 40px;
  color: ${colors.title};
  font-weight: 800;
  
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 32px;
  }
`

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    overflow-x: auto;
    padding-bottom: 20px;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }
`

export const TestimonialCard = styled.div`
  background-color: ${colors.primaryTransparent};
  padding: 40px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s ease;

  @media (max-width: ${breakpoints.tablet}) {
    flex: 0 0 85%;
    scroll-snap-align: center;
  }

  &:hover {
    transform: translateY(-10px);
  }
`

export const QuoteIcon = styled.div`
  color: ${colors.primary};
  opacity: 0.2;
  margin-bottom: 20px;
`

export const TestimonialText = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: ${colors.title};
  font-style: italic;
  margin-bottom: 30px;
  flex-grow: 1;
`

export const AuthorArea = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  border-top: 1px solid rgba(0,0,0,0.05);
  padding-top: 20px;
`

export const AuthorImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${colors.primary};
`

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const AuthorName = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.title};
`

export const StarsWrapper = styled.div`
  display: flex;
  gap: 2px;
  margin: 4px 0;
`

export const Location = styled.span`
  font-size: 12px;
  color: ${colors.text};
  font-weight: 500;
`