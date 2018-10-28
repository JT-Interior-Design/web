const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allCosmicjsProjects(limit: 1000) {
              edges {
                node {
                  id
                  slug
                }
              }
            }
          }
        `,
      ).then(result => {
        if (result.errors) {
          reject(new Error(result.errors));
        }

        const postTemplate = path.resolve(
          `${__dirname}/src/templates/project-template.js`,
        );

        result.data.allCosmicjsProjects.edges.forEach(edge => {
          createPage({
            path: `/projects/${edge.node.slug}/`,
            component: postTemplate,
            context: {
              id: edge.node.id,
            },
          });
        });

        return;
      }),
    );
  });
};
