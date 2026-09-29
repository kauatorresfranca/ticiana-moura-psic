import { useReducedMotion } from 'framer-motion'
import { Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react'
import * as S from './styles'
import aboutImage from '../../../assets/images/aboutMeImage.png'

const benefits = [
  { icon: Sparkles, title: 'Escuta empática, acolhedora e sem julgamentos' },
  { icon: ShieldCheck, title: 'Sigilo profissional e respeito ao seu tempo' },
  { icon: HeartHandshake, title: 'Processo terapêutico focado na sua autonomia' },
]

const About = () => {
  const reduceMotion = useReducedMotion()
  const offset = reduceMotion ? 0 : 30

  return (
    <S.AboutSection id="sobre-mim" aria-labelledby="about-title">
      <div className="container">
        <S.AboutGrid>
          <S.TextColumn
            initial={{ opacity: 0, x: -offset }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <S.Subtitle>Sobre Mim</S.Subtitle>
            <S.Title id="about-title">Conheça a Psicóloga Ticiana Moura</S.Title>

            <S.Description>
              Sou <strong>Ticiana Moura</strong> (CRP 15/1563), psicóloga clínica com mais de 20
              anos de experiência na área da saúde mental. Meu compromisso é oferecer um espaço
              seguro, ético e verdadeiramente acolhedor para ajudar você a lidar com a ansiedade,
              sobrecarga emocional, autoconhecimento e desafios das relações interpessoais.
            </S.Description>
            <S.Description>
              Com atendimento presencial em <strong>Maceió, Alagoas</strong>, e consultas na
              modalidade <strong>Online</strong>, acompanho adultos e adolescentes na busca por
              maior clareza, equilíbrio emocional e qualidade de vida.
            </S.Description>

            <S.BenefitsList>
              {benefits.map(({ icon: Icon, title }, index) => (
                <S.BenefitItem
                  key={title}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.15 * index }}
                >
                  <S.IconBox>
                    <Icon size={20} aria-hidden="true" />
                  </S.IconBox>
                  <span>{title}</span>
                </S.BenefitItem>
              ))}
            </S.BenefitsList>
          </S.TextColumn>

          <S.ImageColumn
            initial={{ opacity: 0, x: offset }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <S.ImageWrapper>
              <S.ProfileImageContainer>
                <img
                  src={aboutImage}
                  alt="Psicóloga Ticiana Moura - CRP 15/1563 - Atendimento em Maceió e Online"
                  title="Ticiana Moura | Psicóloga Clínica"
                  loading="lazy"
                  decoding="async"
                />
              </S.ProfileImageContainer>

              <S.ExperienceCard>
                <strong>+20</strong>
                <span>anos de experiência em saúde mental</span>
              </S.ExperienceCard>
            </S.ImageWrapper>
          </S.ImageColumn>
        </S.AboutGrid>
      </div>
    </S.AboutSection>
  )
}

export default About