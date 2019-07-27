import React, { useContext } from 'react';
import { FoodContext } from '../../../Context/FoodContext/FoodProvider';
import styled from 'styled-components';

const MenuListStyled = styled.section`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 30px;
  align-items: baseline;

  .food-card-img {
    max-width: 250px;
    /* height: 200px; */
    margin: auto;

    img {
      height: 100%;
    }
  }

  .food-title {
    margin: 0.5em 0;
    color: var(--main-color-two);
    font-size: 1.3rem;
    font-weight: bold;
    text-shadow: 0.2px 0 0 #1c1c1c;
  }
  .food-subtitle {
    line-height: 1.3;
    margin-bottom: 0.7em;
  }

  .food-price {
    font-weight: bold;
    font-size: 1.3rem;
    color: var(--main-color);

    .food-moneyIcon {
      color: var(--grey-color);
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    }
  }

  @media screen and (min-width: 776px) {
    width: 90vw;
  }
  @media screen and (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
  }
`;

const MenuList = () => {
  const { sortMenu } = useContext(FoodContext);

  return (
    <MenuListStyled className='menu-list'>
      {sortMenu.map((item, i) => (
        <div key={i} className='food-card'>
          <div className='food-card-img'>
            <img src={item.img} alt={item.name} />
          </div>
          <div className='food-card-info'>
            <h3 className='food-title'>{item.name}</h3>
            <p className='food-subtitle'>{item.description}</p>
            <p className='food-price'>
              <span className='food-moneyIcon'>$</span> {item.price.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </MenuListStyled>
  );
};

export default MenuList;
