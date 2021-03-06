import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Head from '../components/head';

export const query = graphql`
   query ($slug: String!) {
      contentfulBlogPost(slug: {eq: $slug}) {
         id
         title
         publishedDate(formatString: "MMMM Do, YYYY")
         body {
            raw
            references {
               ... on ContentfulAsset {
                  contentful_id
                  title
                  file {
                     url
                  }
               }
            }
         }
      }
   }
`

const Blog = (props) => {
   const body = JSON.parse(props.data.contentfulBlogPost.body.raw);

   const options = {
      renderNode: {
         [BLOCKS.EMBEDDED_ASSET]: node => {
            console.log(node);
            const imageID = node.data.target.sys.id;
            const {
               file: {url}, 
               title
            } = props.data.contentfulBlogPost.body.references.find(({contentful_id: id}) => id === imageID);

            return <img src={url} alt={title} />
         }
      }
   }

   return (
      <Layout>
         <Head title={props.data.contentfulBlogPost.title}/>
         <h1>{props.data.contentfulBlogPost.title}</h1>
         <p>{props.data.contentfulBlogPost.publishedDate}</p>
         {documentToReactComponents(body, options)}
      </Layout>
   )
}

export default Blog