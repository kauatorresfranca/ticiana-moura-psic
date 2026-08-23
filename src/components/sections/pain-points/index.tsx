import { motion } from 'framer-motion'
import * as S from './styles'
import { HeartPulse, Brain, Users, Sparkles } from 'lucide-react'
import { colors } from '../../../../styles'

const Services = () => {
  const serviceItems = [
    {
      icon: <Brain size={28} color={colors.primary} />,
      title: "Tratamento para Ansiedade e Estresse",
      description: "Suporte especializado e alívio para crises de ansiedade, preocupações excessivas, síndrome do pensamento acelerado, fobias e o esgotamento mental do dia a dia."
    },
    {
      icon: <HeartPulse size={28} color={colors.primary} />,
      title: "Autoestima e Autoconhecimento",
      description: "Acompanhamento focado no fortalecimento da autoimagem, superação de cobranças excessivas, desenvolvimento pessoal e reconexão com o seu valor e autonomia."
    },
    {
      icon: <Users size={28} color={colors.primary} />,
      title: "Relacionamentos e Conflitos Afetivos",
      description: "Psicoterapia voltada para a melhoria da comunicação, estabelecimento de limites saudáveis e superação de conflitos familiares, conjugais ou interpessoais."
    },
    {
      icon: <Sparkles size={28} color={colors.primary} />,
      title: "Transições de Vida, Luto e Crises",
      description: "Acolhimento ético e humano para enfrentar perdas, mudanças profundas de carreira ou ciclo de vida, separações e momentos de vulnerabilidade emocional."
    }
  ]

  return (
    <S.ServicesSection id="especialidades">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <S.SectionHeader>
            <S.Subtitle>Especialidades & Atendimento</S.Subtitle>
            <S.Title as="h2">Como a Psicoterapia Pode Ajudar Você</S.Title>
            <S.Description>
              A psicóloga Ticiana Moura oferece atendimento individual focado nas suas necessidades emocionais, com consultas presenciais em Maceió e sessões de terapia online.
            </S.Description>
          </S.SectionHeader>
        </motion.div>

        <S.CardsGrid>
          {serviceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <S.Card>
                <S.IconWrapper>{item.icon}</S.IconWrapper>
                <S.CardTitle as="h3">{item.title}</S.CardTitle>
                <S.CardDescription>{item.description}</S.CardDescription>
              </S.Card>
            </motion.div>
          ))}
        </S.CardsGrid>
      </div>
    </S.ServicesSection>
  )
}

export default Services