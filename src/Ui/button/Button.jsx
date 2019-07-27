import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import withReveal from 'react-reveal/withReveal';
import Fade from 'react-reveal/Fade';

export const LinkStyle = withReveal(
  styled(Link)`
    color: var(--second-color);
    padding: 0.5em 0.6em;
    font-size: 1rem;
    border-radius: 5px;
    background-color: var(--main-color-two);
    box-shadow: 1px 1px 7px rgba(32, 32, 32, 0.705);
    transition: var(--transition-4s);

    :hover,
    :focus,
    :active {
      border: 0.5px solid var(--second-color);
      opacity: 0.9;
      background-color: transparent;
    }

    @media screen and (min-width: 760px) {
      font-size: ${props => props.tabletmd};
    }
  `,
  <Fade />
);

export const ViewMore = styled(Link)`
  transition: var(--transition-4s);
  color: var(--grey-color);
  font-size: 1.15rem;
  margin: 3em 0;
  border-bottom: 1px solid var(--main-color-two);

  &:hover,
  &:focus,
  &:active {
    color: var(--main-color-two);
    border-bottom: 1px solid var(--grey-color);
  }
`;
const Button = ({ toLink, children }) => {
  return (
    <ViewMore className='view-more' to={toLink}>
      {children}
    </ViewMore>
  );
};

export default Button;
