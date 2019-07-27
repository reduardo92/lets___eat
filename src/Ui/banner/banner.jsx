import React from 'react';
import styled from 'styled-components';
import withReveal from 'react-reveal/withReveal';
import Fade from 'react-reveal/Fade';

const Bannerstyle = withReveal(
  styled.div`
    color: white;
    h1 {
      font-size: ${props => props.titleSize || '3.2rem'};
    }

    p {
      font-size: ${props => props.subSize || '1.1rem'};
      margin-bottom: 1em;
    }

    @media screen and (min-width: 760px) {
      h1 {
        font-size: ${props => props.titleMd};
      }

      p {
        font-size: ${props => props.subMd};
        margin-bottom: 1em;
      }
    }
  `,
  <Fade top duration={1500} />
);

const banner = ({
  children,
  title,
  subtitle,
  titleSize,
  subSize,
  tabletSize,
  titleMd,
  subMd
}) => {
  return (
    <Bannerstyle
      className='banner'
      titleSize={titleSize}
      subSize={subSize}
      tabletSize={tabletSize}
      titleMd={titleMd}
      subMd={subMd}
    >
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {children}
    </Bannerstyle>
  );
};

export default banner;
