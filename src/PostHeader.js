import React from 'react';

import './styles/postHeader.css';

const PostHeader = props => (
  <div className="post_header">
    <img alt="avatar" src={props.avatar} />
    <div className="row">
      <p className="user_name">{props.name}</p>
      <p className="time_post">{props.time}</p>
    </div>
  </div>
);

export default PostHeader;
