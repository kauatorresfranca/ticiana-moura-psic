import { motion } from 'framer-motion'
import * as S from './styles'
import treatment_ansiedade from '../../../assets/images/treatment_ansiedade.png'
import treatment_depressao from '../../../assets/images/treatment_depressao.png'
import treatment_problemas_relacionamento from '../../../assets/images/treatment_problema_relacionamento.png'
import treatment_questoes_sociais from '../../../assets/images/treatment_questoes_sociais.png'
import treatment_fobias from '../../../assets/images/treatment_fobias.png'
import treatment_transtornos_alimentares from '../../../assets/images/treatment_transtornos_alimentares.png'
import treatment_transtorno_panico from '../../../assets/images/treatment_transtorno_panico.png'
import treatment_transtorno_estresse_pos_traumatico from '../../../assets/images/treatment_transtorno_estresse_pos_traumatico.png'

const treatments = [
  { img: treatment_ansiedade, name: 'Ansiedade' },
  { img: treatment_depressao, name: 'Depressão' },
  { img: treatment_problemas_relacionamento, name: 'Relacionamentos' },
  { img: treatment_questoes_sociais, name: 'Questões Sociais' },
  { img: treatment_fobias, name: 'Fobias' },
  { img: treatment_transtornos_alimentares, name: 'Transtornos Alimentares' },
  { img: treatment_transtorno_panico, name: 'Pânico' },
  { img: treatment_transtorno_estresse_pos_traumatico, name: 'Pós-Traumático' },
]

export const Treatments = () => {
  return (
    <S.TreatmentsSection id="especialidades">
      <div className="container">
        <S.Header>
          <S.TreatmentsTitle>Especialidades</S.TreatmentsTitle>
          <p>Áreas de atuação com foco em estratégias personalizadas para o seu bem-estar.</p>
        </S.Header>

        <S.TreatmentsList
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {treatments.map((item, index) => (
            <S.TreatmentItem key={index}>
              <div className="icon-box">
                <img src={item.img} alt={item.name} />
              </div>
              <S.TreatmentName>{item.name}</S.TreatmentName>
            </S.TreatmentItem>
          ))}
        </S.TreatmentsList>
      </div>
    </S.TreatmentsSection>
  )
}

export default Treatments