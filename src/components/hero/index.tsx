import * as S from './styles';
import HeroImage from '../../assets/images/heroImage.png';

export const Hero = () => {
  return (
    <S.Hero>
      <S.HeroContent>
        <S.HeroTitle>Redescubra o Equilíbrio Emocional e Viva com Leveza</S.HeroTitle>
        <S.HeroDescription>
          Com psicoterapia humanizada e baseada em evidências, transforme sua relação com as emoções. Atendimento online, acolhedor e confidencial – estou aqui para te guiar no caminho do autoconhecimento, sem sair de casa.
        </S.HeroDescription>
        <S.HeroButton><i className="ri-wechat-line"></i> Agendar Atendimento</S.HeroButton>
      </S.HeroContent>
      <S.HeroImage src={HeroImage} alt="Imagem de equilíbrio emocional" />
    </S.Hero>
  );
};

export default Hero;