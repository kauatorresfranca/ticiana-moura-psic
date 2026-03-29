import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
  70% { box-shadow: 0 0 0 20px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
`

export const Label = styled.span`
  position: absolute;
  right: 20px;
  background: white;
  color: #25d366;
  padding: 10px 25px 10px 20px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  /* Efeito de surgimento */
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: -1;
  pointer-events: none;
`

export const WhatsAppWrapper = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
  animation: ${pulse} 2s infinite;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background-color: #20ba5a;
    
    ${Label} {
      opacity: 1;
      transform: translateX(-45px); /* Move a pílula para a esquerda do botão */
      z-index: -1;
    }
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 55px;
    height: 55px;

    ${Label} {
      display: none;
    }
  }
`