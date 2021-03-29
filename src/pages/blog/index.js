/** @jsx jsx */
import { Divider } from '@theme-ui/components'
import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../../components/layout'
import { jsx, Themed, Flex } from 'theme-ui'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

// import { stripHtml } from "string-strip-html";
// import { renderToString } from 'react-dom/server'
import Excerpt from '../../components/excerpt'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        {
            allContentfulBlogPost(sort:{fields:publishedDate, order:DESC}) {
                nodes {
                    title
                    slug
                    publishedDate (formatString:"YYYY/MM/DD")
                    excerpt {
                        excerpt
                    }
                    cover {
                        ... on ContentfulAsset {
                            contentful_id #required
                            __typename #required
                            gatsbyImageData(
                                resizingBehavior: FILL
                                cropFocus: BOTTOM
                                aspectRatio: 1
                                # resizingBehavior: CROP
                                layout: CONSTRAINED
                                quality: 75
                                width: 160
                                placeholder: BLURRED
                                formats: [WEBP, JPG]
                            )
                        }
                    }
                    body {
                        raw
                        references {
                            ... on ContentfulAsset {
                                contentful_id #required
                                __typename #required
                                gatsbyImageData(
                                    resizingBehavior: FILL
                                    cropFocus: CENTER
                                    aspectRatio: 1
                                    # resizingBehavior: CROP
                                    layout: CONSTRAINED
                                    quality: 75
                                    width: 160
                                    placeholder: BLURRED
                                    formats: [WEBP, JPG]
                                )
                            }
                        }
                    }
                }
            }
        }
    `)
    const length = data.allContentfulBlogPost.nodes.length
    return (
        <Layout title="BLOG" slogan="">
            <main sx={{ color: 'black' }} >
                {data.allContentfulBlogPost.nodes.map((node, idx) => (
                    <div key={idx}>
                        <div sx={{ py: '2' }}>
                            <Themed.h2><Link to={`/blog/${node.slug}`}>{node.title}</Link></Themed.h2>
                            <small sx={{ fontWeight: 'bold' }}>{node.publishedDate}</small>
                            <Flex>
                                {(node.cover || (node.body.references && node.body.references[0])) &&
                                    <div sx={{ mr: '1rem' }}>
                                        <GatsbyImage alt={node.title} objectFit='cover' objectPosition="center bottom" style={{ width: 160 }} layout="fixed" image={getImage(node.cover || (node.body.references && node.body.references[0]))}></GatsbyImage>
                                    </div>
                                }
                                <Excerpt
                                    link={`/blog/${node.slug}`}
                                    color='black'
                                    text={node.excerpt ? node.excerpt.excerpt : documentToPlainTextString(JSON.parse(node.body.raw))}
                                    lines={2}
                                    limit={144} />
                            </Flex>
                        </div>
                        {idx !== length - 1 ? <Divider /> : ''}
                    </div>
                ))}
            </main>
        </Layout>
    )
}
export default BlogPage