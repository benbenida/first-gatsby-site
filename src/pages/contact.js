import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
   return (
      <div>
         <Layout>
            <Head title="Contact" />
         <h1>
            Contacts
         </h1>
         <p>
            You can contact me thru
            <ul>
               <li>Facebook: Benedict Clyd Benida</li>
               <li>Twitter: <Link to="https://twitter.com/clydbenida">@clydbenida</Link></li>
               <li>Email: benedictclydb@gmail.com</li>
            </ul>
         </p>
         </Layout>
      </div>
   )
}

export default ContactPage;