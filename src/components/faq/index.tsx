import { useState } from 'react';
import * as S from './styles';

const FAQ = () => {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  const [faq5, setFaq5] = useState(false);
  const [faq6, setFaq6] = useState(false);
  const [faq7, setFaq7] = useState(false);

  return (
    <S.FAQ id="Dúvidas">
      <h2>Dúvidas Frequentes</h2>
      <S.FAQList>
        <S.FAQItem>
          <S.FAQQuestion onClick={() => setFaq1(!faq1)} className={faq1 ? 'active' : ''}>
            Como agendar uma consulta? <i className="ri-arrow-down-s-line"></i>
          </S.FAQQuestion>
          <S.FAQAnswer className={faq1 ? 'active' : 'hidden'}>
            Você pode agendar uma consulta diretamente pelo WhatsApp, telefone ou através do formulário no site. Basta entrar em contato para verificar disponibilidade em Maceió ou Coruripe.
          </S.FAQAnswer>
        </S.FAQItem>
        <S.FAQItem>
          <S.FAQQuestion onClick={() => setFaq2(!faq2)} className={faq2 ? 'active' : ''}>
            Quais são os métodos de pagamento? <i className="ri-arrow-down-s-line"></i>
          </S.FAQQuestion>
          <S.FAQAnswer className={faq2 ? 'active' : 'hidden'}>
            Aceitamos cartões de crédito, débito, PIX e dinheiro. Pagamentos podem ser feitos no dia da consulta ou antecipadamente.
          </S.FAQAnswer>
        </S.FAQItem>
        <S.FAQItem>
          <S.FAQQuestion onClick={() => setFaq3(!faq3)} className={faq3 ? 'active' : ''}>
            Atendemos convênios? <i className="ri-arrow-down-s-line"></i>
          </S.FAQQuestion>
          <S.FAQAnswer className={faq3 ? 'active' : 'hidden'}>
            Sim, atendemos diversos convênios. Entre em contato para verificar se o seu plano é aceito e obter mais detalhes sobre reembolso.
          </S.FAQAnswer>
        </S.FAQItem>
        <S.FAQItem>
          <S.FAQQuestion onClick={() => setFaq4(!faq4)} className={faq4 ? 'active' : ''}>
            Quanto tempo dura uma sessão de terapia? <i className="ri-arrow-down-s-line"></i>
          </S.FAQQuestion>
          <S.FAQAnswer className={faq4 ? 'active' : 'hidden'}>
            Cada sessão dura em média 50 minutos, permitindo um tempo adequado para explorar suas preocupações e desenvolver estratégias personalizadas.
          </S.FAQAnswer>
        </S.FAQItem>
        <S.FAQItem>
          <S.FAQQuestion onClick={() => setFaq5(!faq5)} className={faq5 ? 'active' : ''}>
            Qual o custo de uma consulta? <i className="ri-arrow-down-s-line"></i>
          </S.FAQQuestion>
          <S.FAQAnswer className={faq5 ? 'active' : 'hidden'}>
            O valor varia conforme o tipo de atendimento, mas é acessível e pode ser discutido na primeira conversa. Oferecemos pacotes para sessões recorrentes e opções de pagamento facilitado.
          </S.FAQAnswer>
        </S.FAQItem>
        <S.FAQItem>
          <S.FAQQuestion onClick={() => setFaq6(!faq6)} className={faq6 ? 'active' : ''}>
            Como funciona a Terapia Cognitivo-Comportamental (TCC)? <i className="ri-arrow-down-s-line"></i>
          </S.FAQQuestion>
          <S.FAQAnswer className={faq6 ? 'active' : 'hidden'}>
            A TCC foca em identificar padrões de pensamento negativos e substituí-los por abordagens mais saudáveis, promovendo mudanças reais no comportamento e nas emoções, com resultados comprovados.
          </S.FAQAnswer>
        </S.FAQItem>
        <S.FAQItem>
          <S.FAQQuestion onClick={() => setFaq7(!faq7)} className={faq7 ? 'active' : ''}>
            Os atendimentos são confidenciais? <i className="ri-arrow-down-s-line"></i>
          </S.FAQQuestion>
          <S.FAQAnswer className={faq7 ? 'active' : 'hidden'}>
            Sim, todos os atendimentos seguem o código de ética profissional, garantindo total sigilo e confidencialidade para que você se sinta segura ao compartilhar suas experiências.
          </S.FAQAnswer>
        </S.FAQItem>
      </S.FAQList>
    </S.FAQ>
  );
};

export default FAQ;