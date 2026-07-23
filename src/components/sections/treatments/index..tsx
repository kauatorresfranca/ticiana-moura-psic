// HowItWorks.jsx
import { motion } from 'framer-motion'
import * as S from './styles'
import { Calendar, Video, HeartHandshake, ArrowRight } from 'lucide-react'
import { colors } from '../../../../styles'

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: <Calendar size={28} color={colors.primary} />,
      title: "Contato Inicial",
      description: "Você clica no botão de agendamento e conversa diretamente pelo WhatsApp para tirar dúvidas e escolher o melhor horário."
    },
    {
      step: "02",
      icon: <Video size={28} color={colors.primary} />,
      title: "A Sessão",
      description: "O atendimento acontece de forma online ou presencial, em um ambiente totalmente seguro, sigiloso e acolhedor para você."
    },
    {
      step: "03",
      icon: <HeartHandshake size={28} color={colors.primary} />,
      title: "Transformação e Cuidado",
      description: "Sessão após sessão, trabalhamos juntos no seu autoconhecimento para resgatar sua estabilidade e qualidade de vida."
    }
  ]

  return (
    <S.HowSection id="como-funciona">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <S.SectionHeader>
            <S.Subtitle>Como Funciona</S.Subtitle>
            <S.Title>Simples, seguro e humanizado</S.Title>
            <S.Description>
              Dar o primeiro passo pode parecer difícil, mas o processo de iniciar a terapia foi desenhado para ser acolhedor desde o primeiro contato.
            </S.Description>
          </S.SectionHeader>
        </motion.div>

        <S.StepsGrid>
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <S.StepCard>
                <S.StepNumber>{item.step}</S.StepNumber>
                <S.IconWrapper>{item.icon}</S.IconWrapper>
                <S.StepTitle>{item.title}</S.StepTitle>
                <S.StepDescription>{item.description}</S.StepDescription>
              </S.StepCard>
            </motion.div>
          ))}
        </S.StepsGrid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <S.ActionContainer>
            <S.CtaButton 
              href="https://wa.me/+5582996727126?text=Oi, gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
            >
              Começar meu atendimento agora
              <ArrowRight size={18} />
            </S.CtaButton>
          </S.ActionContainer>
        </motion.div>
      </div>
    </S.HowSection>
  )
}

export default HowItWorks