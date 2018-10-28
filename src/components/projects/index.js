import React from 'react';
import g from 'glamorous';
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

    console.log(data);
    return (
      <g.Div height="100%" display="flex" flexDirection="column">
        <h1>Projects</h1>
        <g.Div display="flex" flex={1}>
          <g.Div
            className="Projects__sidebar"
            display="flex"
            flexDirection="column"
            width="20%"
            borderRight="2px solid #dedebe"
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
          <g.Div
            flex={1}
            overflow="scroll"
            display="grid"
            gridTemplateColumns="repeat(auto-fill, 450px)"
            gridGap={15}
            gridTemplateRows="repeat(auto-fit, 250px)"
            padding={20}
          >
            {data.allCosmicjsProjects.edges.map(
              ({
                node: {
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
                      src={imgix_url}
                      alt={title}
                      key={title}
                    />
                    <div className="Projects__overlay">
                      <span>{title}</span>
                    </div>
                  </div>
                ),
            )}
          </g.Div>
        </g.Div>
      </g.Div>
    );
  }
}
