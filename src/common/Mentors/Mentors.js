import React, { useState } from 'react';
import ImageOne from 'assets/mentors_section_image_1_killer_mike.png';
import ImageTwo from 'assets/mentors_section_image_2_timbaland.png';
import ImageThree from 'assets/mentors_section_image_3_chance_the_rapper.png';
import MentorCard from 'components/MentorCard/MentorCard';
import { MentorsStyle, MentorsContainer, TextHeading } from './Mentors.style';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// Import Swiper styles

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

  SwiperCore.use([Virtual, Navigation, Pagination, Scrollbar, A11y]);

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

  return (
    <MentorsContainer>
      <TextHeading>Our Mentors</TextHeading>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        virtual
      >
        <MentorsStyle id="team">
          {mentors.map((card, index) => (
            <SwiperSlide key={index}>
              <MentorCard prev={() => prevMentor(index)} index={index} currentMentor={currentMentor} next={() => nextMentor(index)} imgSrc={card.imgSrc} cardText={card.cardText} name={card.name} />
            </SwiperSlide>
          ))}
        </MentorsStyle>
      </Swiper>

      {/* <MentorsStyle id="team">
        {mentors.map((card, index) => (
          <SwiperSlide key={index}>
            <MentorCard prev={() => prevMentor(index)} index={index} currentMentor={currentMentor} next={() => nextMentor(index)} imgSrc={card.imgSrc} cardText={card.cardText} name={card.name} />
          </SwiperSlide>
        ))}
      </MentorsStyle> */}
    </MentorsContainer>
  );
}
