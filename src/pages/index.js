import React from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';
import { navigateTo } from 'gatsby-link';

import Navigation from '../components/navigation/Navigation';
import Carousel from '../components/Carousel';
import Loading from '../components/loading/Loading';

import './index.css';

export default class extends React.Component {
  state = {
    defaultStyles: {
      opacity: 0,
    },
    transitionStyles: {
      entering: {
        opacity: 0,
      },
      entered: {
        opacity: 1,
      },
    },
  };

  handleNavClick = to => {
    let defaultStyles, transitionStyles;
    switch (to) {
      case '/about':
        defaultStyles = {
          transform: 'translateX(-100%)',
        };
        transitionStyles = {
          entering: { transform: 'translateX(-100%)' },
          entered: { transform: 'translate(0%)' },
        };
        break;
      case '/contact':
        defaultStyles = {
          transform: 'translateY(-100%)',
        };
        transitionStyles = {
          entering: { transform: 'translateY(-100%)' },
          entered: { transform: 'translate(0%)' },
        };
        break;
      case '/projects':
        defaultStyles = {
          transform: 'translateY(100%)',
        };
        transitionStyles = {
          entering: { transform: 'translateY(100%)' },
          entered: { transform: 'translate(0%)' },
        };
        break;
      default:
        return;
    }
    this.setState({ defaultStyles, transitionStyles }, () => navigateTo(to));
  };

  render() {
    const images = this.props.data.allFile.edges.map(
      ({ node: { publicURL } }) => publicURL,
    );
    // console.log(images);
    let loading = false;
    if (!sessionStorage.getItem('loading')) {
      loading = true;
      sessionStorage.setItem('loading', 'loading');
    }
    return (
      <PageTransition
        defaultStyle={{
          height: '100vh',
          transition: '500ms ',
          ...this.state.defaultStyles,
        }}
        transitionStyles={this.state.transitionStyles}
        transitionTime={1000}
      >
        <div className="Container">
          {loading ? <Loading className="Loading" /> : null}
          <Navigation onNavClick={this.handleNavClick} />
          <div className="Carousel-Container">
            <Carousel images={images} />
          </div>
        </div>
      </PageTransition>
    );
  }
}

export const query = graphql`
  query CAROUSEL_QUERY {
    allFile(
      filter: {
        extension: { eq: "jpg" }
        sourceInstanceName: { eq: "carousel" }
      }
      sort: { fields: [name], order: ASC }
    ) {
      edges {
        node {
          relativePath
          publicURL
        }
      }
    }
  }
`;
