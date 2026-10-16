
import { useReducedMotion } from 'framer-motion'
import { Calendar, Video, HeartHandshake, ArrowRight } from 'lucide-react'
import * as S from './styles'

const WHATSAPP_URL =
  'https://wa.me/+5582996727126?text=Ol%C3%A1%2C%20Ticiana!%20Gostaria%20de%20agendar%20uma%20consulta%20de%20psicoterapia.'

const GOOGLE_ADS_CONVERSION_ID =
  'AW-18509326460/TrlBCJibn58dEPzQ9_lE'

const trackWhatsAppConversion = () => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_CONVERSION_ID,
    })
  }
}

const steps = [
  {
    step: '01',
    icon: Calendar,
    title: 'Contato Inicial via WhatsApp',
    description:
      'Você clica no botão de agendamento e fala diretamente comigo para esclarecer dúvidas e definir o melhor dia e horário para sua consulta.',
  },
  {
    step: '02',
    icon: Video,
    title: 'A Consulta (Presencial em Maceió ou Online)',
    description:
      'O atendimento ocorre de forma presencial em consultório acolhedor em Maceió/AL ou por videochamada online, com total sigilo e privacidade.',
  },
  {
    step: '03',
    icon: HeartHandshake,
    title: 'Acompanhamento e Processo Terapêutico',
    description:
      'Construímos uma relação terapêutica sólida, trabalhando suas demandas para promover autoconhecimento, alívio emocional e qualidade de vida.',
  },
]

const HowItWorks = () => {
  const reduceMotion = useReducedMotion()
  const offset = reduceMotion ? 0 : 24

  return (
    <S.HowSection id="como-funciona" aria-labelledby="how-title">
      <div className="container">
        <S.SectionHeader
          initial={{ opacity: 0, y: offset }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <S.Subtitle>Como Funciona</S.Subtitle>
          <S.Title id="how-title">
            Como Funciona o Atendimento Psicológico
          </S.Title>
          <S.Description>
            Iniciar a psicoterapia é um passo simples e seguro. Veja como funciona
            o processo desde o primeiro contato até o acompanhamento contínuo:
          </S.Description>
        </S.SectionHeader>

        <S.StepsGrid>
          {steps.map(({ step, icon: Icon, title, description }, index) => (
            <S.StepItem
              key={step}
              initial={{ opacity: 0, y: offset + 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: reduceMotion ? 0 : index * 0.15,
                ease: 'easeOut',
              }}
            >
              <S.StepCard>
                <S.StepNumber aria-hidden="true">{step}</S.StepNumber>
                <S.IconWrapper>
                  <Icon size={26} aria-hidden="true" />
                </S.IconWrapper>
                <S.StepTitle>{title}</S.StepTitle>
                <S.StepDescription>{description}</S.StepDescription>
              </S.StepCard>
            </S.StepItem>
          ))}
        </S.StepsGrid>

        <S.ActionContainer
          initial={{ opacity: 0, y: offset }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: reduceMotion ? 0 : 0.3,
            ease: 'easeOut',
          }}
        >
          <S.CtaButton
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsAppConversion}
            aria-label="Agende sua consulta de psicoterapia via WhatsApp com Ticiana Moura"
          >
            Agende sua consulta com Ticiana Moura
            <ArrowRight size={18} aria-hidden="true" />
          </S.CtaButton>
        </S.ActionContainer>
      </div>
    </S.HowSection>
  )
}

export default HowItWorks
