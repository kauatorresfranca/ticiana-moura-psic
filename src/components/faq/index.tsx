import { useState } from 'react';
import * as S from './styles';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Como agendar uma consulta?',
      answer:
        'Você pode agendar uma consulta diretamente pelo WhatsApp ou telefone. Basta entrar em contato para verificar disponibilidade em Maceió ou Coruripe.',
    },
    {
      question: 'Quais são os métodos de pagamento?',
      answer:
        'Aceitamos cartões de crédito, débito, PIX e dinheiro. Pagamentos podem ser feitos no dia da consulta ou antecipadamente.',
    },
    {
      question: 'Atendemos convênios?',
      answer:
        'Não, não atendemos convênios ou planos de saúde.',
    },
    {
      question: 'Quanto tempo dura uma sessão de terapia?',
      answer:
        'Cada sessão dura em média 50 minutos, permitindo um tempo adequado para explorar suas preocupações e desenvolver estratégias personalizadas.',
    },
    {
      question: 'Qual o custo de uma consulta?',
      answer:
        'O valor varia conforme o tipo de atendimento, mas é acessível e pode ser discutido na primeira conversa. Oferecemos pacotes para sessões recorrentes e opções de pagamento facilitado.',
    },
    {
      question: 'Como funciona a Terapia ?',
      answer:
        'A terapia é um espaço seguro e acolhedor onde você pode explorar suas emoções, pensamentos e comportamentos com o apoio de um profissional qualificado. O objetivo é promover autoconhecimento e desenvolvimento pessoal.',
    },
    {
      question: 'Os atendimentos são confidenciais?',
      answer:
        'Sim, todos os atendimentos seguem o código de ética profissional, garantindo total sigilo e confidencialidade para que você se sinta segura ao compartilhar suas experiências.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <S.FAQ id="Dúvidas">
      <h2>Dúvidas Frequentes</h2>
      <S.FAQList>
        {faqs.map((faq, index) => (
          <S.FAQItem key={index}>
            <S.FAQQuestion
              onClick={() => toggleFAQ(index)}
              className={activeIndex === index ? 'active' : ''}
            >
              {faq.question} <i className="ri-arrow-down-s-line"></i>
            </S.FAQQuestion>
            <S.FAQAnswer
              className={activeIndex === index ? 'active' : 'hidden'}
            >
              {faq.answer}
            </S.FAQAnswer>
          </S.FAQItem>
        ))}
      </S.FAQList>
    </S.FAQ>
  );
};

export default FAQ;
