import React, { useContext } from 'react';
import styled from 'styled-components';
import Title from '../../../Ui/titles/title';
import { FoodContext } from '../../../Context/FoodContext/FoodProvider';
import WhatNewCard from './WhatsNewCard/WhatNewCard';

const WhatNewStyled = styled.section`
  margin: 3em 0;

  @media screen and (min-width: 760px) {
    margin: 4em 0 5em;
    display: flex;
    flex-flow: column wrap;
    align-content: center;

    .title {
      h2 {
        font-size: 2rem;
        span {
          font-size: 1.6rem;
        }
      }
    }
  }
`;

const WhatNew = porps => {
  const { whatsNew } = useContext(FoodContext);

  return (
    <WhatNewStyled>
      <Title title="What's" subtitle='New'>
        <div className='line' />
      </Title>
      <WhatNewCard items={whatsNew} />
    </WhatNewStyled>
  );
};

export default WhatNew;
