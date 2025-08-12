import * as S from './styles'
import treatment_ansiedade from '../../assets/images/treatment_ansiedade.png';
import treatment_depressao from '../../assets/images/treatment_depressao.png';
import treatment_problemas_relacionamento from '../../assets/images/treatment_problema_relacionamento.png';
import treatment_questoes_sociais from '../../assets/images/treatment_questoes_sociais.png';
import treatment_fobias from '../../assets/images/treatment_fobias.png';
import treatment_transtornos_alimentares from '../../assets/images/treatment_transtornos_alimentares.png';
import treatment_transtorno_panico from '../../assets/images/treatment_transtorno_panico.png';
import treatment_transtorno_estresse_pos_traumatico from '../../assets/images/treatment_transtorno_estresse_pos_traumatico.png';

export const Treatments = () => {
    return (
        <S.Treatments>
            <S.TreatmentsTitle>Tratamentos</S.TreatmentsTitle>
            <S.TreatmentsList>
                <S.TreatmentItem>
                    <img src={treatment_ansiedade} alt="Tratamento 1" />
                    <S.TreatmentName>Ansiedade</S.TreatmentName>
                </S.TreatmentItem>
                <S.TreatmentItem>
                    <img src={treatment_depressao} alt="Tratamento 2" />
                    <S.TreatmentName>Depressão</S.TreatmentName>
                </S.TreatmentItem>
                <S.TreatmentItem>
                    <img src={treatment_problemas_relacionamento} alt="Tratamento 3" />
                    <S.TreatmentName>Problemas de Relacionamento</S.TreatmentName>
                </S.TreatmentItem>
                <S.TreatmentItem>
                    <img src={treatment_questoes_sociais} alt="Tratamento 4" />
                    <S.TreatmentName>Questões Sociais</S.TreatmentName>
                </S.TreatmentItem>
                <S.TreatmentItem>
                    <img src={treatment_fobias} alt="Tratamento 4" />
                    <S.TreatmentName>Fobias</S.TreatmentName>
                </S.TreatmentItem>
                <S.TreatmentItem>
                    <img src={treatment_transtornos_alimentares} alt="Tratamento 4" />
                    <S.TreatmentName>Transtornos Alimentares</S.TreatmentName>
                </S.TreatmentItem>
                <S.TreatmentItem>
                    <img src={treatment_transtorno_panico} alt="Tratamento 4" />
                    <S.TreatmentName>Transtorno do Pânico</S.TreatmentName>
                </S.TreatmentItem>
                <S.TreatmentItem>
                    <img src={treatment_transtorno_estresse_pos_traumatico} alt="Tratamento 4" />
                    <S.TreatmentName>Transtorno de Estresse Pós-Traumático</S.TreatmentName>
                </S.TreatmentItem>
            </S.TreatmentsList>
        </S.Treatments>
    );
};