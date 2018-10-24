import React from 'react';
import g from 'glamorous';
import PageTransition from 'gatsby-plugin-page-transitions';
import Link from 'gatsby-link';

import Projects from '../components/projects';

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
        <div className="Nav">
          <Link to="/" className="NavLink NavLink--Nav">
            Home
          </Link>
          <Link to="/about" className="NavLink NavLink--Nav">
            About
          </Link>
          <Link to="/contact" className="NavLink  NavLink--Nav">
            Contact
          </Link>
          <Link to="/blog" className="NavLink NavLink--Nav">
            News
          </Link>
        </div>
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
