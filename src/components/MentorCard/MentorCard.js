import React from 'react';
import { MentorCardImgContainer, MentorCardTextContent, MentorCardBrief, MentorCardTitle, MentorCardStyle } from './Slider.style';
import ArrowIcon from 'components/ArrowIcon/ArrowIcon';

export default function MentorCard({ imgSrc, cardText, name, currentMentor, prev, next, index }) {
  function currentMentorVisibility() {
    return currentMentor && currentMentor.name === name && 'currentMentor';
  }

  return (
    <MentorCardStyle className={currentMentorVisibility() && 'currentMentor'}>
      <MentorCardImgContainer className={currentMentor.name === name && 'currentMentor'}>
        <img src={imgSrc} alt="card" />
      </MentorCardImgContainer>
      <MentorCardTextContent>
        <div className="arrow_holder">
          <ArrowIcon cb={prev} rotateDeg={90} onClick />
          <ArrowIcon cb={next} rotateDeg={-90} marginLeft="3" />
        </div>
        <MentorCardTitle>{name}</MentorCardTitle>
        <MentorCardBrief>{cardText}</MentorCardBrief>
      </MentorCardTextContent>
    </MentorCardStyle>
  );
}
