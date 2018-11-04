import React from 'react';
import g from 'glamorous';
import PageTransition from 'gatsby-plugin-page-transitions';

import Projects from '../components/projects';
import SubNav from '../components/navigation/subNav';
import { preventDefault } from '../components/Carousel';
import { TRANSITION_TIME } from '../GLOBALS';

export default ({ data }) => {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = null; // modern standard
  window.onmousewheel = document.onmousewheel = null; // older browsers, IE
  window.ontouchmove = null; // mobile
  document.onkeydown = null;
  return (
    <PageTransition
      defaultStyle={{
        transition: `${TRANSITION_TIME}ms`,
        height: 'calc(100vh - 50px)',
        transform: 'translateY(-100%)',
      }}
      transitionStyles={{
        entering: { transform: 'translateY(-100%)' },
        entered: { transform: 'none' },
      }}
      transitionTime={TRANSITION_TIME}
    >
      <g.Div
        backgroundColor="rgba(255, 255, 255, 0.8)"
        flex={1}
        margin={20}
        display="flex"
        flexDirection="column"
        height="95%"
        borderRadius={4}
      >
        <SubNav navLinks={['Home', 'Contact', 'About', 'News']} />
        <Projects data={data} />
      </g.Div>
    </PageTransition>
  );
};

export const query = graphql`
  query COSMIC_QUERY {
    allCosmicjsProjects {
      edges {
        node {
          slug
          title
          content
          metadata {
            images {
              image {
                imgix_url
              }
            }
            hero {
              imgix_url
            }
            category
          }
        }
      }
    }
  }
`;
