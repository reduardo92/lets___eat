import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import Title from '../../../Ui/titles/title';
import MenuFilter from '../MenuFilter/MenuFilter';
import Spinner from '../../../Ui/Spinner/Spinner';
const MenuList = lazy(() => import('../MenuList/MenuList'));

const MenuConStyled = styled.section`
  margin: 2em auto 4em;

  .title {
    margin-bottom: 0.7em;
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
  }
`;

const MenuContainer = props => {
  return (
    <MenuConStyled>
      <Title title='Our' subtitle='Menu'>
        <div className='line' />
      </Title>
      <MenuFilter />
      <Suspense fallback={<Spinner />}>
        <MenuList />
      </Suspense>
    </MenuConStyled>
  );
};

export default MenuContainer;
