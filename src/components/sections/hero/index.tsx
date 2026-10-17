import { useReducedMotion, type Variants } from 'framer-motion'
import { MessageCircle, Video, MapPin } from 'lucide-react'
import * as S from './styles'
import HeroImage from '../../../assets/images/heroImage2.jpeg'

const WHATSAPP_URL =
  'https://wa.me/+5582996727126?text=Ol%C3%A1%2C%20Ticiana!%20Gostaria%20de%20agendar%20uma%20consulta%20de%20psicoterapia.'

export const Hero = () => {
  const reduceMotion = useReducedMotion()

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
      },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    // Declara o tipo esperado para a função global do Google
    const reportConversion = (window as Window & { gtag_report_conversion?: (url: string) => void }).gtag_report_conversion

    if (typeof reportConversion === 'function') {
      reportConversion(WHATSAPP_URL)
    } else {
      window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <S.HeroSection id="inicio" aria-labelledby="hero-title">
      <div className="container">
        <S.HeroContent>
          <S.HeroText variants={container} initial="hidden" animate="show">
            <S.Eyebrow variants={item}>
              Ticiana Moura · Psicóloga Clínica
            </S.Eyebrow>

            <S.HeroTitle id="hero-title" variants={item}>
              Compreenda suas emoções
              <span>e cuide de si com mais leveza.</span>
            </S.HeroTitle>

            <S.HeroDescription variants={item}>
              Acolhimento profissional e psicoterapia para adultos e adolescentes.
              Espaço seguro para o tratamento de ansiedade, estresse,
              autoconhecimento e desafios emocionais.
            </S.HeroDescription>

            <S.HeroActions variants={item}>
              <S.HeroButton
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agende sua consulta de psicoterapia pelo WhatsApp"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle size={20} aria-hidden="true" />
                Agende sua primeira sessão
              </S.HeroButton>
            </S.HeroActions>

            <S.HeroBadges variants={item}>
              <li>
                <MapPin size={16} aria-hidden="true" />
                Presencial em Maceió
              </li>
              <li>
                <Video size={16} aria-hidden="true" />
                Atendimento Online
              </li>
            </S.HeroBadges>
          </S.HeroText>

          <S.Visual
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 40,
              scale: reduceMotion ? 1 : 0.96,
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: reduceMotion ? 0 : 0.3,
              ease: 'easeOut',
            }}
          >
            <S.ImageFrame>
              <img
                src={HeroImage}
                alt="Psicóloga Ticiana Moura - Atendimento psicológico presencial em Maceió e online"
                title="Ticiana Moura | Psicóloga Clínica"
                fetchPriority="high"
                decoding="async"
              />
            </S.ImageFrame>
          </S.Visual>
        </S.HeroContent>
      </div>
    </S.HeroSection>
  )
}

export default Hero