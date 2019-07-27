import React from 'react';
import styled from 'styled-components';
import { FaCartPlus } from 'react-icons/fa';

const CardStyle = styled.section`
  margin: 0 auto;

  .card {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 100%;
    box-shadow: -10px 0px 13px -7px rgba(0, 0, 0, 0.3),
      10px 0px 13px -7px rgba(0, 0, 0, 0.3), 0px 5px 10px 3px rgba(0, 0, 0, 0);
    margin-bottom: 1.5em;
    text-align: left;
    border-bottom: 5px solid var(--main-color-two);
  }

  img {
    margin: 0 auto;
    max-width: 300px;
    height: 200px;
  }

  .container {
    padding: 1.2em;
  }

  .food-title {
    margin: 0.5em 0;
    color: var(--grey-color);
    font-size: 1.3rem;
    font-weight: bold;
    text-shadow: 0.2px 0 0 #1c1c1c;
  }
  .food-subtitle {
    line-height: 1.3;
    margin-bottom: 0.7em;
  }

  .price-container {
    display: flex;
    align-items: center;

    .food-price {
      font-weight: bold;
      font-size: 1.3rem;
      color: var(--main-color);

      .food-moneyIcon {
        color: var(--grey-color);
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .food-quantity {
    display: flex;
    margin-left: 1.2em;
    align-items: center;

    &-btn {
      transition: var(--transition-4s);
      font-size: 2rem;
      margin: 0 0.5em;
      color: var(--main-color);

      &:hover,
      &:focus,
      &:active {
        color: var(--grey-color);
      }
    }

    &-num {
      font-size: 1.4rem;
      font-weight: bold;
      color: var(--grey-color);
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.35);
    }
  }

  .food-cart-btn {
    transition: var(--transition-4s);
    padding: 0.5em;
    color: white;
    width: 100%;
    background-color: var(--main-color-two);
    text-align: center;
    cursor: pointer;
    font-size: 1rem;
    text-shadow: var(--text-shadow);
    svg {
      text-shadow: var(--text-shadow);
      font-size: 1.2rem;
    }

    &:hover,
    &:focus,
    &:active {
      opacity: 0.8;
    }
  }
`;

const FeaturedCard = ({ items }) => (
  <CardStyle className='featuredCards'>
    {items.map(item => (
      <figure className='card' key={item.id}>
        <img src={item.img} alt={item.name} />
        <div className='container'>
          <h3 className='food-title'>{item.name}</h3>
          <p className='food-subtitle'>{item.description}</p>
          <div className='price-container'>
            <p className='food-price'>
              <span className='food-moneyIcon'>$</span> {item.price.toFixed(2)}
            </p>
            {/* <div className='food-quantity'>
              <button className='food-quantity-btn'>-</button>
              <div className='food-quantity-num'>0</div>
              <button className='food-quantity-btn'>+</button>
            </div> */}
          </div>
        </div>
        {/* <button className='food-cart-btn'>
          Add To Cart <FaCartPlus />
        </button> */}
      </figure>
    ))}
  </CardStyle>
);

export default FeaturedCard;
