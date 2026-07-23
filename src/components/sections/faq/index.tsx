// FAQ.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as S from './styles'
import { ChevronDown } from 'lucide-react'
import { colors } from '../../../../styles'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Como funciona a terapia online?",
      answer: "A terapia online acontece por vídeo chamada (via WhatsApp ou plataforma de sua preferência) com a mesma eficácia, segurança e sigilo do atendimento presencial. Você pode realizar de onde estiver, com total privacidade e conforto."
    },
    {
      question: "Qual é a duração e a frequência das sessões?",
      answer: "Cada sessão tem duração média de 50 minutos. Inicialmente, recomendo encontros semanais para que possamos construir um vínculo terapêutico sólido e avançar de forma consistente no seu processo."
    },
    {
      question: "Como faço para agendar a primeira consulta?",
      answer: "O agendamento é simples e direto. Basta clicar em qualquer um dos botões de contato para falar diretamente pelo WhatsApp. Lá, conversaremos sobre horários disponíveis e tiraremos qualquer dúvida inicial."
    },
    {
      question: "A terapia é indicada para quais casos?",
      answer: "O atendimento é focado em adolescentes e adultos que buscam auxílio para lidar com ansiedade, estresse, crises emocionais, autoestima, conflitos de relacionamento ou momentos de transição e luto."
    },
    {
      question: "O conteúdo das sessões é totalmente sigiloso?",
      answer: "Sim, absolutamente. O sigilo profissional é um dever ético fundamental da psicologia, garantindo que tudo o que for conversado em sessão permaneça estritamente entre nós."
    }
  ]

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <S.FaqSection id="faq">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <S.SectionHeader>
            <S.Subtitle>Dúvidas Frequentes</S.Subtitle>
            <S.Title>Tudo o que você precisa saber</S.Title>
            <S.Description>
              Reunimos as principais dúvidas para que você se sinta totalmente seguro(a) antes de dar o primeiro passo rumo ao seu bem-estar.
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
                <S.AccordionHeader onClick={() => toggleAccordion(index)}>
                  <S.QuestionText>{faq.question}</S.QuestionText>
                  <S.IconWrapper $isOpen={activeIndex === index}>
                    <ChevronDown size={20} color={colors.primary} />
                  </S.IconWrapper>
                </S.AccordionHeader>
                <AnimatePresence>
                  {activeIndex === index && (
                    <S.AccordionBody
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
        </motion.div>
      </div>
    </S.FaqSection>
  )
}

export default FAQ