import React, { useEffect, useState } from 'react';
import NavBar from 'components/NavBar/NavBar';
import { AppStyle, BannerContainerStyle } from 'app.style';
import LandingScreenSection from 'sections/LandingScreenSection/LandingScreenSection';
import GlobalStyle from 'GlobalStyle.style';
import WhatWeDo from 'sections/WhatWeDo/WhatWeDo';
import Mentors from 'sections/Mentors/Mentors';
import Resources from 'sections/Resources/Resources';
import SubscribeSection from 'sections/SubscribeSection/SubscribeSection';
import Footer from 'sections/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Img from 'assets/Hero_image.png';
import Spinner from 'components/Spinner/Spinner';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <>
      <GlobalStyle />

      <AppStyle>
        {loading ? (
          <Spinner />
        ) : (
          <div data-aos="slide-left" data-aos-duration={5000}>
            <BannerContainerStyle>
              <div className="overlay">
                <img src={Img} alt="banner" className="banner-responsive-img" />
              </div>
              <NavBar />
              <LandingScreenSection />
            </BannerContainerStyle>
            <WhatWeDo />
            <Mentors />
            <Resources />
            <SubscribeSection />
            <Footer />
          </div>
        )}
      </AppStyle>
    </>
  );
}

export default App;
