import React from 'react';
import { CardStyle, CardTextContent, CardImgContainer, TextTitle, TextBrief } from './Card.style';

export default function Card({ imgSrc, text, title, animationType, animationDuration }) {
  return (
    <CardStyle data-aos={animationType} data-aos-duration={animationDuration}>
      <CardImgContainer>
        <img src={imgSrc} alt="card" />
      </CardImgContainer>
      <CardTextContent>
        <TextTitle>{title}</TextTitle>
        <TextBrief>{text}</TextBrief>
      </CardTextContent>
    </CardStyle>
  );
}
