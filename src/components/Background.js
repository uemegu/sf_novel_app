import React from 'react';

const Background = ({ image }) => {
  const style = {
    backgroundImage: `url(${process.env.PUBLIC_URL}${image})`,
  };

  return <div className="background" style={style}></div>;
};

export default Background;
