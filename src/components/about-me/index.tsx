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
          Sou Ticiana Moura, psicóloga com mais de 20 anos de experiência, comprometida em promover o bem-estar emocional por meio de empatia e escuta ativa. Atuo presencialmente em Maceió e Coruripe, oferecendo atendimentos baseados em estratégias personalizadas e fundamentados em evidências, com enfoque na Gestalt Terapia. Minha trajetória abrange atendimento ambulatorial em atenção básica, suporte hospitalar, coordenação de saúde mental em hospital de urgência e emergência, atendimento a servidores estaduais da saúde e prática clínica em consultório particular, sempre priorizando inovação e cuidado humano. Acredito que o autoconhecimento é a chave para superar bloqueios e construir uma vida mais leve e equilibrada.
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
