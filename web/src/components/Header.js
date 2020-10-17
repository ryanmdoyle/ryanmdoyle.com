import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { css } from '@emotion/core';

const headerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  a {
    color: black;
    text-decoration: none;
  }
`;

const underline = css`
  position: relative;
  transition: height 0.2s;
  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 10%;
    bottom:0;
    left:0;
    background-image: linear-gradient(237deg, #c657ff 0%, #80D0C7 83%);
    z-index: -1;
    transition: transform 0.2s, width 0.2s, left 0.2s;
  }
  :hover {
    :before {
      left: -5%;
      width: 110%;
      transform: skew(-45deg);
    }
  }
`;

const Header = ({ siteTitle }) => (
  <header css={headerStyle}>
    <h1 css={underline}>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
