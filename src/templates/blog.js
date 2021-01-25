import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../components/head';

export const query = graphql`
   query ($slug: String!) {
      contentfulBlogPost(slug: {eq: $slug}) {
         title
         publishedDate(formatString: "MMMM Do, YYYY")
         body {
            raw
         }
      }
   }
`

const Blog = (props) => {
   const body = JSON.parse(props.data.contentfulBlogPost.body.raw);
   // const options = {
   //    renderNode: {
   //       "embedded-asset-block": (node) => {

   //       }
   //    }
   // }

   return (
      <Layout>
         <Head title={props.data.contentfulBlogPost.title}/>
         <h1>{props.data.contentfulBlogPost.title}</h1>
         <p>{props.data.contentfulBlogPost.publishedDate}</p>
         {documentToReactComponents(body)}
      </Layout>
   )
}

export default Blog