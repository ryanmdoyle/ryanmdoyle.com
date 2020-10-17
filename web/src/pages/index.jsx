import React from "react"
import { Link, graphql } from "gatsby"
import { css } from '@emotion/core';

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Post from "../components/Post"

const IndexPage = ({ data }) => {
  const posts = data?.allStrapiPost?.edges;
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className='pageTitle'>Blog</h1>
      {posts?.map(post => (
        <Post
          title={post.node.title}
          content={post.node.content}
          publishedOn={post.node.publishedOn}
          slug={post.node.slug}
          categories={post.node.categories}
        />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    allStrapiPost(limit: 5) {
      edges {
        node {
          id
          title
          content
          publishedOn
          slug
          categories {
            id
            name
          }
        }
      }
    }
  }
`

export default IndexPage
