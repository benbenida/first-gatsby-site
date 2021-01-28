import React from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery, Link } from 'gatsby';
import blogStyles from './blog.module.scss';
import Head from '../components/head';

const BlogPage = () => {
   const data = useStaticQuery(graphql`
      query {
         allContentfulBlogPost (
            sort:{
               fields:publishedDate,
               order:DESC
            }
         ) {
            edges {
               node {
                  contentful_id
                  title
                  slug
                  publishedDate (formatString: "MMMM Do, YYYY")
               }
            }
         }
      }
   `)
   return (
      <div>
         <Layout>
            <Head title="Blogs"/>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
               {data.allContentfulBlogPost.edges.map((edge) => {
                  return (
                     <li key={edge.node.contentful_id} className={blogStyles.post}>
                        <Link to={`/blog/${edge.node.slug}`}>
                        <h2>{edge.node.title}</h2>
                        <p>{edge.node.publishedDate}</p>
                        </Link>
                     </li>
                  )
               })}
            </ol>
         </Layout>
      </div>
   )
}

export default BlogPage;