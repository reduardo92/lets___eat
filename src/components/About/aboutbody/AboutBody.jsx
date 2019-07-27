import React from 'react';
import styled from 'styled-components';
import resturant from '../../../assets/images/resBG2.jpg';
import resturant2 from '../../../assets/images/resBG1.jpg';
import Title from '../../../Ui/titles/title';
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

const BodyStyled = styled.section`
  margin: 2em auto 3em;
  max-width: 950px;

  .title {
    margin-bottom: 0.7em;
  }

  .text-one,
  .text-two {
    color: rgb(68, 68, 68);
    line-height: 1.5;
    margin: 1em 0;
  }

  .fallow {
    margin-top: 1.2em;
    .links {
      display: flex;
      margin: 1em auto;
      p {
        margin-left: 0.3em;
      }
      svg {
        color: var(--main-color-two);
        font-size: 1.2em;
      }
    }
  }

  @media screen and (min-width: 760px) {
    display: grid;
    margin: 4.5em auto;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    grid-gap: 0.5em;
    grid-template-areas:
      'title title imgtwo imgtwo imgtwo'
      'textOne textOne imgtwo imgtwo imgtwo'
      'imgone imgone  imgone imgone fallow'
      'imgone imgone  imgone imgone textTwo';

    .title {
      grid-area: title;
    }
    .text-one {
      grid-area: textOne;
    }
    .text-two {
      grid-area: textTwo;
      align-self: center;
      margin: 0;
    }
    .about-img-one {
      grid-area: imgone;
      max-width: 750px;
      align-self: end;
    }
    .about-img-two {
      grid-area: imgtwo;
      align-self: end;
    }
    .fallow {
      grid-area: fallow;
      margin: 0;
      align-self: end;
    }
  }
`;

const AboutBody = () => {
  return (
    <BodyStyled className='about-body'>
      <Title title='Welcome To Our' subtitle='Restaurant' />
      <Fade>
        <p className='text-one'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          facere iste voluptatum molestias similique quidem rerum voluptas
          autem. Beatae at facere distinctio culpa enim commodi!
        </p>
      </Fade>
      <Fade left>
        <div className='about-img-one'>
          <img src={resturant} alt='resturant' />
        </div>
      </Fade>
      <div className='fallow'>
        <Title title='Visit' subtitle='Us' />
        <div className='links'>
          <FaMapMarker />
          <p>850 s main dr, chicago, Il, 60432</p>
        </div>
        <div className='links'>
          <FaPhone />
          <p>+1+800-456-8970</p>
        </div>
        <div className='links'>
          <FaEnvelope />
          <p>contact@restaurant.com</p>
        </div>
      </div>
      <Fade>
        <p className='text-two'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas,
          quam ab nisi pariatur dolor reiciendis, soluta modi ducimus,
          consequuntur eveniet tenetur similique vitae sequi provident.
        </p>
      </Fade>
      <Fade right>
        <div className='about-img-two'>
          <img src={resturant2} alt='inside resturant' />
        </div>
      </Fade>
    </BodyStyled>
  );
};

export default AboutBody;
