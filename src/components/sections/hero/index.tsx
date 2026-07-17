import { motion } from 'framer-motion'
import * as S from './styles'
import HeroImage from '../../../assets/images/heroImage2.jpeg'
import { MessageCircle, ShieldCheck, Video, ShieldAlert } from 'lucide-react'

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
              Um espaço seguro para cuidar da sua <span>saúde emocional</span>.
            </S.HeroTitle>
            <S.HeroDescription>
              Ajudo você a enfrentar a ansiedade, o estresse e os desafios da vida com mais equilíbrio e qualidade de vida.
            </S.HeroDescription>
            
            <S.HeroButton 
              href="https://wa.me/+5582996727126?text=Oi, gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
              Agende sua primeira sessão
            </S.HeroButton>

            {/* Selos de conversão e segurança logo abaixo do CTA */}
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