import { motion } from 'framer-motion'
import * as S from './styles'
import HeroImage from '../../../assets/images/heroImage2.jpeg'
import { MessageCircle, ShieldCheck, Video, MapPin } from 'lucide-react'

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
            <S.HeroTitle as="h1">
              Compreenda suas emoções
              <span>e cuide de si com mais leveza.</span>
            </S.HeroTitle>
            
            <S.HeroDescription>
              Acolhimento profissional e psicoterapia para adultos e adolescentes. Espaço seguro para o tratamento de ansiedade, estresse, autoconhecimento e desafios emocionais.
            </S.HeroDescription>
            
            <S.HeroButton 
              href="https://wa.me/+5582996727126?text=Ol%C3%A1%2C%20Ticiana!%20Gostaria%20de%20agendar%20uma%20consulta%20de%20psicoterapia."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agende sua consulta de psicoterapia pelo WhatsApp"
            >
              <MessageCircle size={20} />
              Agende sua primeira sessão
            </S.HeroButton>

            <S.HeroBadges>
              <div className="badge">
                <MapPin size={16} />
                <span>Presencial em Maceió</span>
              </div>
              <div className="badge">
                <Video size={16} />
                <span>Atendimento Online</span>
              </div>
              <div className="badge">
                <ShieldCheck size={16} />
                <span>Sigilo e Acolhimento</span>
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
            <img 
              src={HeroImage} 
              alt="Psicóloga Ticiana Moura - Atendimento psicológico presencial em Maceió e online" 
              title="Ticiana Moura | Psicóloga Clínica"
            />
          </S.ImageContainer>
        </S.HeroContent>
      </div>
    </S.HeroSection>
  )
}

export default Hero