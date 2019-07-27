import React from 'react';
import styled from 'styled-components';
import withReveal from 'react-reveal/withReveal';
import Fade from 'react-reveal/Fade';

const TitleStyle = withReveal(
  styled.div`
    margin-bottom: 2em;

    h2 {
      font-size: 1.5rem;
      color: ${props => props.textColor || 'var(--grey-color)'};
      text-transform: uppercase;
      font-weight: bold;
      text-shadow: 0.3px 0.5px 1px black;
      span {
        font-size: 1.3rem;
        display: block;
        color: ${props => props.subColor || 'var(--main-color-two)'};
      }
    }

    .line {
      background-color: var(--main-color-two);
      width: 40%;
      max-width: 200px;
      height: 2px;
    }

    p {
      color: rgb(68, 68, 68);
      line-height: 1.5;
    }
  `,
  <Fade bottom />
);

const Title = ({ title, subtitle, textColor, subColor, children }) => {
  return (
    <TitleStyle className='title' textColor={textColor} subColor={subColor}>
      <h2>
        {title}
        <span>{subtitle}</span>
      </h2>
      {children}
    </TitleStyle>
  );
};

export default Title;
