import React from 'react';
import { hashHistory } from 'react-router'

export default function(props) {
  const { item } = props;
  return (
    <li className="film-list-item w-25-l w-100 tc pa4">
      <div className="bg-white" onClick={() => hashHistory.push(`films/${item.id}`)}>
        <h5 className="title pa2 f5 mv2">{item.title}</h5>
        <h6 className="year pa2 f6 mv2">{item.year}</h6>
        <div className="image" style={{
          backgroundImage: `url(${item.img_url})`
        }}>
        </div>
      </div>
    </li>
  );
};
