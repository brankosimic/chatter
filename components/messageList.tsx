import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { chatStore } from '../stores';
import MessagePoster from './messagePoster';
import chatStyles from '../styles/chat.module.scss';

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
      <p className={chatStyles.typewriter}>{chatContext.isTyping ? 'User is typing...' : ''}</p>
      <MessagePoster />
    </div>
  );
};

export default observer(MessageList);
