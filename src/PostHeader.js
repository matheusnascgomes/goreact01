import React from 'react';

import './styles/postHeader.css';

const PostHeader = () => (
  <div className="post_header">
    {/* <p src="src/imgs/user01.jpg" /> */}
    <div className="row">
      <p className="user_name">Matheus Gomes</p>
      <p className="time_post">Há 3 min</p>
    </div>
  </div>
);

export default PostHeader;
