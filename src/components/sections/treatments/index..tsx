import { motion } from 'framer-motion'
import * as S from './styles'
import { Calendar, Video, HeartHandshake, ArrowRight } from 'lucide-react'
import { colors } from '../../../../styles'

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: <Calendar size={28} color={colors.primary} />,
      title: "Contato Inicial via WhatsApp",
      description: "Você clica no botão de agendamento e fala diretamente comigo para esclarecer dúvidas e definir o melhor dia e horário para sua consulta."
    },
    {
      step: "02",
      icon: <Video size={28} color={colors.primary} />,
      title: "A Consulta (Presencial em Maceió ou Online)",
      description: "O atendimento ocorre de forma presencial em consultório acolhedor em Maceió/AL ou por videochamada online, com total sigilo e privacidade."
    },
    {
      step: "03",
      icon: <HeartHandshake size={28} color={colors.primary} />,
      title: "Acompanhamento e Processo Terapêutico",
      description: "Construímos uma relação terapêutica sólida, trabalhando suas demandas para promover autoconhecimento, alívio emocional e qualidade de vida."
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
            <S.Title as="h2">Como Funciona o Atendimento Psicológico</S.Title>
            <S.Description>
              Iniciar a psicoterapia é um passo simples e seguro. Veja como funciona o processo desde o primeiro contato até o acompanhamento contínuo:
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
                <S.StepTitle as="h3">{item.title}</S.StepTitle>
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
              href="https://wa.me/+5582996727126?text=Ol%C3%A1%2C%20Ticiana!%20Gostaria%20de%20agendar%20uma%20consulta%20de%20psicoterapia."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agende sua consulta de psicoterapia via WhatsApp com Ticiana Moura"
            >
              Agende sua consulta com Ticiana Moura
              <ArrowRight size={18} />
            </S.CtaButton>
          </S.ActionContainer>
        </motion.div>
      </div>
    </S.HowSection>
  )
}

export default HowItWorks