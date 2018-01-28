import React from 'react';

export default function(props) {
  return (
    <div className="film-list-wrapper">
      <h1>Films</h1>
      {
        props.films.results &&
        <ul className="film-list">
          {props.films.results.map((item) => (
            <li key={item.id} className="film-list-item">
              <div>{item.title}</div>
              <div>{item.year}</div>
              <div>
                <img src={item.img_url} />
              </div>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};
