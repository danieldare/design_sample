import React from 'react';
import Card from 'components/Card/Card';
import ImageOne from 'assets/what_we_do_section_image_1.png';
import ImageTwo from 'assets/what_we_do_section_image_2.png';
import ImageThree from 'assets/what_we_do_section_image_3.png';
import { CardsStyle } from './Cards.style';

const cardData = [
  {
    title: 'One',
    imgSrc: ImageOne,
    cardText: 'Place any text you want here etc We invest between N2m - N5m in marketing, production and promotional fees',
    data_aos: 'zoom-out',
    data_aos_duration: '800',
  },
  {
    title: 'Two',
    imgSrc: ImageTwo,
    cardText: 'Place any text you want here etc We invest between N2m - N5m in marketing, production and promotional fees',
    data_aos: 'fade-up',
    data_aos_duration: '800',
  },
  {
    title: 'Three',
    imgSrc: ImageThree,
    cardText: 'Place any text you want here etc We invest between N2m - N5m in marketing, production and promotional fees',
    data_aos: 'zoom-in-down',
    data_aos_duration: '800',
  },
];

export default function Cards() {
  return (
    <CardsStyle>
      {cardData.map(({ imgSrc, cardText, title, data_aos, data_aos_duration }) => (
        <Card key={title} imgSrc={imgSrc} title={title} text={cardText} animationType={data_aos} animationDuration={data_aos_duration} />
      ))}
    </CardsStyle>
  );
}
