import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import Title from '../../../Ui/titles/title';
import FlexGallery from '../../../Ui/FlexGalley/FlexGallery';
import { FoodContext } from '../../../Context/FoodContext/FoodProvider';

const AtmosphereStyled = styled.section`
  @media screen and (min-width: 760px) {
    .title {
      h2 {
        font-size: 2rem;
        span {
          font-size: 1.6rem;
        }
      }
    }

    .view-more {
      font-size: 1.5rem;
    }
  }
`;

const Atmosphere = () => {
  const { atmosphere } = useContext(FoodContext);

  console.log(atmosphere);
  return (
    <AtmosphereStyled>
      <Title title='Atmosphere' subtitle='Vibe'>
        <div className='line' />
      </Title>
      <Fade right duration={1500}>
        <FlexGallery items={atmosphere} />
      </Fade>
      <Link className='view-more' to='/atmosphere'>
        View All
      </Link>
    </AtmosphereStyled>
  );
};

export default Atmosphere;
