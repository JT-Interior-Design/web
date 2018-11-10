import React from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';

import SubNav from '../components/navigation/subNav';
import './project.css';

export default ({ data }) => {
  const {
    cosmicjsNews: {
      content,
      metadata: {
        hero: { imgix_url },
      },
      title,
    },
  } = data;
  return (
    <PageTransition transitionTime={750}>
      <SubNav navLinks={['Home', 'Projects', 'Contact', 'About', 'News']} />
      <div className="Project__container">
        <h1>{title}</h1>
        <img className="Project__Jumbo" src={imgix_url} alt={title} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </PageTransition>
  );
};

export const pageQuery = graphql`
  query NEWS($id: String!) {
    cosmicjsNews(id: { eq: $id }) {
      title
      content
      metadata {
        hero {
          imgix_url
        }
      }
    }
  }
`;
