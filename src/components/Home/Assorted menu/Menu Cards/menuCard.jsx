import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuCardStyle = styled.section`
  .card {
    flex: 1 1 100%;
    display: flex;
    flex-wrap: wrap;
    min-height: 100%;
    min-width: 200px;
    background-color: var(--main-color-two);
    border: 5px solid var(--third-color);
    border-radius: 5px;
    box-shadow: 0px 6px 10px 0.2px black;
    margin: 2em auto;
    padding: 2em;
    justify-content: center;
    transition: transform 0.5s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }

  .food-img {
    align-self: center;
  }

  .food-subtile {
    flex: 100%;
    text-align: center;
    font-size: 1.8rem;
    color: white;
    text-shadow: 1px 6px 10px black;
  }

  @media screen and (min-width: 760px) {
    ${props => props.tabletmd};
  }
`;

const menuCard = ({ items }) => (
  <MenuCardStyle className='menuCards'>
    {items.map((item, i) => (
      <Link className='card' key={i} to={'/menu'}>
        <figure>
          <div className='food-img'>
            <img src={item.img} alt={item.title} />
          </div>
          <h4 className='food-subtile'>{item.title}</h4>
          {item.children}
        </figure>
      </Link>
    ))}
  </MenuCardStyle>
);

export default menuCard;
