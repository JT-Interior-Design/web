import React from 'react';
import g from 'glamorous';
import PageTransition from 'gatsby-plugin-page-transitions';

import SubNav from '../components/navigation/subNav';
import { preventDefault } from '../components/Carousel';
import NewsList from '../components/news/NewsList';
import { TRANSITION_TIME } from '../GLOBALS';

export default ({ data }) => {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = null; // modern standard
  window.onmousewheel = document.onmousewheel = null; // older browsers, IE
  window.ontouchmove = null; // mobile
  document.onkeydown = null;

  console.log(data);

  return (
    <PageTransition
      defaultStyle={{
        transition: '750ms',
        height: 'calc(100vh - 50px)',
        transform: 'translateX(-100%)',
        display: 'flex',
      }}
      transitionStyles={{
        entering: { transform: 'translateX(-100%)' },
        entered: { transform: 'none' },
      }}
      transitionTime={TRANSITION_TIME}
    >
      <g.Div
        backgroundColor="rgba(255, 255, 255, 0.8)"
        flex={1}
        marginTop={20}
        padding={50}
        display="flex"
        flexDirection="column"
        height="calc(100% - 40px)"
        borderRadius={4}
      >
        <SubNav navLinks={['Home', 'Contact', 'About', 'Projects']} />
        <NewsList list={data.allCosmicjsNews.edges.map(({ node }) => node)} />
      </g.Div>
    </PageTransition>
  );
};

export const pageQuery = graphql`
  query ALL_NEWS {
    allCosmicjsNews {
      edges {
        node {
          title
          slug
          created_at
        }
      }
    }
  }
`;
