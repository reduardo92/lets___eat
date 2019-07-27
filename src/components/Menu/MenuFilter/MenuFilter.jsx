import React, { useContext } from 'react';
import styled from 'styled-components';
import { FoodContext } from '../../../Context/FoodContext/FoodProvider';

const MenuFilterStyled = styled.section`
  margin: 2em 0 5em;

  .filter-form {
    width: 75vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(202px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 40px;
  }
  .form-group {
    text-transform: capitalize;
  }
  .form-group label {
    display: block;
    letter-spacing: var(--mainSpacing);
    margin-bottom: 0.5rem;
  }
  .form-control {
    width: 100%;
    background: transparent;
    font-size: 1rem;
  }

  select,
  option {
    text-transform: capitalize;
  }

  @media screen and (min-width: 776px) {
    .filter-form {
      width: 70vw;
    }
  }
  @media screen and (min-width: 992px) {
    .filter-form {
      width: 95vw;
      max-width: 1170px;
    }
  }
`;

const MenuFilter = props => {
  const { valueTypes, valueItem, handleMenuSort, formValues } = useContext(
    FoodContext
  );

  return (
    <MenuFilterStyled>
      <form className='filter-form'>
        {/* Food Assorted */}
        <div className='form-group'>
          <label htmlFor='type'>Assorted</label>
          <select
            name='types'
            id='type'
            value={formValues.types}
            className='form-control'
            onChange={handleMenuSort}
          >
            {valueTypes.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {/* End Food Assorted */}

        {/* all food's */}
        <div className='form-group'>
          <label htmlFor='item'>Food Options</label>
          <select
            name='item'
            id='item'
            value={formValues.item}
            className='form-control'
            onChange={handleMenuSort}
          >
            {valueItem.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {/* End all food's */}
      </form>
    </MenuFilterStyled>
  );
};

export default MenuFilter;
