import React from 'react';
import GatsbyLink from 'gatsby-link';
import moment from 'moment';

import './NewsList.css';

export default ({ list }) => {
  return (
    <div className="NewsList">
      <h1>News</h1>

      <ul className="NewsList__list">
        {list.map(
          (
            {
              title,
              created_at,
              slug,
              metadata: {
                hero: { imgix_url },
              },
            },
            i
          ) => (
            <li key={i} className="NewsList__item">
              <img className="NewsList__item-img" src={imgix_url} />
              <div className="NewsList__item-title">
                {title}
                <div className="NewsList__createdAt">
                  {moment(created_at).format('dddd, MMMM Do YYYY')}
                </div>
                <div>
                  <GatsbyLink className="NewsList__link" to={`/news/${slug}`}>
                    <span>View Story</span>
                  </GatsbyLink>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
