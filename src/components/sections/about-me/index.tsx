// About.jsx
import * as S from './styles'
import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react'
import { colors } from '../../../../styles'
import aboutImage from '../../../assets/images/aboutMeImage.png' 

const About = () => {
  const benefits = [
    {
      icon: <Sparkles size={20} color={colors.primary} />,
      title: "Escuta empática e sem julgamentos"
    },
    {
      icon: <ShieldCheck size={20} color={colors.primary} />,
      title: "Sigilo profissional absoluto"
    },
    {
      icon: <HeartHandshake size={20} color={colors.primary} />,
      title: "Estratégias práticas para o dia a dia"
    }
  ]

  return (
    <S.AboutSection id="sobre">
      <div className="container">
        <S.AboutGrid>
          <motion.div
            className="text-column"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <S.ContentWrapper>
              <S.Subtitle>Sobre Mim</S.Subtitle>
              <S.Title>Por que iniciar sua jornada terapêutica comigo?</S.Title>
              <S.Description>
                Olá! Sou a Dra. Ticiana Moura Torres. Meu compromisso é oferecer um suporte acolhedor e humanizado, ajudando você a contornar a ansiedade, a sobrecarga emocional e a retomar o controle da sua vida com clareza.
              </S.Description>

              <S.BenefitsList>
                {benefits.map((item, index) => (
                  <S.BenefitItem key={index}>
                    <S.IconBox>{item.icon}</S.IconBox>
                    <span>{item.title}</span>
                  </S.BenefitItem>
                ))}
              </S.BenefitsList>
            </S.ContentWrapper>
          </motion.div>

          <motion.div
            className="image-column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <S.ImageWrapper>
              <S.ProfileImageContainer>
                <img src={aboutImage} alt="Dra. Ticiana Moura Torres" />
              </S.ProfileImageContainer>
            </S.ImageWrapper>
          </motion.div>
        </S.AboutGrid>
      </div>
    </S.AboutSection>
  )
}

export default About