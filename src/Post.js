import React from 'react';
import PostHeader from './PostHeader';

import './styles/post.css';

export default (props) => {
  const renderListar = () => props.data.map(item => (
    <div key={item.id} className="post">
      <PostHeader avatar={item.avatar} name={item.postUser} time={item.postTime} />
      <p>
        {item.postText}
      </p>
    </div>
  ));

  return (
    <main>
      {renderListar()}
    </main>
  );
};
