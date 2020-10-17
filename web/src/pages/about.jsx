import React from 'react';

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ContactForm from '../components/ContactForm';

const about = () => {
  return (
    <Layout>
      <SEO title='About' />
      <h1 className='pageTitle'>About Me</h1>
      <ContactForm />
    </Layout>
  );
};

export default about;