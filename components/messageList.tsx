import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { chatStore } from '../stores';
import MessagePoster from './messagePoster';

const MessageList = () => {
  const chatContext = useContext(chatStore);

  return (
    <div>
      {chatContext.messages.map((message) => (
        <div key={message.id}>
          <label>{message.email}</label>
          <p>{message.formatted}</p>
        </div>
      ))}
      <MessagePoster />
    </div>
  );
};

export default observer(MessageList);
