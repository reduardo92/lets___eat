import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Brand from '../../../assets/images/brandTwo.jpg';
import Hero from '../../../Ui/Hero/hero';
import Banner from '../../../Ui/banner/banner';

const BannerStyle = styled.section`
  margin-bottom: 1.8em;

  .view-more {
    color: var(--second-color);
    font-size: 1rem;
    padding: 0 0.2em 0.1em;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    /* box-shadow: 1px 1px 7px rgba(32, 32, 32, 0.705); */
    border-bottom: 2px solid var(--main-color-two);

    &:hover,
    &focus {
      border: 1px solid var(--second-color);
    }
  }

  @media screen and (min-width: 760px) {
    .hero {
      min-height: 35vh;
    }

    .banner {
      h1 {
        font-size: 2.5rem;
      }

      p {
        font-size: 1.4rem;
      }
    }

    .view-more {
      font-size: 1.3rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .hero {
      min-height: 65vh;
    }

    .banner {
      h1 {
        font-size: 2.8rem;
      }
    }

    .view-more {
      font-size: 1.5rem;
    }
  }
`;

const StoryBanner = props => {
  return (
    <BannerStyle id='storyBanner'>
      <Hero img={Brand} heroSize='30vh'>
        <Banner
          titleSize='1.4rem'
          subSize='1rem'
          title='Our Story'
          subtitle='see what makes us tasty'
        >
          <Link className='view-more' to='/about'>
            View More
          </Link>
        </Banner>
      </Hero>
    </BannerStyle>
  );
};

export default StoryBanner;
