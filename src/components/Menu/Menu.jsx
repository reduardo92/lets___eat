import React from 'react';
import Hero from '../../Ui/Hero/hero';
import Banner from '../../Ui/banner/banner';
import { LinkStyle } from '../../Ui/button/Button';
import aboutHero from '../../assets/images/brandTwo.jpg';
import { Container } from '../../containers/container';
import MenuContainer from './MenuContainer/MenuContainer';
import Fade from 'react-reveal/Fade';

const Menu = props => {
  return (
    <>
      <Hero img={aboutHero} heroSize='calc(60vh - 66px)'>
        <Banner
          title='Menu'
          subtitle='this is what makes us tasy'
          titleMd='4.8rem'
          subMd='1.5rem'
        >
          <Fade delay={800}>
            <LinkStyle to='/Home' tabletmd='1.2rem'>
              Home
            </LinkStyle>
          </Fade>
        </Banner>
      </Hero>
      <Container>
        <MenuContainer />
      </Container>
    </>
  );
};

export default Menu;
