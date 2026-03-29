import { motion } from 'framer-motion'
import * as S from './styles'
import client1 from '../../../assets/images/client1.jpg'
import client2 from '../../../assets/images/client2.jpg'
import client3 from '../../../assets/images/client3.jpg'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Maria Silva',
    image: client2,
    text: 'A Ticiana me ajudou a encontrar equilíbrio emocional e a lidar com momentos difíceis de forma muito mais leve. Sou extremamente grata pelo cuidado e atenção que ela oferece.',
    location: 'Maceió, AL',
  },
  {
    name: 'José Carlos',
    image: client1,
    text: 'Com a Ticiana, consegui entender melhor minhas emoções e tomar decisões mais conscientes. Sua escuta atenta e profissionalismo fizeram toda a diferença na minha vida.',
    location: 'São Paulo, SP',
  },
  {
    name: 'Carla Oliveira',
    image: client3,
    text: 'A consulta com a Ticiana foi transformadora. Ela me ajudou a enxergar minhas dificuldades sob outra perspectiva e a desenvolver mais autoconfiança.',
    location: 'Fortaleza, CE',
  },
]

const Testimonials = () => {
  return (
    <S.TestimonialsSection id="depoimentos">
      <div className="container">
        <S.Header>
          <S.Title>O que meus pacientes dizem</S.Title>
          <p>Histórias reais de quem reencontrou o equilíbrio através da terapia.</p>
        </S.Header>

        <S.TestimonialsGrid
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {testimonials.map((item, index) => (
            <S.TestimonialCard key={index}>
              <S.QuoteIcon>
                <Quote size={32} fill="currentColor" />
              </S.QuoteIcon>
              
              <S.TestimonialText>"{item.text}"</S.TestimonialText>

              <S.AuthorArea>
                <S.AuthorImage src={item.image} alt={item.name} />
                <S.AuthorInfo>
                  <S.AuthorName>{item.name}</S.AuthorName>
                  <S.StarsWrapper>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#FFC107" color="#FFC107" />
                    ))}
                  </S.StarsWrapper>
                  <S.Location>{item.location}</S.Location>
                </S.AuthorInfo>
              </S.AuthorArea>
            </S.TestimonialCard>
          ))}
        </S.TestimonialsGrid>
      </div>
    </S.TestimonialsSection>
  )
}

export default Testimonials