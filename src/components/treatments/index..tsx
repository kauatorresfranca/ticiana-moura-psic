import { motion, easeOut } from 'framer-motion';
import * as S from './styles';
import treatment_ansiedade from '../../assets/images/treatment_ansiedade.png';
import treatment_depressao from '../../assets/images/treatment_depressao.png';
import treatment_problemas_relacionamento from '../../assets/images/treatment_problema_relacionamento.png';
import treatment_questoes_sociais from '../../assets/images/treatment_questoes_sociais.png';
import treatment_fobias from '../../assets/images/treatment_fobias.png';
import treatment_transtornos_alimentares from '../../assets/images/treatment_transtornos_alimentares.png';
import treatment_transtorno_panico from '../../assets/images/treatment_transtorno_panico.png';
import treatment_transtorno_estresse_pos_traumatico from '../../assets/images/treatment_transtorno_estresse_pos_traumatico.png';

// Animation variants for the parent (TreatmentsList) and children (TreatmentItem)
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger each child animation by 0.1s
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 }, // Start smaller and invisible
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut }, // Scale to full size and fade in
  },
};

export const Treatments = () => {
  return (
    <S.Treatments
      as={motion.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: easeOut }}
      viewport={{ once: true, amount: 0.2 }} // Runs only once when 20% visible
      id="Especialidades"
    >
      <S.TreatmentsTitle
        as={motion.h2}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeOut }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Especialidades
      </S.TreatmentsTitle>
      <S.TreatmentsList
        as={motion.ul}
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <S.TreatmentItem as={motion.li} variants={itemVariants}>
          <img src={treatment_ansiedade} alt="Ansiedade" />
          <S.TreatmentName>Ansiedade</S.TreatmentName>
        </S.TreatmentItem>
        <S.TreatmentItem as={motion.li} variants={itemVariants}>
          <img src={treatment_depressao} alt="Depressão" />
          <S.TreatmentName>Depressão</S.TreatmentName>
        </S.TreatmentItem>
        <S.TreatmentItem as={motion.li} variants={itemVariants}>
          <img src={treatment_problemas_relacionamento} alt="Problemas de Relacionamento" />
          <S.TreatmentName>Problemas de Relacionamento</S.TreatmentName>
        </S.TreatmentItem>
        <S.TreatmentItem as={motion.li} variants={itemVariants}>
          <img src={treatment_questoes_sociais} alt="Questões Sociais" />
          <S.TreatmentName>Questões Sociais</S.TreatmentName>
        </S.TreatmentItem>
        <S.TreatmentItem as={motion.li} variants={itemVariants}>
          <img src={treatment_fobias} alt="Fobias" />
          <S.TreatmentName>Fobias</S.TreatmentName>
        </S.TreatmentItem>
        <S.TreatmentItem as={motion.li} variants={itemVariants}>
          <img src={treatment_transtornos_alimentares} alt="Transtornos Alimentares" />
          <S.TreatmentName>Transtornos Alimentares</S.TreatmentName>
        </S.TreatmentItem>
        <S.TreatmentItem as={motion.li} variants={itemVariants}>
          <img src={treatment_transtorno_panico} alt="Transtorno do Pânico" />
          <S.TreatmentName>Transtorno do Pânico</S.TreatmentName>
        </S.TreatmentItem>
        <S.TreatmentItem as={motion.li} variants={itemVariants}>
          <img src={treatment_transtorno_estresse_pos_traumatico} alt="Transtorno de Estresse Pós-Traumático" />
          <S.TreatmentName>Transtorno de Estresse Pós-Traumático</S.TreatmentName>
        </S.TreatmentItem>
      </S.TreatmentsList>
    </S.Treatments>
  );
};

export default Treatments;