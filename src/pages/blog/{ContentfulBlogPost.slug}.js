/** @jsx jsx */
import React from "react"
import { jsx, Flex, Divider, Embed } from 'theme-ui'
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../../components/layout'
import Comments from '../../components/comments'

const Bold = ({ children }) => <strong>{children}</strong>
const Text = ({ children }) => <p className="align-center">{children}</p>
const options = {
    renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
        [INLINES.HYPERLINK]: (node, children) => {
            if ((node.data.uri).includes("bilibili.com/player")) {
                return (
                    <Embed src={node.data.uri} />
                )
            } else {
                <a href={node.data.uri}>{children}</a>
            }
        },
        [INLINES.ENTRY_HYPERLINK]: (node, children) => {
            return (
                <a href={`/blog/${node.data.target.slug}`}>{node.data.target.title}</a>
            )
        },
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
        [BLOCKS.OL_LIST]: (node, children) => <ul>{children}</ul>,
        [BLOCKS.EMBEDDED_ASSET]: node => {
            if (node.data.target) {
                return (
                    <Flex sx={{ justifyContent: 'center', flexDirection: 'column', pb: '2rem' }}>
                        < GatsbyImage loading="eager" alt={node.data.target.description || ''} objectFit='cover' objectPosition="center center" image={getImage(node.data.target)} />
                        {node.data.target.description && <p sx={{ textAlign: 'center' }}>{node.data.target.description}</p>}
                    </Flex>
                )
            }
        },
        [BLOCKS.EMBEDDED_ENTRY]: node => {
            return (
                <a href={`/blog/${node.data.target.slug}`}>{node.data.target.title}</a>
            )
        }
    },
}

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            id
            title
            slug
            publishedDate(formatString: "YYYY/MM")
            body {
                raw
                references {
                    ... on ContentfulAsset {
                        contentful_id #required
                        __typename #required
                        description
                        gatsbyImageData(
                        # cropFocus: BOTTOM
                        # aspectRatio: 1
                        # resizingBehavior: CROP
                        layout: CONSTRAINED
                        quality: 75
                        width: 675
                        placeholder: BLURRED
                        formats: [WEBP, JPG]
                        )
                    }
                    ... on ContentfulBlogPost {
                        contentful_id #required
                        __typename #required
                        title
                        slug
                    }
                }
            }
        }
    }
`

const BlogTemplate = (props) => {
    const maxWidth = 1040
    // return <div>{body && renderRichText(body, options)}</div>
    return (
        <Layout maxWidth={maxWidth}>
            <div
                sx={{
                    display: 'flex',
                    flexDirection: ['column', 'column', 'row'],
                    flexWrap: 'wrap',
                }}>
                <main
                    sx={{
                        flex: 99999,
                        maxWidth: 675,
                        mr: [0, 0, '3rem']
                    }}>
                    <h1>{props.data.contentfulBlogPost.title}</h1>
                    {renderRichText(props.data.contentfulBlogPost.body, options)}
                    <Divider sx={{ pt: '4rem', display: ['block', 'block', 'none'] }} />
                </main>
                <aside
                    sx={{
                        minWidth: 300,
                        flex: 1,
                        flexBasis: 'sidebar',
                    }}>
                    <Comments />
                </aside>
            </div>
        </Layout>
    )

}

export default BlogTemplate