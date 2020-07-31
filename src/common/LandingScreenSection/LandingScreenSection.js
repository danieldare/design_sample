import React from 'react';
import { LandingScreenPageStyle, Grid2, PrimaryText, BoldText, SecondaryText } from './LandingScreenSection.style';
import BannerImg from 'assets/Hero_image.png';
import { Container } from 'components/NavBar/NavBar.style';
import ArrowIcon from 'components/ArrowIcon/ArrowIcon';
import Typed from 'react-typed';

export default function LandingScreenSection() {
  return (
    <LandingScreenPageStyle>
      <Container>
        <Grid2>
          <div className="banner-text-content">
            <PrimaryText>Your music career success partner</PrimaryText>
            <BoldText>
              <Typed strings={['We back Nigerian indie artists from around the world and help them do their best work.']} typeSpeed={90} />
            </BoldText>
            <SecondaryText>
              We invest between N2m - N5m in marketing, production and promotional fees in youbg budding Nigerian artists and help them suceed with design support and our network of successful Indie
              musicians
            </SecondaryText>
            <ArrowIcon />
          </div>
          <div className="banner-img-container" data-aos="fade-in" data-aos-duration="200">
            <img src={BannerImg} alt="banner" />
          </div>
        </Grid2>
      </Container>
    </LandingScreenPageStyle>
  );
}
