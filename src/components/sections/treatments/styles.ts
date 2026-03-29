import styled from 'styled-components'
import { breakpoints, colors } from '../../../../styles'

export const TreatmentsSection = styled.section`
  padding: 100px 0;
  background-color: #fcfcfc;

  .container {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 16px;
  }
`

export const Header = styled.div`
  text-align: center;
  margin-bottom: 56px;

  p {
    color: ${colors.text};
    font-size: 18px;
    margin-top: 12px;
  }
`

export const TreatmentsTitle = styled.h2`
  font-size: 40px;
  color: ${colors.title};
  font-weight: 800;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${colors.primary};
    border-radius: 2px;
  }
`

export const TreatmentsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

export const TreatmentItem = styled.div`
  background-color: #fff;
  padding: 40px 24px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  border-color: ${colors.primaryTransparent};

  .icon-box {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primaryTransparent};
    border-radius: 50%;
    transition: all 0.3s ease;

    img {
      width: 40px;
      height: auto;
      transition: all 0.3s ease;
    }
  }

  &:hover {
    transform: translateY(-8px);
    border-color: ${colors.primary};
    box-shadow: 0 12px 30px ${colors.primary}15;

    .icon-box {
      background-color: ${colors.primary};
      img {
        filter: brightness(0) invert(1);
      }
    }
  }
`

export const TreatmentName = styled.span`
  font-size: 18px;
  color: ${colors.title};
  font-weight: 700;
  text-align: center;
  line-height: 1.2;
`