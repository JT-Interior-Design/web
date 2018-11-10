import React from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';

import SubNav from '../components/navigation/subNav';

import './project.css';

export default class Project extends React.Component {
  setLandscape = () => {
    if (this.imageGrid) {
      const children = Array.from(this.imageGrid.children);

      for (let div of children) {
        const image = div.querySelector('img');
        const landscape = image.naturalHeight < image.naturalWidth;
        if (landscape) div.classList.add('landscape');
      }
    }
  };

  componentDidMount() {
    this.setLandscape();
  }

  handleImageLoad = i => {
    if (i === this.props.data.cosmicjsProjects.metadata.images.length - 1) {
      this.setLandscape();
    }
  };

  render() {
    const { data } = this.props;

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
      <PageTransition transitionTime={750}>
        <div className="Project__container">
          <SubNav navLinks={['Home', 'Projects', 'Contact', 'About', 'News']} />
          <h1>{title}</h1>
          <img className="Project__Jumbo" src={imgix_url} alt={title} />
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <div ref={node => (this.imageGrid = node)} className="Project__brick">
            {images.map(({ image }, i) => (
              <div>
                <img
                  className="Project__Img"
                  key={i}
                  src={image.imgix_url}
                  alt={title}
                  onLoad={() => this.handleImageLoad(i)}
                />
              </div>
            ))}
          </div>
        </div>
      </PageTransition>
    );
  }
}
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
