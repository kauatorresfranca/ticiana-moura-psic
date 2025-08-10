import * as S from './styles'
import AboutMeImage from '../../assets/images/aboutMeImage.jpg';

const AboutMe = () => {
    return (
        <S.AboutMe>
            <S.AboutMeImage src={AboutMeImage} alt="Sobre Mim" />
            <S.AboutMeContent>
                <S.AboutMeTitle>Ticiana Moura</S.AboutMeTitle>
                <S.AboutMeSubtitle>Psicóloga | CRP 15/1563</S.AboutMeSubtitle>
                <S.AboutMeDescription>
                    Me chamo Ticiana Moura, sou psicóloga com mais de dez anos de experiência atendendo pessoas ao redor mundo e contribuindo para o alívio do sofrimento de cada um deles, juntos trabalhamos o cuidado com a saúde mental e construção de uma vida que valha a pena ser vivida. É possível!
Atuo com a psicologia baseada em evidências, sempre buscando o que vai trazer mais resultados e acolhimento para meus pacientes. A base teórica do meu atendimento é a Terapia Cognitiva Comportamental – TCC – que trabalha os aspectos relativos a forma de pensar e sentir, promovendo mudanças significativas na vida de todos que atendo e transformando a forma que lidam com suas queixas.
Acredito que a maior parte do nosso sofrimento vem da interpretação e da importância que damos ao que nos acontece. Por isso, antes de mais nada precisamos nos conhecer, nos conectar aos nossos valores e objetivos de vida, pois a mudança percorre o caminho do autoconhecimento.
                </S.AboutMeDescription>
                <S.AboutMeTraining>
                    <S.AboutMeTrainingTitle>Formação Acadêmica</S.AboutMeTrainingTitle>
                    <S.AboutMeTrainingList>
                        <li>Graduação em Psicologia - Universidade de São Paulo (USP)</li>
                        <li>Pós-graduação em Terapia Cognitivo-Comportamental - Instituto de Psicologia Aplicada (IPA)</li>
                        <li>Especialização em Terapia de Casal e Família - Centro de Estudos em Terapia Familiar (CETF)</li>
                        <li>Curso de Mindfulness e Redução do Estresse - Universidade de Massachusetts (UMass)</li>
                    </S.AboutMeTrainingList>
                </S.AboutMeTraining>
            </S.AboutMeContent>
        </S.AboutMe>
    );
};

export default AboutMe;