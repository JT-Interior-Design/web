import React from 'react';

import SubNav from '../components/navigation/subNav';

import './project.css';

export default ({ data }) => {
  const {
    cosmicjsProjects: {
      title,
      content,
      metadata: {
        images,
        hero: { imgix_url },
      },
    },
  } = data;

  return (
    <div className="Project__container">
      <SubNav navLinks={['Home', 'Projects', 'Contact', 'About', 'News']} />
      <h1>{title}</h1>
      <img src={imgix_url} alt={title} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div>
        {images.map(({ image }, i) => (
          <img key={i} src={image.imgix_url} alt={title} />
        ))}
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query POST($id: String!) {
    cosmicjsProjects(id: { eq: $id }) {
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
      }
    }
  }
`;
