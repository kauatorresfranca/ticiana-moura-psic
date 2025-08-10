import * as S from './styles';
import AboutMeImage from '../../assets/images/aboutMeImage.jpg';

const AboutMe = () => {
  return (
    <S.AboutMe id="Sobre Mim">
      <S.AboutMeImage src={AboutMeImage} alt="Sobre Mim" />
      <S.AboutMeContent>
        <S.AboutMeTitle>Ticiana Moura</S.AboutMeTitle>
        <S.AboutMeSubtitle>Psicóloga | CRP 15/1563</S.AboutMeSubtitle>
        <S.AboutMeDescription>
          Sou Ticiana Moura, psicóloga com mais de 20 anos de experiência, dedicada a promover o bem-estar emocional com empatia e escuta ativa. Atuo em Maceió e Coruripe, oferecendo atendimentos presenciais baseados em estratégias personalizadas e evidências, com foco na Terapia Cognitivo-Comportamental (TCC). Minha trajetória inclui coordenação de serviços de saúde mental, atendimentos de urgência e suporte a servidores, sempre buscando inovação e cuidado humano. Acredito que o autoconhecimento é o caminho para superar bloqueios e construir uma vida mais leve.
        </S.AboutMeDescription>
        <S.AboutMeTraining>
          <S.AboutMeTrainingTitle>Formação e Experiência</S.AboutMeTrainingTitle>
          <S.AboutMeTrainingList>
            <li>Graduação em Psicologia - CESMAC (2000)</li>
            <li>Psicóloga na UBS Dr. Hamilton Falcão (2003-2005)</li>
            <li>Psicóloga do SAMU (2004-2008)</li>
            <li>Coordenadora do Núcleo de Atenção à Saúde do Servidor (2008-2012)</li>
            <li>Psicóloga Hospitalar e Coordenadora no Hospital Geral do Estado (2012-atual)</li>
            <li>Consultório Particular (2004-atual)</li>
          </S.AboutMeTrainingList>
        </S.AboutMeTraining>
      </S.AboutMeContent>
    </S.AboutMe>
  );
};

export default AboutMe;
