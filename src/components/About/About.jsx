import React from 'react';
import styled from 'styled-components';
import Hero from '../../Ui/Hero/hero';
import Banner from '../../Ui/banner/banner';
import { LinkStyle } from '../../Ui/button/Button';
import aboutHero from '../../assets/images/brandTwo.jpg';
import AboutBody from './aboutbody/AboutBody';
import { Container } from '../../containers/container';
import Fade from 'react-reveal/Fade';

const AboutStyled = styled.section``;

const About = () => {
  return (
    <>
      <Hero img={aboutHero} heroSize='calc(60vh - 66px)'>
        <Banner
          title='About Us'
          subtitle='this is what makes us tasy'
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
        <AboutBody />
      </Container>
    </>
  );
};

export default About;
