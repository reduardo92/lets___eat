import React, { createContext, useEffect, useState } from 'react';
import foodData from '../../foodData';

const FoodContext = createContext();

const FoodProvider = props => {
  const [foods, setFoods] = useState([]);
  const [sortMenu, setSortMenu] = useState([]);
  const [atmosphere, setAtmosphere] = useState([]);
  const [formValues, setFormValues] = useState({ types: 'All', item: '' });

  useEffect(() => {
    setFoods(foodData.foodData);
    setSortMenu(foodData.foodData);
    setAtmosphere(foodData.atmosphere);
  }, []);

  const featured = foods.filter(item => item.featured);

  const whatsNew = foods.filter(item => item.new);

  const handleMenuSort = (param = 'All') => {
    const target = param.target;

    const menuSorted =
      target.value === 'All'
        ? foods
        : [
            ...foods.filter(
              ({ item, type }) => type === target.value || item === target.value
            )
          ];
    setSortMenu(menuSorted);
    setFormValues({
      ...formValues,
      [target.name]: [target.value].join()
    });
  };

  const valueTypes = ['All', ...new Set(foods.map(item => item.type))];

  const valueItem = [
    ...new Set(
      foods.map(({ item, type }) =>
        formValues.types === 'All' ? item : type === formValues.types && item
      )
    )
  ].filter(item => item !== false);

  return (
    <FoodContext.Provider
      value={{
        foods,
        sortMenu,
        atmosphere,
        setFormValues,
        formValues,
        valueTypes,
        valueItem,
        featured,
        whatsNew,
        handleMenuSort
      }}
    >
      {props.children}
    </FoodContext.Provider>
  );
};

export { FoodProvider, FoodContext };
