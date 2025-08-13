import * as S from './styles';
import ansiedade from '../../assets/images/ansiedade.png';
import preocupacao from '../../assets/images/preocucacao.png';
import estresse from '../../assets/images/estresse.png';
import autoestima from '../../assets/images/autoestima.png';

export const PainPoints = () => {
  return (
    <S.PainPoints>
      <S.PainPointsTitle>Sua mente parece um turbilhão constante, com pensamentos que <span>não param de girar</span>, deixando você exausta e sem fôlego para o dia a dia?</S.PainPointsTitle>
      <S.PainPointsText>
        Se você se sente sobrecarregada por preocupações intermináveis, como se cada pequeno detalhe pudesse desabar tudo ao seu redor, saiba que não está sozinha nessa luta.
        Esses sinais podem indicar um sofrimento mais profundo que afeta sua qualidade de vida:
      </S.PainPointsText>
      <S.SymptomsList>
        <S.SymptomItem>
          <img src={ansiedade} alt="" />
          <S.SymptomText>Ansiedade constante que acelera o coração e rouba o sono</S.SymptomText>
        </S.SymptomItem>
        <S.SymptomItem>
          <img src={preocupacao} alt="" />
          <S.SymptomText>Preocupações excessivas que transformam dias comuns em batalhas internas</S.SymptomText>
        </S.SymptomItem>
        <S.SymptomItem>
          <img src={estresse} alt="" />
          <S.SymptomText>Irritabilidade e estresse que explodem em momentos inesperados</S.SymptomText>
        </S.SymptomItem>
        <S.SymptomItem>
          <img src={autoestima} alt="" />
          <S.SymptomText>Baixa autoestima que faz você duvidar do seu valor e potencial</S.SymptomText>
        </S.SymptomItem>
      </S.SymptomsList>
      <S.CallToAction>
        Esses desafios <span>não precisam</span> definir sua vida. Com apoio profissional, você pode encontrar alívio e equilíbrio. <br /><br />Agende uma consulta e dê o <span>primeiro passo</span> para uma mente mais serena.
      </S.CallToAction>
      <S.Button href='https://wa.me/+5582996727126?text=Oi, quero agendar uma consulta.'>
        Agendar Consulta
      </S.Button>
    </S.PainPoints>
  );
};

export default PainPoints;