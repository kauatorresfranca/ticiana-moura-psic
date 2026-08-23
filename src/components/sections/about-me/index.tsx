import * as S from './styles'
import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react'
import { colors } from '../../../../styles'
import aboutImage from '../../../assets/images/aboutMeImage.png' 

const About = () => {
  const benefits = [
    {
      icon: <Sparkles size={20} color={colors.primary} />,
      title: "Escuta empática, acolhedora e sem julgamentos"
    },
    {
      icon: <ShieldCheck size={20} color={colors.primary} />,
      title: "Sigilo profissional e respeito ao seu tempo"
    },
    {
      icon: <HeartHandshake size={20} color={colors.primary} />,
      title: "Processo terapêutico focado na sua autonomia"
    }
  ]

  return (
    <S.AboutSection id="sobre-mim">
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
              <S.Title as="h2">Conheça a Psicóloga Ticiana Moura</S.Title>
              <S.Description>
                Sou <strong>Ticiana Moura</strong> (CRP 15/1563), psicóloga clínica com mais de 20 anos de experiência na área da saúde mental. Meu compromisso é oferecer um espaço seguro, ético e verdadeiramente acolhedor para ajudar você a lidar com a ansiedade, sobrecarga emocional, autoconhecimento e desafios das relações interpessoais.
              </S.Description>
              <S.Description>
                Com atendimento presencial em <strong>Maceió, Alagoas</strong>, e consultas na modalidade <strong>Online</strong>, acompanho adultos e adolescentes na busca por maior clareza, equilíbrio emocional e qualidade de vida.
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
                <img 
                  src={aboutImage} 
                  alt="Psicóloga Ticiana Moura - CRP 15/1563 - Atendimento em Maceió e Online" 
                  title="Ticiana Moura | Psicóloga Clínica"
                />
              </S.ProfileImageContainer>
            </S.ImageWrapper>
          </motion.div>
        </S.AboutGrid>
      </div>
    </S.AboutSection>
  )
}

export default About