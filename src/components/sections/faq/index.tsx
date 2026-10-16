
import { useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { ChevronDown, MessageCircle } from 'lucide-react'
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

const faqs = [
  {
    question: 'Onde é realizado o atendimento psicológico presencial?',
    answer:
      'O atendimento presencial com a Psicóloga Ticiana Moura é realizado em consultório estruturado na cidade de Maceió, Alagoas, oferecendo um ambiente acolhedor, privativo e de fácil acesso.',
  },
  {
    question: 'Como funciona a terapia online?',
    answer:
      'A psicoterapia online é realizada via videochamada em plataforma segura e privativa. Ela oferece a mesma eficácia, ética e sigilo do atendimento presencial em Maceió, permitindo que você faça as sessões no conforto da sua casa ou de qualquer lugar.',
  },
  {
    question: 'Qual é a duração e a frequência das consultas?',
    answer:
      'Cada sessão possui duração média de 50 minutos. Geralmente, as sessões ocorrem semanalmente para garantir a continuidade do processo terapêutico e o alinhamento com os objetivos do paciente.',
  },
  {
    question: 'Como faço para agendar uma consulta com Ticiana Moura?',
    answer:
      'O agendamento é simples e rápido. Basta clicar no botão de WhatsApp do site para falar diretamente sobre horários disponíveis para atendimento presencial em Maceió ou online.',
  },
  {
    question: 'A psicoterapia é indicada para quais situações?',
    answer:
      'A psicoterapia é indicada para adultos e adolescentes que buscam auxílio no tratamento da ansiedade, estresse, depressão, autoconhecimento, transições de vida e melhoria dos relacionamentos interpessoais.',
  },
  {
    question: 'O conteúdo conversado nas sessões é totalmente sigiloso?',
    answer:
      'Sim. O sigilo profissional é rigorosamente mantido de acordo com o Código de Ética Profissional do Psicólogo, garantindo privacidade e confidencialidade em todos os atendimentos.',
  },
]

const faqSchemaJson = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}).replace(/</g, '\\u003c')

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const reduceMotion = useReducedMotion()
  const offset = reduceMotion ? 0 : 20

  const toggle = (index: number) =>
    setActiveIndex((current) => (current === index ? null : index))

  return (
    <S.FaqSection id="duvidas" aria-labelledby="faq-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchemaJson }}
      />

      <div className="container">
        <S.FaqGrid>
          <S.SectionHeader
            initial={{ opacity: 0, y: offset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <S.Subtitle>Dúvidas Frequentes</S.Subtitle>
            <S.Title id="faq-title">
              Dúvidas Frequentes sobre o Atendimento Psicológico
            </S.Title>
            <S.Description>
              Reunimos as principais informações sobre as consultas presenciais
              em Maceió e online para você iniciar seu acompanhamento com
              tranquilidade.
            </S.Description>
          </S.SectionHeader>

          <S.AccordionList>
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index

              return (
                <S.AccordionItem
                  key={faq.question}
                  $isOpen={isOpen}
                  initial={{ opacity: 0, y: offset }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.45,
                    delay: reduceMotion ? 0 : index * 0.06,
                    ease: 'easeOut',
                  }}
                >
                  <S.QuestionHeading>
                    <S.AccordionTrigger
                      type="button"
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-header-${index}`}
                    >
                      <S.QuestionText>{faq.question}</S.QuestionText>
                      <S.IconWrapper
                        $isOpen={isOpen}
                        aria-hidden="true"
                      >
                        <ChevronDown size={20} />
                      </S.IconWrapper>
                    </S.AccordionTrigger>
                  </S.QuestionHeading>

                  <S.AccordionBody
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-header-${index}`}
                    $isOpen={isOpen}
                  >
                    <div>
                      <S.AnswerText>{faq.answer}</S.AnswerText>
                    </div>
                  </S.AccordionBody>
                </S.AccordionItem>
              )
            })}
          </S.AccordionList>

          <S.Help
            initial={{ opacity: 0, y: offset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <S.HelpText>
              Ainda ficou com alguma dúvida? Fale diretamente comigo.
            </S.HelpText>

            <S.CtaButton
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppConversion}
              aria-label="Tirar dúvidas e agendar consulta com Ticiana Moura pelo WhatsApp"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Falar pelo WhatsApp
            </S.CtaButton>
          </S.Help>
        </S.FaqGrid>
      </div>
    </S.FaqSection>
  )
}

export default FAQ
