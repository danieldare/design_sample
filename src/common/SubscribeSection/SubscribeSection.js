import React from 'react';
import { SubscribeSectionStyle, InputHolder, HeadingText, SubscribeSectionContainer } from './SubscribeSection.style';
import { PrimaryText } from 'common/LandingScreenSection/LandingScreenSection.style';

export default function SubscribeSection() {
  return (
    <SubscribeSectionStyle>
      <SubscribeSectionContainer data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="center-bottom">
        <PrimaryText>Great updates</PrimaryText>
        <HeadingText>Sign up to our newsletter to get updates on events, news and opportunities</HeadingText>
        <InputHolder>
          <input type="email" placeholder="Username or email" />
          <button className="btn">Subscribe</button>
        </InputHolder>
      </SubscribeSectionContainer>
    </SubscribeSectionStyle>
  );
}
