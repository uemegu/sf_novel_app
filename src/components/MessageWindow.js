import React from 'react';

const MessageWindow = ({ speaker, text }) => {
  return (
    <div className="message-window">
      <div className="speaker-name">{speaker}</div>
      <div className="message-text">{text}</div>
    </div>
  );
};

export default MessageWindow;
