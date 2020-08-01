import React from 'react';
import { WhatWeDoStyle, RotatedText, Hr, MainContent, RotatedTextContainer, WhatWeDoContainerStyle } from './WhatWeDo.style';
import { PrimaryText, PrimaryBriefText } from 'sections/LandingScreenSection/LandingScreenSection.style';
import ArrowIcon from 'components/ArrowIcon/ArrowIcon';
import Cards from 'sections/Cards/Cards';

export default function WhatWeDo() {
  return (
    <WhatWeDoContainerStyle>
      <WhatWeDoStyle>
        <RotatedTextContainer>
          <RotatedText>What we do</RotatedText>
        </RotatedTextContainer>
        <MainContent>
          <Hr />
          <PrimaryText>You’re in great company</PrimaryText>
          <PrimaryBriefText>Gidara seeks to connect young talented musicians with world class producers, managers etc</PrimaryBriefText>
          <div className="arrow_holder">
            <ArrowIcon fill="#fff" borderColor="black" background="black" rotateDeg={90} />
            <ArrowIcon fill="#fff" borderColor="black" background="black" rotateDeg={-90} marginLeft="3" />
          </div>
          <Cards />
        </MainContent>
      </WhatWeDoStyle>
    </WhatWeDoContainerStyle>
  );
}
