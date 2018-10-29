import React from 'react';
import g from 'glamorous';
import Link from 'gatsby-link';
import './index.css';

export default class Projects extends React.PureComponent {
  state = {
    filter: 'All',
  };

  handleClick = ({ target: { textContent } }) =>
    this.setState({ filter: textContent });

  render() {
    const { data } = this.props;
    let categories = data.allCosmicjsProjects.edges.map(
      ({
        node: {
          metadata: { category },
        },
      }) => category,
    );

    categories = Array.from(new Set(categories));
    /* data.allCosmicjsProjects.edges = data.allCosmicjsProjects.edges.reduce(
      (acc, element) => [
        ...acc,
        element,
        element,
        element,
        element,
        element,
        element,
        element,
        element,
      ],
      [],
    ); */
    console.log(data);
    return (
      <g.Div height="100%" display="flex" flexDirection="column">
        <g.Div display="flex" flex={1}>
          <g.Div width="20%" borderRight="2px solid #dedebe" padding="30px 0">
            <g.H1 marginTop={0} padding={20}>
              Projects
            </g.H1>
            <g.Div
              className="Projects__sidebar"
              display="flex"
              flexDirection="column"
            >
              <button
                className={this.state.filter === 'All' && 'active'}
                onClick={this.handleClick}
              >
                All
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  className={this.state.filter === category && 'active'}
                  onClick={this.handleClick}
                >
                  {category}
                </button>
              ))}
            </g.Div>
          </g.Div>
          <g.Div
            flex={1}
            overflowY="scroll"
            display="grid"
            gridTemplateColumns="repeat(auto-fill, calc(33.367% - 1px))"
            gridGap={1}
            padding={1}
            gridAutoRows={250}
          >
            {data.allCosmicjsProjects.edges.map(
              ({
                node: {
                  slug,
                  metadata: {
                    hero: { imgix_url },
                    category,
                  },
                  title,
                },
              }) =>
                (this.state.filter === category ||
                  this.state.filter === 'All') && (
                  <div className="Projects__image-wrapper">
                    <g.Img
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      margin={0}
                      src={imgix_url}
                      alt={title}
                    />
                    <Link to={`/projects/${slug}`} key={title}>
                      <div className="Projects__overlay">
                        <span>{title}</span>
                      </div>
                    </Link>
                  </div>
                ),
            )}
          </g.Div>
        </g.Div>
      </g.Div>
    );
  }
}
