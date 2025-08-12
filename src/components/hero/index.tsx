import * as S from './styles';
import HeroImage from '../../assets/images/heroImage.png';

export const Hero = () => {
  return (
    <S.Hero>
      <S.HeroContent>
        <S.HeroTitle>Redescubra o Equilíbrio Emocional e Viva com Leveza</S.HeroTitle>
        <S.HeroDescription>
          Com psicoterapia humanizada e baseada em evidências, transforme sua relação com as emoções. Atendimento acolhedor e confidencial – estou aqui para te guiar no caminho do autoconhecimento.
        </S.HeroDescription>
        <S.HeroButton href='https://wa.me/+5582996727126?text=Olá, gostaria de agendar uma consulta.'>
          <i className="ri-wechat-line"></i> Agendar Atendimento
        </S.HeroButton>
      </S.HeroContent>
      <S.HeroImage src={HeroImage} alt="Imagem de equilíbrio emocional" />
    </S.Hero>
  );
};

export default Hero;