import React from 'react';
import g from 'glamorous';

export default props => {
  const { data } = props;
  const imgDict = data.allFile.edges.reduce(
    (dict, { node: { publicURL, name } }) => {
      return {
        ...dict,
        [name]: publicURL,
      };
    },
    {},
  );
  console.log(imgDict);
  return (
    <g.Div height="100%" display="flex" flexDirection="column">
      <h1>Projects</h1>
      <g.Div display="flex" flex={1}>
        <g.Div width="20%" borderRight="2px solid #dedebe">
          <button>All</button>
          {data.allMarkdownRemark.edges.map(
            ({
              node: {
                frontmatter: { category },
              },
            }) => (
              <button key={category}>{category}</button>
            ),
          )}
        </g.Div>
        <g.Div flex={1} overflow="scroll">
          {data.allMarkdownRemark.edges.map(
            ({
              node: {
                frontmatter: {
                  images: [img],
                },
              },
            }) => {
              return <img key={img} src={imgDict[img]} alt={img} />;
            },
          )}
        </g.Div>
      </g.Div>
    </g.Div>
  );
};
