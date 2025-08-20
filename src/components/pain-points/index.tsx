import { motion, easeOut } from 'framer-motion';
import * as S from './styles';
import ansiedade from '../../assets/images/ansiedade.png';
import preocupacao from '../../assets/images/preocucacao.png';
import estresse from '../../assets/images/estresse.png';
import autoestima from '../../assets/images/autoestima.png';

// Animation variants for the SymptomsList and SymptomItem
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger each SymptomItem by 0.2s
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // Start below and invisible
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }, // Slide up and fade in
};

export const PainPoints = () => {
  return (
    <S.PainPoints
      as={motion.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: easeOut }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <S.PainPointsTitle
        as={motion.h2}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Sua mente parece um turbilhão constante, com pensamentos que <span>não param de girar</span>, deixando você exausta e sem fôlego para o dia a dia?
      </S.PainPointsTitle>
      <S.PainPointsText
        as={motion.p}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Se você se sente sobrecarregada por preocupações intermináveis, como se cada pequeno detalhe pudesse desabar tudo ao seu redor, saiba que não está sozinha nessa luta.
        Esses sinais podem indicar um sofrimento mais profundo que afeta sua qualidade de vida:
      </S.PainPointsText>
      <S.SymptomsList
        as={motion.ul}
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <S.SymptomItem as={motion.li} variants={itemVariants}>
          <img src={ansiedade} alt="Ansiedade" />
          <S.SymptomText>Ansiedade constante que acelera o coração e rouba o sono</S.SymptomText>
        </S.SymptomItem>
        <S.SymptomItem as={motion.li} variants={itemVariants}>
          <img src={preocupacao} alt="Preocupação" />
          <S.SymptomText>Preocupações excessivas que transformam dias comuns em batalhas internas</S.SymptomText>
        </S.SymptomItem>
        <S.SymptomItem as={motion.li} variants={itemVariants}>
          <img src={estresse} alt="Estresse" />
          <S.SymptomText>Irritabilidade e estresse que explodem em momentos inesperados</S.SymptomText>
        </S.SymptomItem>
        <S.SymptomItem as={motion.li} variants={itemVariants}>
          <img src={autoestima} alt="Autoestima" />
          <S.SymptomText>Baixa autoestima que faz você duvidar do seu valor e potencial</S.SymptomText>
        </S.SymptomItem>
      </S.SymptomsList>
      <S.CallToAction
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Esses desafios <span>não precisam</span> definir sua vida. Com apoio profissional, você pode encontrar alívio e equilíbrio. <br /><br />Agende uma consulta e dê o <span>primeiro passo</span> para uma mente mais serena.
      </S.CallToAction>
      <S.Button
        as={motion.a}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        href='https://wa.me/+5582996727126?text=Oi, quero agendar uma consulta.'
      >
        Agendar Consulta
      </S.Button>
    </S.PainPoints>
  );
};

export default PainPoints;