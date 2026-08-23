import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as S from './styles'
import { ChevronDown } from 'lucide-react'
import { colors } from '../../../../styles'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Onde é realizado o atendimento psicológico presencial?",
      answer: "O atendimento presencial com a Psicóloga Ticiana Moura é realizado em consultório estruturado na cidade de Maceió, Alagoas, oferecendo um ambiente acolhedor, privativo e de fácil acesso."
    },
    {
      question: "Como funciona a terapia online?",
      answer: "A psicoterapia online é realizada via videochamada em plataforma segura e privativa. Ela oferece a mesma eficácia, ética e sigilo do atendimento presencial em Maceió, permitindo que você faça as sessões no conforto da sua casa ou de qualquer lugar."
    },
    {
      question: "Qual é a duração e a frequência das consultas?",
      answer: "Cada sessão possui duração média de 50 minutos. Geralmente, as sessões ocorrem semanalmente para garantir a continuidade do processo terapêutico e o alinhamento com os objetivos do paciente."
    },
    {
      question: "Como faço para agendar uma consulta com Ticiana Moura?",
      answer: "O agendamento é simples e rápido. Basta clicar no botão de WhatsApp do site para falar diretamente sobre horários disponíveis para atendimento presencial em Maceió ou online."
    },
    {
      question: "A psicoterapia é indicada para quais situações?",
      answer: "A psicoterapia é indicada para adultos e adolescentes que buscam auxílio no tratamento da ansiedade, estresse, depressão, autoconhecimento, transições de vida e melhoria dos relacionamentos interpessoais."
    },
    {
      question: "O conteúdo conversado nas sessões é totalmente sigiloso?",
      answer: "Sim. O sigilo profissional é rigorosamente mantido de acordo com o Código de Ética Profissional do Psicólogo, garantindo privacidade e confidencialidade em todos os atendimentos."
    }
  ]

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  // FAQ Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <S.FaqSection id="duvidas">
      {/* Injeção de Schema FAQPage para rich snippets do Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <S.SectionHeader>
            <S.Subtitle>Dúvidas Frequentes</S.Subtitle>
            <S.Title as="h2">Dúvidas Frequentes sobre o Atendimento Psicológico</S.Title>
            <S.Description>
              Reunimos as principais informações sobre as consultas presenciais em Maceió e online para você iniciar seu acompanhamento com tranquilidade.
            </S.Description>
          </S.SectionHeader>
        </motion.div>

        <S.AccordionContainer>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <S.AccordionItem $isOpen={activeIndex === index}>
                <S.AccordionHeader 
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-header-${index}`}
                >
                  <S.QuestionText>{faq.question}</S.QuestionText>
                  <S.IconWrapper $isOpen={activeIndex === index}>
                    <ChevronDown size={20} color={colors.primary} />
                  </S.IconWrapper>
                </S.AccordionHeader>
                <AnimatePresence>
                  {activeIndex === index && (
                    <S.AccordionBody
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-header-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <S.AnswerText>{faq.answer}</S.AnswerText>
                    </S.AccordionBody>
                  )}
                </AnimatePresence>
              </S.AccordionItem>
            </motion.div>
          ))}
        </S.AccordionContainer>
      </div>
    </S.FaqSection>
  )
}

export default FAQ