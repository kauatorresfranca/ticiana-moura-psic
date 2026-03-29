import { motion } from 'framer-motion'
import * as S from './styles'
import AboutMeImage from '../../../assets/images/aboutMeImage.jpg'
import { Award, CheckCircle } from 'lucide-react'
import { colors } from '../../../../styles'

const AboutMe = () => {
  const trainingItems = [
    "Graduação em Psicologia - CESMAC (2000)",
    "Psicóloga na UBS Dr. Hamilton Falcão (2003-2005)",
    "Psicóloga do SAMU (2004-2008)",
    "Coordenadora do Núcleo de Atenção à Saúde do Servidor (2008-2012)",
    "Psicóloga Hospitalar e Coordenadora no HGE (2012-atual)",
    "Consultório Particular (2004-atual)"
  ]

  return (
    <S.AboutSection id="sobre">
      <div className="container">
        <S.Grid
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <S.ImageContainer>
            <img src={AboutMeImage} alt="Ticiana Moura - Psicóloga" />
            <S.ExperienceBadge>
              <Award size={24} />
              <span>+20 Anos de Experiência</span>
            </S.ExperienceBadge>
          </S.ImageContainer>

          <S.Content>
            <S.HeaderInfo>
              <S.Title>Ticiana Moura</S.Title>
              <S.Subtitle>Psicóloga Clínica | CRP 15/1563</S.Subtitle>
            </S.HeaderInfo>

            <S.Description>
              Com mais de duas décadas de atuação, dedico minha trajetória a promover o bem-estar emocional através da <strong>Gestalt Terapia</strong>. Minha experiência abrange desde a coordenação de saúde mental em hospitais de urgência até o acolhimento individual em consultório. 
              <br /><br />
              Acredito em um atendimento humanizado e baseado em evidências, onde o autoconhecimento é o caminho para superar bloqueios e construir uma vida mais leve.
            </S.Description>

            <S.TrainingArea>
              <S.TrainingTitle>Trajetória Profissional</S.TrainingTitle>
              <S.TrainingList>
                {trainingItems.map((item, index) => (
                  <li key={index}>
                    <CheckCircle size={16} color={colors.primary} />
                    {item}
                  </li>
                ))}
              </S.TrainingList>
            </S.TrainingArea>
          </S.Content>
        </S.Grid>
      </div>
    </S.AboutSection>
  )
}

export default AboutMe