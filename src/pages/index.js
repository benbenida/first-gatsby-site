import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello.</h1>
      <h2>I am Benedict, a full stack developer based in Philippines.</h2>
      <h4>My hobbies are playing guitar and cycling</h4>
    </Layout>
  )
}

export default IndexPage;