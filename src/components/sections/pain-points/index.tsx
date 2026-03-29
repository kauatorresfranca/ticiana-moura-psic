import { motion } from 'framer-motion'
import * as S from './styles'
import ansiedade from '../../../assets/images/ansiedade.png'
import preocupacao from '../../../assets/images/preocucacao.png'
import estresse from '../../../assets/images/estresse.png'
import autoestima from '../../../assets/images/autoestima.png'

export const PainPoints = () => {
  return (
    <S.PainPointsSection id="especialidades">
      <div className="container">
        <S.ContentWrapper
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <S.Title>
            Sua mente parece um turbilhão constante, com pensamentos que <span>não param de girar</span>?
          </S.Title>
          <S.Subtitle>
            Se você se sente sobrecarregada por preocupações intermináveis, saiba que não está sozinha. Esses sinais indicam um esgotamento que afeta sua qualidade de vida:
          </S.Subtitle>

          <S.SymptomsList>
            <S.SymptomItem>
              <div className="icon-wrapper">
                <img src={ansiedade} alt="Ansiedade" />
              </div>
              <S.SymptomText>Ansiedade constante que rouba o seu sono</S.SymptomText>
            </S.SymptomItem>
            <S.SymptomItem>
              <div className="icon-wrapper">
                <img src={preocupacao} alt="Preocupação" />
              </div>
              <S.SymptomText>Preocupações excessivas com o futuro</S.SymptomText>
            </S.SymptomItem>
            <S.SymptomItem>
              <div className="icon-wrapper">
                <img src={estresse} alt="Estresse" />
              </div>
              <S.SymptomText>Estresse que explode em momentos inesperados</S.SymptomText>
            </S.SymptomItem>
            <S.SymptomItem>
              <div className="icon-wrapper">
                <img src={autoestima} alt="Autoestima" />
              </div>
              <S.SymptomText>Dúvida constante sobre seu próprio valor</S.SymptomText>
            </S.SymptomItem>
          </S.SymptomsList>

          <S.CTAWrapper>
            <p>
              Esses desafios <span>não precisam</span> definir sua vida. <br />
              Com apoio profissional, você pode reencontrar sua serenidade.
            </p>
            <S.Button href='https://wa.me/+5582996727126?text=Oi, quero agendar uma consulta.'>
              QUERO RECUPERAR MEU EQUILÍBRIO
            </S.Button>
          </S.CTAWrapper>
        </S.ContentWrapper>
      </div>
    </S.PainPointsSection>
  )
}

export default PainPoints