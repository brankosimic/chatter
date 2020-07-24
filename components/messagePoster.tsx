import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react';
import { chatStore } from '../stores';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

const MessageList = () => {
  const [text, setText] = useState('');
  const chatContext = useContext(chatStore);

  return (
    <div>
      <TextareaAutosize rowsMin={5} placeholder="Type a message" value={text} onChange={(event) => setText(event.target.value)} />
      <Button variant="contained" color="primary" onClick={(e) => chatContext.postMessage(text)}>
        Post
      </Button>
    </div>
  );
};

export default observer(MessageList);
