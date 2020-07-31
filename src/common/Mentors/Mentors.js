import React, { useState } from 'react';
import ImageOne from 'assets/mentors_section_image_1_killer_mike.png';
import ImageTwo from 'assets/mentors_section_image_2_timbaland.png';
import ImageThree from 'assets/mentors_section_image_3_chance_the_rapper.png';
import MentorCard from 'components/MentorCard/MentorCard';
import { MentorsStyle, MentorsContainer, TextHeading } from './Mentors.style';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

// Import Swiper styles
SwiperCore.use([Virtual, Navigation, Pagination, Scrollbar, A11y]);

const cardData = [
  {
    name: 'Killer One',
    imgSrc: ImageOne,
    cardText:
      "Timothy Zachary Mosley, known professionally as Timbaland, is an American record producer, rapper, singer, songwriter, and DJ.  Timbaland's first full credit production work was in 1996 on Ginuwine...the Bachelor for R&B singer Ginuwine",
  },
  {
    name: 'Timberland',
    imgSrc: ImageTwo,
    cardText:
      "Timothy Zachary Mosley, known professionally as Timbaland, is an American record producer, rapper, singer, songwriter, and DJ.  Timbaland's first full credit production work was in 1996 on Ginuwine...the Bachelor for R&B singer Ginuwine",
  },
  {
    name: 'Chance the rapper',
    imgSrc: ImageThree,
    cardText:
      "Timothy Zachary Mosley, known professionally as Timbaland, is an American record producer, rapper, singer, songwriter, and DJ.  Timbaland's first full credit production work was in 1996 on Ginuwine...the Bachelor for R&B singer Ginuwine",
  },
];

export default function Mentors() {
  const [currentMentor, setCurrentMentor] = useState(cardData[1]);
  const [mentors, setMentors] = useState(cardData);

  function nextMentor(index) {
    console.log(index);
    if (mentors.length - 1 === index) {
      return;
    }

    const updatedMentor = [...mentors];
    updatedMentor[index + 1].current = true;

    setCurrentMentor(updatedMentor[index + 1]);
  }

  function prevMentor(index) {
    console.log(index);

    if (index < 1) {
      return;
    }
    const updatedMentor = [...mentors];
    // updatedMentor[index - 1].current = true;
    // setCurrentMentorIndex((prevState) => prevState - 1);
    setCurrentMentor(updatedMentor[index - 1]);
  }

  console.log(currentMentor);

  const slides = Array.from({ length: 1000 }).map((el, index) => `Slide ${index + 1}`);

  return (
    <MentorsContainer>
      <TextHeading>Our Mentors</TextHeading>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        spaceBetween={50}
        slidesPerView={3}
        virtual
      >
        <MentorsStyle id="team">
          {slides.map((slideContent) => {
            return <SwiperSlide key={slideContent}>{slideContent}</SwiperSlide>;
          })}
          {/* {mentors.map((card, index) => (
            <SwiperSlide key={index}>
              <MentorCard prev={() => prevMentor(index)} index={index} currentMentor={currentMentor} next={() => nextMentor(index)} imgSrc={card.imgSrc} cardText={card.cardText} name={card.name} />
            </SwiperSlide>
          ))} */}
        </MentorsStyle>
      </Swiper>
    </MentorsContainer>
  );
}
