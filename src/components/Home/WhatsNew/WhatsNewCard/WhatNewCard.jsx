import React from 'react';
import styled from 'styled-components';
import Title from '../../../../Ui/titles/title';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Button, { LinkStyle } from '../../../../Ui/button/Button';

const WhatStyled = styled.div`
  max-width: 980px;
  margin: 0;

  .card {
    margin-bottom: 3em;

    p {
      margin: 0.5em 0;
    }
  }

  @media screen and (min-width: 760px) {
    .card,
    .card2 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: auto;
      margin: 2em auto;
    }

    .title {
      grid-column: 1 / 3;
    }
    .imgcard {
      grid-column: 3 / 5;
      grid-row: 1 / 3;
      justify-self: center;
      align-self: end;
      max-width: 350px;
    }

    .view-more {
      margin: 0;
      grid-row: 2 / 3;
      align-self: baseline;
      font-size: 1.5rem;
      justify-self: baseline;
    }

    .card2 {
      .title {
        grid-column: 3 / 5;
      }

      .imgcard {
        grid-column: 1 / 3;
      }

      .view-more {
        grid-column: 3 /4;
      }
    }
  }
`;

const WhatNewCard = ({ items }) => {
  return (
    <WhatStyled className='whatNewCards'>
      {items.map((item, i) => (
        <div key={item.id} className={i === 1 ? 'card2' : 'card'}>
          <Title
            title={item.name}
            textColor='var(--main-color-two)'
            subColor='var(--grey-color)'
          >
            <p>{item.description}</p>
          </Title>
          <Fade delay={800}>
            <div className='imgcard'>
              <img src={item.img} alt={item.name} />
            </div>
          </Fade>
          <Link className='view-more' to='/menu'>
            View More
          </Link>
        </div>
      ))}
    </WhatStyled>
  );
};

export default WhatNewCard;
