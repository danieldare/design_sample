import React, { useState } from 'react';
import ImageOne from 'assets/mentors_section_image_1_killer_mike.png';
import ImageTwo from 'assets/mentors_section_image_2_timbaland.png';
import ImageThree from 'assets/mentors_section_image_3_chance_the_rapper.png';
import MentorCard from 'components/MentorCard/MentorCard';
import { MentorsStyle, MentorsContainer, TextHeading } from './Mentors.style';

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
  const [currentIndex, setCurrentIndex] = useState(1);
  const [mentors, setMentors] = useState(cardData);

  function prevMentor(e) {
    e.preventDefault();

    let index = currentIndex;
    let slidesLength = mentors.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    const updatedMentors = mentors;
    const temp = updatedMentors.splice(0, 1);
    setMentors([...updatedMentors, temp[0]]);
    setCurrentIndex(index);
  }

  function nextMentor(e) {
    e.preventDefault();

    let index = currentIndex;
    let slidesLength = mentors.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    const updatedMentors = mentors;
    const temp = updatedMentors.splice(updatedMentors.length - 1, 1);
    setMentors([temp[0], ...updatedMentors]);
    setCurrentIndex(index);
  }

  return (
    <MentorsContainer>
      <TextHeading>Our Mentors</TextHeading>
      <MentorsStyle id="team">
        {mentors.map(({ cardText, imgSrc, name }, index) => (
          <MentorCard isCurrent={index === 1} key={index} className={index === +currentIndex && 'current_mentor'} prev={prevMentor} next={nextMentor} imgSrc={imgSrc} cardText={cardText} name={name} />
        ))}
      </MentorsStyle>
    </MentorsContainer>
  );
}
