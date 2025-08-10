import { useState } from 'react';
import * as S from './styles'

const FAQ = () => {

    const [faq1, setFaq1] = useState(false);
    const [faq2, setFaq2] = useState(false);
    const [faq3, setFaq3] = useState(false);
    
    return (
        <S.FAQ>
            <h2>Dúvidas Frequentes</h2>
            <S.FAQList>
                <S.FAQItem>
                    <S.FAQQuestion onClick={() => setFaq1(!faq1)} className={faq1 ? 'active' : ''}>Como agendar uma consulta? <i className="ri-arrow-down-wide-line"></i></S.FAQQuestion>
                    <S.FAQAnswer className={faq1 ? 'active' : 'hidden'}>Você pode agendar uma consulta através do nosso site ou pelo telefone.</S.FAQAnswer>
                </S.FAQItem>
                <S.FAQItem>
                    <S.FAQQuestion onClick={() => setFaq2(!faq2)} className={faq2 ? 'active' : ''}>Quais são os métodos de pagamento? <i className="ri-arrow-down-wide-line"></i></S.FAQQuestion>
                    <S.FAQAnswer className={faq2 ? 'active' : 'hidden'}>Aceitamos cartões de crédito, débito e pagamentos via PIX.</S.FAQAnswer>
                </S.FAQItem>
                <S.FAQItem>
                    <S.FAQQuestion onClick={() => setFaq3(!faq3)} className={faq3 ? 'active' : ''}>Atendemos convênios? <i className="ri-arrow-down-wide-line"></i></S.FAQQuestion>
                    <S.FAQAnswer className={faq3 ? 'active' : 'hidden'}>Sim, atendemos diversos convênios. Consulte-nos para mais informações.</S.FAQAnswer>
                </S.FAQItem>
            </S.FAQList>
        </S.FAQ>
    );
};

export default FAQ;