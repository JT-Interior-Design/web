import React from 'react';
import g from 'glamorous';
import Bricks from 'bricks.js';
import PageTransition from 'gatsby-plugin-page-transitions';

import SubNav from '../components/navigation/subNav';

import './project.css';

export default class Project extends React.Component {
  componentDidMount() {
    console.log(this.imageGrid);
    this.instance = Bricks({
      container: '.Project__brick',
      sizes: [
        { columns: 1, gutter: 3 },
        { mq: '900px', columns: 2, gutter: 3 },
        { mq: '1200px', columns: 3, gutter: 3 },
      ],
      packed: 'data-packed',
    });
    this.instance.resize(true).pack();
  }

  componentDidUpdate() {
    this.instance && this.instance.resize(true).pack();
  }

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
              <g.Div width={320}>
                <img
                  className="Project__Img"
                  key={i}
                  src={image.imgix_url}
                  alt={title}
                />
              </g.Div>
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
