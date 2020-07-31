import React from 'react';
import { ArrowIconStyle } from './ArrowIcon.style';

export default function ArrowIcon({ fill = '', borderColor = '', rotateDeg, background = '', marginLeft, cb }) {
  return <ArrowIconStyle onClick={cb} style={{ fill, borderColor, transform: `rotate(${rotateDeg}deg)`, background, marginLeft: `${marginLeft}rem` }} />;
}
