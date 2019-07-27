import React from 'react';
import styled from 'styled-components';

const FlexGalleryStyle = styled.div`
  /* line them up horizontally */
  display: flex;
  /* allow for scrolling */
  overflow-x: auto;
  /* make it smooth on iOS */
  -webkit-overflow-scrolling: touch;
  scroll-snap-points-x: repeat(400px);
  scroll-snap-type: mandatory;
  margin-bottom: 1.3em;
`;

const ImgDiv = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  border: 1px solid black;
  flex-shrink: 0;
  min-width: 400px;
  height: 300px;
`;

const FlexGallery = ({ items }) => {
  return (
    <FlexGalleryStyle>
      {items.map(item => (
        <ImgDiv key={item.id} img={item.img} />
      ))}
    </FlexGalleryStyle>
  );
};

export default FlexGallery;
