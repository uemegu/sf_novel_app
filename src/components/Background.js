import React from 'react';

const Background = ({ image }) => {
  const style = {
    backgroundImage: `url(${image})`,
  };

  return <div className="background" style={style}></div>;
};

export default Background;
