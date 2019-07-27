import React from 'react';
import styled from 'styled-components';
import heroImg from '../../assets/images/hero/forkbg.jpg';

const HeroImg = styled.div`
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  min-height: ${props => props.heroSize || 'calc(100vh - 66px)'};
  text-align: center;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

const hero = ({ img, heroSize, children }) => {
  return (
    <HeroImg className='hero' img={img} heroSize={heroSize}>
      {children}
    </HeroImg>
  );
};

export default hero;

hero.defaultProps = {
  img: heroImg
};
