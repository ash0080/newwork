/** @jsx jsx */
import React from "react"
import Layout from '../components/layout'
// import Card from '../components/card'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { jsx, Grid, Button, Flex, useThemeUI } from 'theme-ui'

import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import preview from '../images/preview.jpg'
// import { stripHtml } from "string-strip-html";
// import { renderToString } from 'react-dom/server'
import Excerpt from '../components/excerpt'
import { Helmet } from 'react-helmet'

const Text = ({ children }) => <p className="align-center">{children}</p>
const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      // return <pre><code>{JSON.stringify(node)}</code></pre>
      // if ((node.data.uri).includes("bilibili.com/player")) {
      return <a href={node.data.uri} target="_blank" rel="noreferrer">{children}</a>
      // }
    },
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
}
const getRatioFromIdx = idx => {
  switch (idx % 6) {
    case 0:
    case 4:
      return 1
    case 1:
    case 3:
      return 2 / 3
    case 2:
    case 5:
      return 2 / 1
    default:
  }
}
const getColumnsPosition = idx => {
  switch (idx % 6) {
    case 0:
      return {
        gridColumnStart: 1,
        gridColumnEnd: 4,
        // aspectRatio: '1/1'
      }
    case 1:
      return {
        gridColumnStart: 4,
        gridColumnEnd: 6,
        // aspectRatio: '2/3'
      }
    case 2:
    case 5:
      return {
        gridColumnStart: 1,
        gridColumnEnd: 6,
        aspectRatio: '2/1'
      }
    case 3:
      return {
        gridColumnStart: 1,
        gridColumnEnd: 3,
        // aspectRatio: '2/3'
      }
    case 4:
      return {
        gridColumnStart: 3,
        gridColumnEnd: 6,
        // aspectRatio: '1/1'
      }
    default:
  }
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulPage(title: { eq: "Home" }) {
        title
        slogan
        posts {
          ... on ContentfulBlogPost {
            title
            slug
            excerpt {
              excerpt
            }
            cover {
              ... on ContentfulAsset {
                contentful_id #required
                __typename #required
                description
                gatsbyImageData(
                  # cropFocus: BOTTOM
                  # aspectRatio: 1
                  # resizingBehavior: CROP
                  quality: 75
                  placeholder: BLURRED
                  formats: [WEBP, JPG]
                )
              }
            }
            body {
              raw
            }
          }
          ... on ContentfulHeroCard {
            title
            excerpt {
              excerpt
            }
            cover {
              ... on ContentfulAsset {
                contentful_id #required
                __typename #required
                description
                gatsbyImageData(
                  # cropFocus: BOTTOM
                  # aspectRatio: 1
                  # resizingBehavior: CROP
                  quality: 75
                  placeholder: BLURRED
                  formats: [WEBP, JPG]
                )
              }
            }
            button {
              raw
            }
          }
        }
      }
    }
  `)
  const { theme } = useThemeUI()
  const em2px = str => parseInt(str) * 16
  const fluidSize = (sizes) => {
    const breaks = theme.breakpoints || []
    if (breaks.length.length === 0 || breaks.length > sizes.length) throw new Error(`Arguments should be an array >=${breaks.length} length`)
    const results = []
    for (let i = 0; i < breaks.length - 1; i++) {
      const m = (sizes[i + 1] - sizes[i]) / (em2px(breaks[i + 1]) - em2px(breaks[i]))
      const b = Math.round(sizes[i] - m * em2px(breaks[i]))
      results.push(`calc(${m * 100}vw ${b >= 0 ? '+' : '-'} ${Math.abs(b)}px)`)
    }
    results.unshift(results[0])
    results.push(sizes[breaks.length - 1])
    return results
  }

  return (
    <Layout title={"NEWWORK"} slogan={data.contentfulPage.slogan}>
      <Helmet
        encodeSpecialCharacters={true}
        defer={false}
      >
        <html lang="zh" amp />
        <title>NEWWORK.CC</title>
        <meta name="description" content="串烤单词,像撸串一样记忆单词" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newwork.cc" />
        <meta property="og:description" content="串烤单词,像撸串一样记忆单词" />
        <meta property="og:title" content="NEWWORK" />
        <meta property="og:image" content={preview} />
        <link rel="canonical" href="https://newwork.cc" />
      </Helmet>
      <Grid columns={'repeat(5,1fr)'} sx={{ gridAutoRows: 'min-content' }} >
        {data.contentfulPage.posts.map((post, idx) => (
          <Flex key={idx} sx={Object.assign({ transform: 'translateZ(0)', position: 'relative', color: 'white', borderRadius: '.5rem', overflow: 'hidden' }, getColumnsPosition(idx))}>
            {post.cover && <GatsbyImage alt={post.title} style={{ width: "100%", height: '100%' }} objectFit='cover' layout="fullWidth" image={getImage(post.cover)}></GatsbyImage>}
            <div sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: getRatioFromIdx(idx) === 2 ? "65%" : "100%",
              height: '100%',
              p: [2, 3, 4],
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h2 key={post.slug} sx={{ marginBlockStart: 0, fontSize: fluidSize([20, 24, 28, 28]) }}>
                {post.slug ? <Link sx={{ color: 'white' }} to={`/blog/${post.slug}`}>{post.title}</Link> : post.title}
              </h2>
              {/* <p sx={{ lineHeight: 1.15, fontSize: fluidSize([10, 18, 22, 22]) }} >
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              </p> */}
              {/* <p>
                {post.excerpt ? post.excerpt.excerpt : documentToPlainTextString(JSON.parse(post.body.raw))}
              </p> */}
              <Excerpt
                style={{ lineHeight: [1.25, 1.5], fontSize: fluidSize([15, 18, 22, 22]) }}
                link={post.slug && `/blog/${post.slug}`}
                color='white'
                more=''
                text={post.excerpt ? post.excerpt.excerpt : documentToPlainTextString(JSON.parse(post.body.raw))}
                lines={2}
                limit={72} />
              {
                post.button &&
                <Button variant="round" sx={{ mt: 'auto' }}>
                  {renderRichText(post.button, options)}
                </Button>
              }
            </div>
          </Flex>
        ))}
      </Grid>
    </Layout >
  )
}

export default IndexPage
