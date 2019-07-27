import React, { useContext } from 'react';
import Hero from '../../Ui/Hero/hero';
import Banner from '../../Ui/banner/banner';
import { LinkStyle } from '../../Ui/button/Button';
import aboutHero from '../../assets/images/brandTwo.jpg';
import { Container } from '../../containers/container';
import AtmosphereGallery from './AtmosphereGallery/AtmosphereGallery';
import { FoodContext } from '../../Context/FoodContext/FoodProvider';
import Fade from 'react-reveal/Fade';

const AtmosphereC = () => {
  const { atmosphere } = useContext(FoodContext);

  return (
    <>
      <Hero img={aboutHero} heroSize='calc(60vh - 66px)'>
        <Banner
          title='Atmosphere'
          subtitle='check our place out'
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
        <AtmosphereGallery items={atmosphere} />
      </Container>
    </>
  );
};

export default AtmosphereC;
