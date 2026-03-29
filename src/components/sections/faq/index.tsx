import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import * as S from './styles'

const faqs = [
  {
    question: 'Como agendar uma consulta?',
    answer: 'O agendamento é feito de forma simples via WhatsApp. Atendo de forma online (para todo o Brasil) e presencialmente em Maceió e Coruripe. Basta clicar no botão de agendamento para consultar horários disponíveis.'
  },
  {
    question: 'Quanto tempo dura uma sessão?',
    answer: 'Cada sessão tem duração média de 50 minutos. É um tempo dedicado exclusivamente a você, em um ambiente seguro e sigiloso para explorarmos suas questões com calma.'
  },
  {
    question: 'Vocês atendem convênios?',
    answer: 'Os atendimentos são exclusivamente particulares. No entanto, emito recibos que podem ser utilizados para solicitar reembolso junto ao seu plano de saúde, caso ele ofereça essa modalidade.'
  },
  {
    question: 'Os atendimentos são confidenciais?',
    answer: 'Sim, absolutamente. Todo o processo terapêutico é protegido pelo Código de Ética Profissional do Psicólogo, garantindo total sigilo sobre tudo o que for compartilhado em sessão.'
  },
  {
    question: 'Qual o valor da sessão?',
    answer: 'Os valores variam de acordo com a modalidade (individual ou pacotes). Para informações detalhadas sobre valores e formas de pagamento (Pix ou Cartão), entre em contato pelo WhatsApp.'
  },
  {
    question: 'Como funciona a primeira sessão?',
    answer: 'A primeira sessão é um momento de acolhimento. Vamos nos conhecer, entender suas principais queixas e alinhar como a terapia pode te ajudar a alcançar o equilíbrio que você busca.'
  }
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <S.FAQSection id="duvidas">
      <div className="container">
        <S.Title>Dúvidas Frequentes</S.Title>
        <S.Subtitle>Tudo o que você precisa saber para iniciar sua jornada terapêutica.</S.Subtitle>

        <S.FAQList>
          {faqs.map((faq, index) => (
            <S.FAQItem key={index}>
              <S.FAQQuestion 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className={activeIndex === index ? 'active' : ''}
              >
                {faq.question}
                <ChevronDown size={20} className="icon" />
              </S.FAQQuestion>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <S.FAQAnswer
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="answer-content">
                      {faq.answer}
                    </div>
                  </S.FAQAnswer>
                )}
              </AnimatePresence>
            </S.FAQItem>
          ))}
        </S.FAQList>
      </div>
    </S.FAQSection>
  )
}

export default FAQ