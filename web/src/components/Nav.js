import React from 'react';
import { css } from '@emotion/core';
import { Link } from "gatsby"

const list = css`
  position: relative;
  text-decoration: none;
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  li {
    text-align: center;
    margin-bottom: 2rem;
  }
  a {
    text-decoration: none;
    color: #333;
    width: auto;
  }
  
  @media (max-width: 799px) {
    flex-direction: row;
    justify-content: center;
    li {
      padding: 0 1rem;
      margin-bottom: 1rem;
    }
    :before {
      content: '';
      position: absolute;
      bottom: 0;
      height: 1px;
      width: 100%;
      background-image: var(--gradient);
      z-index:100;
    }
  }
`;

const underline = css`
  position: relative;
  transition: height 0.2s;
  :before {
    content: '';
    position: absolute;
    width: 0;
    height: 20%;
    bottom:0;
    left: 50%;
    background-image: linear-gradient(237deg, #c657ff 0%, #80D0C7 83%);
    z-index: -1;
    transition: transform 0.2s, width 0.2s, left 0.2s;
  }
  :hover {
    :before {
      left: -10%;
      width: 120%;
      transform: skew(-45deg);
    }
  }
`;

const Nav = () => {
  return (
    <nav>
      <ul css={list}>
        <li>
          <Link to='/'>
            <span css={underline}>Blog</span>
          </Link>
        </li>
        <li>
          <Link to='/about'>
            <span css={underline}>About</span>
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            <span css={underline}>Contact</span>
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default Nav;