import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <h2>Hi from the second page</h2>
    <p>Welcome to page 2</p>
    <h3>Hi from the second page</h3>
    <p>Welcome to page 2</p>
    <h4>Hi from the second page</h4>
    <p>Welcome to page 2</p>
    <h5>Hi from the second page</h5>
    <p>Welcome to page 2</p>
    <h6>Hi from the second page</h6>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
