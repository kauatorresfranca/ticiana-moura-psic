import { useReducedMotion } from 'framer-motion'
import { HeartPulse, Brain, Users, Sparkles } from 'lucide-react'
import * as S from './styles'

const serviceItems = [
  {
    icon: Brain,
    title: 'Tratamento para Ansiedade e Estresse',
    description:
      'Suporte especializado e alívio para crises de ansiedade, preocupações excessivas, síndrome do pensamento acelerado, fobias e o esgotamento mental do dia a dia.',
  },
  {
    icon: HeartPulse,
    title: 'Autoestima e Autoconhecimento',
    description:
      'Acompanhamento focado no fortalecimento da autoimagem, superação de cobranças excessivas, desenvolvimento pessoal e reconexão com o seu valor e autonomia.',
  },
  {
    icon: Users,
    title: 'Relacionamentos e Conflitos Afetivos',
    description:
      'Psicoterapia voltada para a melhoria da comunicação, estabelecimento de limites saudáveis e superação de conflitos familiares, conjugais ou interpessoais.',
  },
  {
    icon: Sparkles,
    title: 'Transições de Vida, Luto e Crises',
    description:
      'Acolhimento ético e humano para enfrentar perdas, mudanças profundas de carreira ou ciclo de vida, separações e momentos de vulnerabilidade emocional.',
  },
]

const Services = () => {
  const reduceMotion = useReducedMotion()
  const offset = reduceMotion ? 0 : 24

  return (
    <S.ServicesSection id="especialidades" aria-labelledby="services-title">
      <div className="container">
        <S.SectionHeader
          initial={{ opacity: 0, y: offset }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <S.Subtitle>Especialidades & Atendimento</S.Subtitle>
          <S.Title id="services-title">Como a Psicoterapia Pode Ajudar Você</S.Title>
          <S.Description>
            A psicóloga Ticiana Moura oferece atendimento individual focado nas suas necessidades
            emocionais, com consultas presenciais em Maceió e sessões de terapia online.
          </S.Description>
        </S.SectionHeader>

        <S.CardsGrid>
          {serviceItems.map(({ icon: Icon, title, description }, index) => (
            <S.CardItem
              key={title}
              initial={{ opacity: 0, y: offset + 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: reduceMotion ? 0 : (index % 2) * 0.12,
                ease: 'easeOut',
              }}
            >
              <S.Card>
                <S.IconWrapper>
                  <Icon size={26} aria-hidden="true" />
                </S.IconWrapper>
                <S.CardTitle>{title}</S.CardTitle>
                <S.CardDescription>{description}</S.CardDescription>
              </S.Card>
            </S.CardItem>
          ))}
        </S.CardsGrid>
      </div>
    </S.ServicesSection>
  )
}

export default Services