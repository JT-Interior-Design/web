import React from 'react';
import g from 'glamorous';
import PageTransition from 'gatsby-plugin-page-transitions';

import SubNav from '../components/navigation/subNav';
import { preventDefault } from '../components/Carousel';
import NewsList from '../components/news/NewsList';

export default ({ data }) => {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = null; // modern standard
  window.onmousewheel = document.onmousewheel = null; // older browsers, IE
  window.ontouchmove = null; // mobile
  document.onkeydown = null;
  return (
    <PageTransition
      defaultStyle={{
        transition: '500ms',
        height: 'calc(100vh - 50px)',
        transform: 'translateX(-100%)',
      }}
      transitionStyles={{
        entering: { transform: 'translateX(-100%)' },
        entered: { transform: 'none' },
      }}
      transitionTime={500}
    >
      <g.Div
        backgroundColor="rgba(255, 255, 255, 0.8)"
        flex={1}
        margin={20}
        padding={50}
        display="flex"
        flexDirection="column"
        height="calc(100% - 40px)"
        borderRadius={4}
      >
        <SubNav navLinks={['Home', 'Contact', 'About', 'Projects']} />
        <NewsList
          list={[
            {
              title: 'New in Architectural Design',
              slug: 'new-in-architectural-design',
              content:
                '<h2>Hello World</h2><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At eos, minima quidem pariatur consequatur natus temporibus laudantium quas, aspernatur nobis nisi voluptatem ipsam debitis odio. Cupiditate, culpa harum. Quo, nisi!</p>',
              created_at: new Date().toISOString(),
            },
          ]}
        />
      </g.Div>
    </PageTransition>
  );
};
