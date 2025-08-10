import * as S from './styles'
import client1 from '../../assets/images/client1.jpg'
import client2 from '../../assets/images/client2.jpg'
import client3 from '../../assets/images/client3.jpg'

const Testimonials = () => {
    return (
        <S.Testimonials>
            <h2>O que meus pacientes dizem sobre mim:</h2>
            <S.TestimonialsList>
                <S.TestimonialItem>
                <S.TestimonialAuthor>
                    <S.TestimonialAuthorImage src={client2} alt="Cliente 2" />
                    <S.TestimonialAuthorContent>
                        <S.TestimonialAuthorName>Maria Silva</S.TestimonialAuthorName>
                        <S.TestimonialAuthorReview><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i></S.TestimonialAuthorReview>
                    </S.TestimonialAuthorContent>
                </S.TestimonialAuthor>
                <S.TestimonialText>
                    "A Ticiana é uma profissional incrível! Ela me ajudou a ver a vida de uma forma diferente e a lidar com meus problemas de maneira mais saudável."
                </S.TestimonialText>
                <S.TestimonialLocation>
                    Maceió, AL
                </S.TestimonialLocation>
            </S.TestimonialItem>
                <S.TestimonialItem>
                <S.TestimonialAuthor>
                    <S.TestimonialAuthorImage src={client1} alt="Cliente 1" />
                    <S.TestimonialAuthorContent>
                        <S.TestimonialAuthorName>José Carlos</S.TestimonialAuthorName>
                        <S.TestimonialAuthorReview><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i></S.TestimonialAuthorReview>
                    </S.TestimonialAuthorContent>
                </S.TestimonialAuthor>
                <S.TestimonialText>
                    "A Ticiana é uma profissional incrível! Ela me ajudou a ver a vida de uma forma diferente e a lidar com meus problemas de maneira mais saudável."
                </S.TestimonialText>
                <S.TestimonialLocation>
                    São Paulo, SP
                </S.TestimonialLocation>
            </S.TestimonialItem>
            <S.TestimonialItem>
                <S.TestimonialAuthor>
                    <S.TestimonialAuthorImage src={client3} alt="Cliente 3" />
                    <S.TestimonialAuthorContent>
                        <S.TestimonialAuthorName>Carla Oliveira</S.TestimonialAuthorName>
                        <S.TestimonialAuthorReview><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i></S.TestimonialAuthorReview>
                    </S.TestimonialAuthorContent>
                </S.TestimonialAuthor>
                <S.TestimonialText>
                    "A Ticiana é uma profissional incrível! Ela me ajudou a ver a vida de uma forma diferente e a lidar com meus problemas de maneira mais saudável."
                </S.TestimonialText>
                <S.TestimonialLocation>
                    Fortaleza, CE
                </S.TestimonialLocation>
            </S.TestimonialItem>
            </S.TestimonialsList>
        </S.Testimonials>
    );
};

export default Testimonials;