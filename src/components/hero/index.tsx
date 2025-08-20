import { motion } from 'framer-motion';
import * as S from './styles';
import HeroImage from '../../assets/images/heroImage.png';

export const Hero = () => {
  return (
    <S.Hero
      as={motion.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }} // Ensures animation runs only the first time the section is visible
    >
      <S.HeroContent
        as={motion.div}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }} // Consistent single-run behavior
      >
        <S.HeroTitle>Redescubra o Equilíbrio Emocional e Viva com Leveza</S.HeroTitle>
        <S.HeroDescription>
          Com psicoterapia humanizada e baseada em evidências, transforme sua relação com as emoções. Atendimento acolhedor e confidencial – estou aqui para te guiar no caminho do autoconhecimento.
        </S.HeroDescription>
        <S.HeroButton href="https://wa.me/+5582996727126?text=Oi, gostaria de agendar uma consulta.">
          <i className="ri-wechat-line"></i> Agendar Atendimento
        </S.HeroButton>
      </S.HeroContent>
      <S.HeroImage
        as={motion.img}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }} // Consistent single-run behavior
        src={HeroImage}
        alt="Imagem de equilíbrio emocional"
      />
    </S.Hero>
  );
};

export default Hero;