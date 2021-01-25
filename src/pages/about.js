import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
   return (
      <div>
         <Layout>
            <Head title="About"/>
            <h1>About</h1>
            <p>Hello I am Benedict, and I am a fullstack developer based in Philippines</p>
            <p>I want to learn gatsby to use this as a tool as I work as a developer.</p>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
         </Layout>
      </div>
   )
}

export default AboutPage;