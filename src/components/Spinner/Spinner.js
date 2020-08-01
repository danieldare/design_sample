import React from 'react';
import { SpinnerStyle } from './Spinner.style';

const Spinner = ({ color = '#000c2c', borderWidth = '5px', size = '40px', height = '100vh' }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
        width: '100%',
        height: height,
        marginTop: '20px',
      }}
    >
      <SpinnerStyle color={color} borderWidth={borderWidth} size={size}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </SpinnerStyle>
    </div>
  );
};

export default Spinner;
