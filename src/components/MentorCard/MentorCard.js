import React from 'react';
import { MentorCardImgContainer, MentorCardTextContent, MentorCardBrief, MentorCardTitle, MentorCardStyle, Overlay } from './Slider.style';
import ArrowIcon from 'components/ArrowIcon/ArrowIcon';

export default function MentorCard({ imgSrc, cardText, name, className, prev, next, isCurrent }) {
  return (
    <MentorCardStyle className={className} isCurrent={isCurrent}>
      {!isCurrent && <Overlay />}
      <MentorCardImgContainer>
        <img src={imgSrc} alt="card" />
      </MentorCardImgContainer>
      <MentorCardTextContent>
        <div className="arrow_holder" style={{ visibility: !isCurrent && 'hidden ' }}>
          <ArrowIcon cb={prev} rotateDeg={90} onClick />
          <ArrowIcon cb={next} rotateDeg={-90} marginLeft="3" />
        </div>
        <MentorCardTitle>{name}</MentorCardTitle>
        <MentorCardBrief>{cardText}</MentorCardBrief>
      </MentorCardTextContent>
    </MentorCardStyle>
  );
}
