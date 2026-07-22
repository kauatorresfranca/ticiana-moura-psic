// Hero.jsx
import { motion } from 'framer-motion'
import * as S from './styles'
import HeroImage from '../../../assets/images/heroImage2.jpeg'
import { MessageCircle, ShieldCheck, Video } from 'lucide-react'

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
              Cuidado que acolhe. <span>Terapia que transforma.</span>
            </S.HeroTitle>
            <S.HeroDescription>
              Psicoterapia para adultos e adolescentes que enfrentam ansiedade, estresse, dificuldades nos relacionamentos e outros desafios da vida.
            </S.HeroDescription>
            
            <S.HeroButton 
              href="https://wa.me/+5582996727126?text=Oi, gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
              Agende sua primeira sessão
            </S.HeroButton>

            <S.HeroBadges>
              <div className="badge">
                <Video size={16} />
                <span>Online & Presencial</span>
              </div>
              <div className="badge">
                <ShieldCheck size={16} />
                <span>Ambiente Confidencial</span>
              </div>
            </S.HeroBadges>
          </motion.div>

          <S.ImageContainer
            as={motion.div}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
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