import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.png';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const FooterStyle = styled.footer`
  width: 100%;
  min-height: 25vh;
  margin-top: 2em;
  padding: 0.6em 0;
  text-align: center;
  color: var(--second-color);
  background: #296696;
  background: -moz-linear-gradient(top, #296696 0%, #274d69 85%, #2c5775 100%);
  background: -webkit-linear-gradient(
    top,
    #296696 0%,
    #274d69 85%,
    #2c5775 100%
  );
  background: linear-gradient(to bottom, #296696 0%, #274d69 85%, #2c5775 100%);

  .logo {
    display: block;
    width: 125px;
    margin: 0 auto;
  }

  .social {
    svg {
      margin: 0.2em 0.5em;
      font-size: 1.6em;
      transition: var(--transition-4s);

      &:hover,
      &:focus,
      &:active {
        color: var(--grey-color);
      }
    }
  }

  p {
    padding-bottom: 0.4em;
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <Link to='/' className='logo'>
        <img src={Logo} alt='logo' />
      </Link>
      <p>850 s main dr, chicago, Il, 60432</p>
      <p>+1-800-456-8970</p>
      <div className='social'>
        <FaInstagram />
        <FaFacebook />
      </div>
      <p>Coded by: Eduardo Rivas</p>
    </FooterStyle>
  );
};

export default Footer;
