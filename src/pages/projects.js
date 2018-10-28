import React from 'react';
import g, { Sub } from 'glamorous';
import PageTransition from 'gatsby-plugin-page-transitions';

import Projects from '../components/projects';
import SubNav from '../components/navigation/subNav';

export default ({ data }) => {
  return (
    <PageTransition
      defaultStyle={{
        transition: '500ms',
        height: '100vh',
        transform: 'translateY(100%)',
      }}
      transitionStyles={{
        entering: { transform: 'translateY(100%)' },
        entered: { transform: 'none' },
      }}
      transitionTime={500}
    >
      <g.Div
        backgroundColor="rgba(255, 255, 255, 0.8)"
        flex={1}
        padding="30px"
        margin={20}
        display="flex"
        flexDirection="column"
        height="88%"
      >
        <SubNav navLinks={['Home', 'Contact', 'About', 'News']} />
        <Projects data={data} />
      </g.Div>
    </PageTransition>
  );
};

export const query = graphql`
  query MD_QUERY {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            images
            path
            title
            category
          }
        }
      }
    }
    allFile(
      filter: { extension: { eq: "jpg" }, sourceInstanceName: { eq: "img" } }
    ) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`;
