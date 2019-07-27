import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Title from '../../../Ui/titles/title';
import MenuCard from './Menu Cards/menuCard';
import burger from '../../../assets/images/cardImg/crispy_chicken_burger.png';
import nachos from '../../../assets/images/cardImg/nachos_sour_avocado.png';
import crepe from '../../../assets/images/cardImg/strawberry_wipe_crepes.png';

const AssortedStyle = styled.section`
  margin: 3em 0;

  .title {
    flex: 100%;
    text-align: center;
    h2 {
      font-size: 1.8rem;
      span {
        font-size: 1.5rem;
      }
    }
  }

  .line {
    margin: 0 auto;
  }

  @media screen and (min-width: 760px) {
    .title {
      h2 {
        font-size: 2rem;
        span {
          font-size: 1.6rem;
        }
      }
    }

    .menuCards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      .card {
        flex: 1;
        margin: 1em;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .menuCards {
      .card {
        flex: 1 1 290px;
        max-width: 290px;
      }
    }
  }
`;

const AssortedMenu = props => {
  const cardImg = [
    { title: 'Appetizers', img: nachos },
    { title: 'Lunch', img: burger },
    { title: 'Dessert', img: crepe }
  ];

  return (
    <AssortedStyle id='assortedMenu'>
      <Title title='Assorted' subtitle='Menu'>
        <div className='line' />
      </Title>
      <Fade delay={800}>
        <MenuCard items={cardImg} />
      </Fade>
    </AssortedStyle>
  );
};

export default AssortedMenu;

// const tabletMixin = `flex:100%; h2 {font-size:1.7rem; span{ font-size:1.5rem} } `;
