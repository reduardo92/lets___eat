import React from 'react';
import Hero from '../../Ui/Hero/hero';
import Banner from '../../Ui/banner/banner';
import AssortedMenu from './Assorted menu/AssortedMenu';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import WhatNew from './WhatsNew/WhatNew';
import { Container } from '../../containers/container';
import StoryBanner from './StoryBanner/StoryBanner';
import Atmosphere from './Atmosphere/Atmosphere';
import { LinkStyle } from '../../Ui/button/Button';
import Fade from 'react-reveal/Fade';

const home = props => {
  return (
    <>
      <Hero>
        <Banner
          title='LETS EAT'
          subtitle='enjoy your cravings'
          titleMd='4.8rem'
          subMd='1.5rem'
        >
          <Fade delay={800}>
            <LinkStyle to='/menu' tabletmd='1.2rem'>
              View Menu
            </LinkStyle>
          </Fade>
        </Banner>
      </Hero>
      <Container>
        <AssortedMenu />
        <FeaturedProducts />
      </Container>
      <StoryBanner />
      <Container>
        <WhatNew />
        <Atmosphere />
      </Container>
    </>
  );
};

export default home;
