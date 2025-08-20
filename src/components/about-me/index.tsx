import { motion, easeOut } from 'framer-motion';
import * as S from './styles';
import AboutMeImage from '../../assets/images/aboutMeImage.jpg';

// Animation variants for AboutMeTrainingList and its li elements
const trainingListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger each li by 0.2s
    },
  },
};

const trainingItemVariants = {
  hidden: { opacity: 0, x: 20 }, // Start slightly to the right
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeOut } }, // Slide in and fade in
};

const AboutMe = () => {
  return (
    <S.AboutMe
      as={motion.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: easeOut }}
      viewport={{ once: true, amount: 0.2 }}
      id="Sobre Mim"
    >
      <S.AboutMeImage
        as={motion.img}
        initial={{ opacity: 0, x: -100 }} // Slide in from left
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: easeOut }}
        viewport={{ once: true, amount: 0.2 }}
        src={AboutMeImage}
        alt="Sobre Mim"
      />
      <S.AboutMeContent
        as={motion.div}
        initial={{ opacity: 0, x: 100 }} // Slide in from right
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <S.AboutMeTitle
          as={motion.h2}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Ticiana Moura
        </S.AboutMeTitle>
        <S.AboutMeSubtitle
          as={motion.h3}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Psicóloga | CRP 15/1563
        </S.AboutMeSubtitle>
        <S.AboutMeDescription
          as={motion.p}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Sou Ticiana Moura, psicóloga com mais de 20 anos de experiência, comprometida em promover o bem-estar emocional por meio de empatia e escuta ativa. Atuo presencialmente em Maceió e Coruripe, oferecendo atendimentos baseados em estratégias personalizadas e fundamentados em evidências, com enfoque na Gestalt Terapia. Minha trajetória abrange atendimento ambulatorial em atenção básica, suporte hospitalar, coordenação de saúde mental em hospital de urgência e emergência, atendimento a servidores estaduais da saúde e prática clínica em consultório particular, sempre priorizando inovação e cuidado humano. Acredito que o autoconhecimento é a chave para superar bloqueios e construir uma vida mais leve e equilibrada.
        </S.AboutMeDescription>
        <S.AboutMeTraining
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <S.AboutMeTrainingTitle
            as={motion.h3}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Formação e Experiência
          </S.AboutMeTrainingTitle>
          <S.AboutMeTrainingList
            as={motion.ul}
            variants={trainingListVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.li variants={trainingItemVariants}>Graduação em Psicologia - CESMAC (2000)</motion.li>
            <motion.li variants={trainingItemVariants}>Psicóloga na UBS Dr. Hamilton Falcão (2003-2005)</motion.li>
            <motion.li variants={trainingItemVariants}>Psicóloga do SAMU (2004-2008)</motion.li>
            <motion.li variants={trainingItemVariants}>Coordenadora do Núcleo de Atenção à Saúde do Servidor (2008-2012)</motion.li>
            <motion.li variants={trainingItemVariants}>Psicóloga Hospitalar e Coordenadora no Hospital Geral do Estado (2012-atual)</motion.li>
            <motion.li variants={trainingItemVariants}>Consultório Particular (2004-atual)</motion.li>
          </S.AboutMeTrainingList>
        </S.AboutMeTraining>
      </S.AboutMeContent>
    </S.AboutMe>
  );
};

export default AboutMe;