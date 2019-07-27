import React, { useContext } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Title from '../../../Ui/titles/title';
import FeaturedCard from './FeatureCard/FeaturedCard';
import { FoodContext } from '../../../Context/FoodContext/FoodProvider';

const FeaturedStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3em;

  .line {
    width: 100%;
  }

  @media screen and (min-width: 760px) {
    .title {
      flex: 100%;
      margin-left: 2em;
      h2 {
        font-size: 2rem;
        span {
          font-size: 1.6rem;
        }
      }
    }

    .featuredCards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;

      .card {
        flex: 45%;
        max-width: 45%;
        /* margin: 0.5em; */
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .featuredCards {
      .card {
        flex: 22%;
        max-width: 22%;
      }
    }
  }
`;

const FeaturedProducts = props => {
  const { featured } = useContext(FoodContext);

  console.log('from FP', featured);

  return (
    <FeaturedStyled className='Featured'>
      <Title title='Featured' subtitle='Menu'>
        <div className='line' />
      </Title>
      <Fade delay={800}>
        <FeaturedCard items={featured} />
      </Fade>
    </FeaturedStyled>
  );
};

export default FeaturedProducts;

// const tabletMixin = `flex:100%; h2 {font-size:1.7rem; span{ font-size:1.5rem}} `;
