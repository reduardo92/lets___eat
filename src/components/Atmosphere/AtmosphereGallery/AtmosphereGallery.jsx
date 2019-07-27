import React from 'react';
import styled from 'styled-components';
import Title from '../../../Ui/titles/title';

const AtmosGalleryStyle = styled.section`
  margin: 2em auto 4em;
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-row-gap: 1rem;

  .title {
    grid-column: 1 / 3;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 30px;
    align-items: end;

    img {
      border: 2px solid #000;
      box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.3);
    }
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

const AtmosphereGallery = ({ items }) => {
  console.log(items);
  return (
    <AtmosGalleryStyle>
      <Title title='Our' subtitle="vibe's">
        <div className='line' />
      </Title>

      <div className='cards'>
        {items.map((item, i) => (
          <img key={item.id} src={item.img} alt={item.id} />
        ))}
      </div>
    </AtmosGalleryStyle>
  );
};

export default AtmosphereGallery;
