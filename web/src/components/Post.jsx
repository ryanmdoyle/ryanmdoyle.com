import React from 'react';
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { Link } from "gatsby"
import { css } from '@emotion/core';
import { DateTime } from 'luxon';

const blogData = css`
  color: grey;
  display: block;
  margin-bottom: 0.5rem;
  position: relative;
  top: -1rem;
  z-index: 0;
`;

const postTitle = css`
    padding: 1rem 0 0.5rem;
    display: block;
    position: sticky;
    top: 3.5rem;
    background-color: white;
    z-index: 1;

    animation-name: titleColorB;
    animation-duration: 0.5s;
    animation-fill-mode: both;

    :before {
      content: '';
      position: absolute;
      width: 100%;
      height: 5%;
      bottom:0;
      left: -100%;
      background-image: linear-gradient(237deg, #c657ff 0%, #80D0C7 83%);
      z-index: -1;
      transition: left 0.3s;
    }
    :hover {
      animation-name: titleColor;
      animation-duration: 0.5s;
      animation-fill-mode: both;
    }
    :hover:before {
      left: 0;
    }
    @keyframes titleColor {
      0% {color: var(--pink);}
      100% { color: var(--green);}
    }
    @keyframes titleColorB {
      0% { color: var(--green);}
      50% {color: var(--pink);}
      100% { color: #333;}
    }

`;

const Post = ({ title, content, publishedOn, categories }) => {
  const publishDate = DateTime.fromISO(publishedOn).toFormat('DDD');
  const publishTime = DateTime.fromISO(publishedOn).toFormat('h:mm');
  const hr = DateTime.fromISO(publishedOn).toFormat('H');
  return (
    <div css={css`padding-bottom: 1.5rem;`}>
      <Link to='/about'>
        <span className='h2' css={postTitle}>{title}</span>
      </Link>
      <span css={blogData}>
        {publishDate} at {publishTime} {hr >= 12 ? 'pm' : 'am'} - {categories.map(cat => <span key={cat.id}>{cat.name}</span>)}
      </span>
      <ReactMarkdown
        children={content}
        transformImageUri={(uri) => `http://localhost:1337${uri}`}
      />
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  publishedOn: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  categories: PropTypes.array,
}

export default Post;