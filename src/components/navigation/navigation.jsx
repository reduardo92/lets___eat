import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.png';
import { FaInstagram, FaFacebook, FaPhone, FaMapMarker } from 'react-icons/fa';

const Header = styled.header`
  /* set fixed  */
  position: ${props => props.hideScroll};
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;

  background-color: white;
  position: ${props => props.position};
  margin-bottom: ${props => props.bottom};

  .info {
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    padding: 2px 10px;
    color: var(--grey-color);

    p {
      font-size: 0.9rem;
    }
    svg {
      color: var(--main-color-two);
    }
  }

  .social {
    align-self: center;
    svg {
      margin: 0 0.5em;
      transition: var(--transition-4s);

      &:hover,
      &:focus,
      &:active {
        color: var(--grey-color);
      }
    }
  }

  .logo {
    width: 125px;
    display: inline-block;
    margin-top: 10px;
    margin-left: 20px;
  }

  .burger-toggle {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 40px;
    right: 20px;
    padding: 1em;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);

    &:hover div,
    &:focus div,
    &:active div {
      background-color: var(--grey-color);
    }
    div {
      transition: all 0.2s ease-in-out;
      width: 35px;
      height: 4px;
      margin: 5px 0;
      background-color: var(--main-color-two);
    }
  }

  .nav-links {
    transition: all 0.2s ease-in-out;
    display: none;

    &_item {
      /* flex: 1; */
      display: block;
      text-align: center;
      color: var(--main-color-two);
      text-shadow: 0px 0.2px 0.5px black;
      outline: none;
      padding: 15px;
      font-size: 1.1rem;
      font-weight: bold;
      text-transform: uppercase;
      transition: all 0.5s ease-in-out;

      &:hover,
      &:focus,
      &:active {
        color: #214158;
        background-color: var(--grey-color);
      }
    }
  }

  .active {
    display: block;
    height: 100%;
  }

  /* ================================= 
  Media Queries
==================================== */

  @media screen and (min-width: 760px) {
    .info {
      .addres {
        display: flex;
        width: 60%;
        justify-content: space-around;

        p {
          font-size: 1.05rem;
        }
      }

      .social {
        svg {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media screen and (min-width: 1020px) {
    .contain {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-bottom: 0;
      align-items: center;
      margin: 0 auto;
      max-width: 1800px;
    }

    .info {
      .addres {
        justify-content: flex-start;

        p {
          margin-right: 3em;
        }
      }
    }

    .nav-links {
      display: flex;
      flex-direction: row;
      align-self: flex-end;
      margin-right: 2em;

      &_item {
        font-size: 1.25rem;
      }
    }

    .logo {
      margin-top: 0;
    }

    .burger-toggle {
      display: none;
    }

    .logo:hover,
    .nav-links_items:hover {
      color: black;
    }
  }
`;

const Navigation = props => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef();

  useEffect(
    () =>
      window.addEventListener('scroll', () => {
        if (window.scrollY > navRef.current.offsetHeight) {
          document.body.style.paddingTop = `${navRef.current.offsetHeight}px`;
          setScrolled(true);
        } else {
          document.body.style.paddingTop = 0;
          setScrolled(false);
        }
      }),
    []
  );
  return (
    <Header ref={navRef} hideScroll={scrolled ? 'fixed' : 'relative'}>
      <div className='contain'>
        <div className='info'>
          <div className='addres'>
            <p>
              <FaMapMarker /> 850 s main dr, chicago, Il, 60432
            </p>
            <p>
              <FaPhone /> (800)-456-8970
            </p>
          </div>
          <div className='social'>
            <FaInstagram />
            <FaFacebook />
          </div>
        </div>
        <Link to='/' className='logo'>
          <img src={Logo} alt='logo' />
        </Link>

        <button onClick={() => setToggle(!toggle)} className='burger-toggle'>
          <div />
          <div />
          <div />
        </button>

        <nav className={`nav-links ${toggle ? 'active' : ''}`}>
          <NavLink
            onClick={() => setToggle(!toggle)}
            to='/'
            className='nav-links_item'
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setToggle(!toggle)}
            to='/about'
            className='nav-links_item'
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setToggle(!toggle)}
            to='/menu'
            className='nav-links_item'
          >
            Menu
          </NavLink>
          <NavLink
            onClick={() => setToggle(!toggle)}
            to='/atmosphere'
            className='nav-links_item'
          >
            Atmosphere
          </NavLink>
        </nav>
      </div>
    </Header>
  );
};

export default Navigation;
