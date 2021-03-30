const { createImage } = require('gatsby-remark-opengraph')
const path = require('path')


exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        {
            allContentfulBlogPost {
                nodes {
                    title
                    slug
                }
            }
        }
    `)
    data.allContentfulBlogPost.nodes.forEach(post => {

        createImage({
            filename: `${post.slug}.jpg`,
            outputPath: path.join('./public', 'og'),
            background: require.resolve(
                './src/images/og-background.png'
            ),
            width: 1200,
            height: 630,
            texts: [
                {
                    text: post.title,
                    color: '#110d47',
                    font: require.resolve('./src/fonts/SourceHanSansSC-Medium.ttf'),
                    fontSize: 100,
                    x: 75,
                    y: 100,
                    maxWidth: 1050,
                    maxHeight: 400
                    // verticalAlign: 'bottom',
                },
                {
                    text: `http://newwork.cc/blog/${post.slug}`,
                    color: '#110d47',
                    font: require.resolve('./src/fonts/SourceHanSansSC-Medium.ttf'),
                    fontSize: 32,
                    x: 75,
                    y: 562,
                    maxWidth: 930,
                    maxHeight: 32,
                    verticalAlign: 'bottom',
                    // verticalAlign: 'bottom',
                },
            ],
        })
    })
}