// Services.jsx
import { motion } from 'framer-motion'
import * as S from './styles'
import { HeartPulse, Brain, Users, Sparkles } from 'lucide-react'
import { colors } from '../../../../styles'

const Services = () => {
  const serviceItems = [
    {
      icon: <Brain size={28} color={colors.primary} />,
      title: "Ansiedade e Estresse",
      description: "Alívio para crises constantes, excesso de preocupações, medos paralisantes e a sensação de esgotamento mental."
    },
    {
      icon: <HeartPulse size={28} color={colors.primary} />,
      title: "Autoestima e Autoconhecimento",
      description: "Desenvolvimento pessoal para superar inseguranças, cobranças excessivas e redescobrir o seu valor e autonomia."
    },
    {
      icon: <Users size={28} color={colors.primary} />,
      title: "Dificuldades nos Relacionamentos",
      description: "Suporte para conflitos familiares, afetivos ou sociais, melhorando a comunicação e a forma de se conectar com o outro."
    },
    {
      icon: <Sparkles size={28} color={colors.primary} />,
      title: "Fases de Transição e Luto",
      description: "Acolhimento profissional para momentos de mudanças drásticas, perdas, instabilidades ou crises existenciais."
    }
  ]

  return (
    <S.ServicesSection id="servicos">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <S.SectionHeader>
            <S.Subtitle>Para Quem É</S.Subtitle>
            <S.Title>Você não precisa enfrentar tudo sozinho(a)</S.Title>
            <S.Description>
              A psicoterapia é um espaço seguro para compreender o que está acontecendo e retomar o controle da sua vida emocional. Veja como podemos caminhar juntos:
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
                <S.CardTitle>{item.title}</S.CardTitle>
                <S.CardDescription>{item.description}</S.CardDescription>
              </S.Card>
            </motion.div>
          ))}
        </S.CardsGrid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
        </motion.div>
      </div>
    </S.ServicesSection>
  )
}

export default Services