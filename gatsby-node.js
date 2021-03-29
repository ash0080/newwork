const { createOpenGraphImage } = require("gatsby-plugin-open-graph-images");
const path = require('path')
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
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
        createOpenGraphImage(createPage, {
            path: `/og/${post.slug}.png`,
            component: path.resolve(`src/templates/ogimg.js`),
            context: {
                title: post.title,
                slug: post.slug
            },
        });
    })
}