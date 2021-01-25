import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello.</h1>
      <h2>I am Benedict, a full stack developer based in Philippines. My hobbies are playing guitar, running, and cycling</h2>
    </Layout>
  )
}

export default IndexPage;