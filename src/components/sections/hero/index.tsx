import React from 'react'
import { useReducedMotion, type Variants } from 'framer-motion'
import { MessageCircle, ShieldCheck } from 'lucide-react'
import * as S from './styles'
import HeroImage from '../../../assets/images/heroImage2.jpeg'

const WHATSAPP_URL =
  'https://wa.me/+5582996727126?text=' +
  encodeURIComponent('Olá, Ticiana! Vim do site e gostaria de tirar algumas dúvidas sobre os horários.')

export const Hero: React.FC = () => {
  const reduceMotion = useReducedMotion()

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.08,
      },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const reportConversion = (
      window as Window & { gtag_report_conversion?: (url: string) => void }
    ).gtag_report_conversion

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
              Você não precisa <span>enfrentar seus desafios emocionais</span> sem apoio.
            </S.HeroTitle>

            <S.HeroDescription variants={item}>
              Psicoterapia online e presencial em Maceió, com escuta ética e acolhedora
              para quem busca um acompanhamento seguro, sério e livre de julgamentos.
            </S.HeroDescription>

            <S.HeroActions variants={item}>
              <S.HeroButton
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tirar dúvidas e consultar horários pelo WhatsApp"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle size={20} aria-hidden="true" />
                Agende sua primeira sessão
              </S.HeroButton>

              <S.TrustHint>
                <ShieldCheck size={16} aria-hidden="true" />
                Atendimento seguro e sigiloso.
              </S.TrustHint>
            </S.HeroActions>
          </S.HeroText>

          <S.Visual
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 20,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: reduceMotion ? 0 : 0.15,
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
                width="460"
                height="575"
              />
            </S.ImageFrame>
          </S.Visual>
        </S.HeroContent>
      </div>
    </S.HeroSection>
  )
}

export default Hero