import React from 'react';
import { RotatedTextContainer, RotatedText, WhatWeDoStyle, WhatWeDoContainerStyle, MainContent, Hr, Button } from 'sections/WhatWeDo/WhatWeDo.style';
import { PrimaryText } from 'sections/LandingScreenSection/LandingScreenSection.style';
import Cards from 'sections/Cards/Cards';
import { ReactComponent as Arrow } from 'assets/right-arrow.svg';

export default function Resources() {
  return (
    <WhatWeDoContainerStyle id="program">
      <WhatWeDoStyle>
        <RotatedTextContainer>
          <RotatedText>Resources</RotatedText>
        </RotatedTextContainer>
        <MainContent>
          <Hr />
          <PrimaryText>Resources for student artists</PrimaryText>
          <Cards />
          <div className="btn-container">
            <Button>
              <span>VIEW ALL RESOURCES</span> <Arrow className="arrow" />
            </Button>
          </div>
          <Hr />
          <PrimaryText>Resources for graduate artists</PrimaryText>
          <Cards />
          <div className="btn-container">
            <Button>
              <span>VIEW ALL RESOURCES</span> <Arrow className="arrow" />
            </Button>
          </div>
        </MainContent>
      </WhatWeDoStyle>
    </WhatWeDoContainerStyle>
  );
}
