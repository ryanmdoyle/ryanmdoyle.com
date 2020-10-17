import React from 'react';

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ContactForm from '../components/ContactForm';

const contact = () => {
  return (
    <Layout>
      <SEO title='Contact' />
      <h1 className='pageTitle'>Contact me!</h1>
      <ContactForm />
    </Layout>
  );
};

export default contact;