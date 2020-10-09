const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
        {
            allWpPage {
                nodes {
                    slug
                }
            }
            allWpPost(sort: { fields: date }) {
                nodes {
                    slug
                    ImageArticle {
                        imageisrequired
                    }
                    QuestionArticle {
                        questionisrequired
                    }
                    TextArticle {
                        textisrequired
                    }
                    VideoArticle {
                        videoisrequired
                    }
                }
            }
        }
    `).then(result => {
        //Create Posts
        result.data.allWpPost.nodes.forEach((node) => { 
            //If Post is an ImagePost  
            if(node.ImageArticle.imageisrequired)
            {
                createPage({
                    path: node.slug,
                    component: path.resolve('./src/templates/post/image.js'),
                    context: {
                        slug: node.slug,
                    },
                }) 
            }
            //If Post is a QuestionPost 
            else if(node.QuestionArticle.questionisrequired)
            {
                createPage({
                    path: node.slug,
                    component: path.resolve('./src/templates/post/question.js'),
                    context: {
                        slug: node.slug,
                    },
                }) 
            } 
            //If Post is a TextPost 
            else if(node.TextArticle.textisrequired)
            {
                createPage({
                    path: node.slug,
                    component: path.resolve('./src/templates/post/text.js'),
                    context: {
                        slug: node.slug,
                    },
                }) 
            } 
            //If Post is a VideoPost 
            else if(node.VideoArticle.videoisrequired)
            {
                createPage({
                    path: node.slug,
                    component: path.resolve('./src/templates/post/video.js'),
                    context: {
                        slug: node.slug,
                    },
                }) 
            } 
            else {
                createPage({
                    path: node.slug,
                    component: path.resolve('./src/templates/post/default.js'),
                    context: {
                        slug: node.slug,
                    },
                }) 
            }
        })

        //Create pages
        result.data.allWpPage.nodes.forEach((node) => {
            createPage({
                path: node.slug,
                component: path.resolve('./src/templates/page/example.js'),
                context: {
                    slug: node.slug,
                },
            })
        })
    })
}