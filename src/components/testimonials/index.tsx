import { useState, useEffect, useRef } from 'react';
import * as S from './styles';
import client1 from '../../assets/images/client1.jpg';
import client2 from '../../assets/images/client2.jpg';
import client3 from '../../assets/images/client3.jpg';

// Define the testimonial data type
interface Testimonial {
  name: string;
  image: string;
  text: string;
  location: string;
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const listRef = useRef<HTMLDivElement>(null);

  // Testimonial data
  const testimonials: Testimonial[] = [
    {
      name: 'Maria Silva',
      image: client2,
      text: 'A Ticiana é uma profissional incrível! Ela me ajudou a ver a vida de uma forma diferente e a lidar com meus problemas de maneira mais saudável.',
      location: 'Maceió, AL',
    },
    {
      name: 'José Carlos',
      image: client1,
      text: 'A Ticiana é uma profissional incrível! Ela me ajudou a ver a vida de uma forma diferente e a lidar com meus problemas de maneira mais saudável.',
      location: 'São Paulo, SP',
    },
    {
      name: 'Carla Oliveira',
      image: client3,
      text: 'A Ticiana é uma profissional incrível! Ela me ajudou a ver a vida de uma forma diferente e a lidar com meus problemas de maneira mais saudável.',
      location: 'Fortaleza, CE',
    },
  ];

  // Handle scroll to update active index
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      // Debounce scroll updates
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollLeft = list.scrollLeft;
        const itemWidth = list.offsetWidth * 0.8; // Account for flex: 0 0 80%
        const newIndex = Math.round(scrollLeft / itemWidth);
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < testimonials.length) {
          setActiveIndex(newIndex);
        }
      }, 100); // Adjust debounce delay as needed
    };

    list.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(scrollTimeout);
      list.removeEventListener('scroll', handleScroll);
    };
  }, [activeIndex, testimonials.length]);

  // Handle dot click
  const scrollToIndex = (index: number) => {
    const list = listRef.current;
    if (!list) return;
    const itemWidth = list.offsetWidth * 0.8; // Account for flex: 0 0 80%
    list.scrollTo({ left: index * itemWidth, behavior: 'smooth' });
    setActiveIndex(index);
  };

  return (
    <S.Testimonials>
      <h2>O que meus pacientes dizem sobre mim:</h2>
      <S.TestimonialsList ref={listRef}>
        {testimonials.map((testimonial, index: number) => (
          <S.TestimonialItem key={index} active={index === activeIndex}>
            <S.TestimonialAuthor>
              <S.TestimonialAuthorImage src={testimonial.image} alt={testimonial.name} />
              <S.TestimonialAuthorContent>
                <S.TestimonialAuthorName>{testimonial.name}</S.TestimonialAuthorName>
                <S.TestimonialAuthorReview>
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                </S.TestimonialAuthorReview>
              </S.TestimonialAuthorContent>
            </S.TestimonialAuthor>
            <S.TestimonialText>{testimonial.text}</S.TestimonialText>
            <S.TestimonialLocation>{testimonial.location}</S.TestimonialLocation>
          </S.TestimonialItem>
        ))}
      </S.TestimonialsList>
      <S.Indicators>
        {testimonials.map((_, index: number) => (
          <S.Indicator
            key={index}
            active={index === activeIndex}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </S.Indicators>
    </S.Testimonials>
  );
};

export default Testimonials;