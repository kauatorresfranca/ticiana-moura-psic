import * as S from './styles';

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
          <i className="ri-brain-line"></i>
          <S.SymptomText>Ansiedade constante que acelera o coração e rouba o sono</S.SymptomText>
        </S.SymptomItem>
        <S.SymptomItem>
          <i className="ri-emotion-unhappy-line"></i>
          <S.SymptomText>Preocupações excessivas que transformam dias comuns em batalhas internas</S.SymptomText>
        </S.SymptomItem>
        <S.SymptomItem>
          <i className="ri-pulse-line"></i>
          <S.SymptomText>Irritabilidade e estresse que explodem em momentos inesperados</S.SymptomText>
        </S.SymptomItem>
        <S.SymptomItem>
          <i className="ri-user-heart-line"></i>
          <S.SymptomText>Baixa autoestima que faz você duvidar do seu valor e potencial</S.SymptomText>
        </S.SymptomItem>
      </S.SymptomsList>
      <S.CallToAction>
        Esses desafios não precisam definir sua vida. Com apoio profissional, você pode encontrar alívio e equilíbrio. Agende uma consulta e dê o primeiro passo para uma mente mais serena.
      </S.CallToAction>
    </S.PainPoints>
  );
};

export default PainPoints;