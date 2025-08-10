import * as S from './styles'

const Footer = () => {
    const ano = new Date().getFullYear()
  return (
    <S.Footer>
      <S.FooterContent>
        <S.FooterText>© {ano} Ticiana Moura. Todos os direitos reservados.</S.FooterText>
      </S.FooterContent>
    </S.Footer>
  )
}

export default Footer