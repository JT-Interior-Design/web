import React from 'react';
import GatsbyLink from 'gatsby-link';
import moment from 'moment';

import './NewsList.css';

export default ({ list }) => {
  for (let i = 0; i < 3; i++) {
    list = list.concat(list);
  }
  // console.log(list);
  return (
    <div className="NewsList">
      <h1>News</h1>
      <ul className="NewsList__list">
        {list.map(({ title, created_at, slug }, i) => (
          <li key={i} className="NewsList__item">
            <div className="NewsList__item-title">{title}</div>
            <div className="NewsList__createdAt">
              {moment(created_at).format('dddd, MMMM Do YYYY')}
            </div>
            <GatsbyLink to={`/news/${slug}`}>View Story</GatsbyLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
