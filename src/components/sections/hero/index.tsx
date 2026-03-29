import { motion } from 'framer-motion'
import * as S from './styles'
import HeroImage from '../../../assets/images/heroImage.png'
import { MessageCircle } from 'lucide-react'

export const Hero = () => {
  return (
    <S.HeroSection id="inicio">
      <div className="container">
        <S.HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <S.HeroTitle>
              Redescubra o <span>Equilíbrio Emocional</span> e Viva com Leveza
            </S.HeroTitle>
            <S.HeroDescription>
              Transforme sua relação com as emoções sem sair de casa. Atendimento acolhedor e confidencial.
            </S.HeroDescription>
            <S.HeroButton 
              href="https://wa.me/+5582996727126?text=Oi, gostaria de agendar uma consulta."
              target="_blank"
            >
              <MessageCircle size={20} />
              Agendar Atendimento
            </S.HeroButton>
          </motion.div>

          <S.ImageContainer
            as={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src={HeroImage} alt="Imagem de equilíbrio emocional - Psicologia" />
          </S.ImageContainer>
        </S.HeroContent>
      </div>
    </S.HeroSection>
  )
}

export default Hero