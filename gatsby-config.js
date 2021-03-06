module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 10000,
      },
    },
    'gatsby-plugin-glamor',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/projects/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'carousel',
        path: `${__dirname}/src/nav_carousel/`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-cosmicjs',
      options: {
        bucketSlug: 'jt-interior-design',
        objectTypes: ['news', 'projects', 'carousels'],
        apiKeys: {
          readKey: '',
        },
      },
    },
    'gatsby-plugin-react-helmet'
  ],
};
