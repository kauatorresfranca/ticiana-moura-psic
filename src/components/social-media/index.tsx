import * as S from './styles'
import logo from '../../assets/images/logo.png'

const SocialMedia = () => {
  return (
    <S.SocialMediaContainer>
        <img src={logo} alt="" />
      <S.SocialMediaDescription>Empatia e renovação: seu caminho para uma vida plena.</S.SocialMediaDescription>
      <S.SocialMediaLinks>
        <S.SocialMediaLink href="https://api.whatsapp.com/send?phone=5582996727126">
          <i className="ri-whatsapp-line"></i>
        </S.SocialMediaLink>
        <S.SocialMediaLink href="mailto:ticipsic@hotmail.com">
          <i className="ri-mail-line"></i>
        </S.SocialMediaLink>
        <S.SocialMediaLink href="https://www.instagram.com/psi.ticianamoura/">
          <i className="ri-instagram-line"></i>
        </S.SocialMediaLink>
      </S.SocialMediaLinks>
    </S.SocialMediaContainer>
  )
}

export default SocialMedia