import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react';
import { chatStore } from '../stores';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const MessageList = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const chatContext = useContext(chatStore);

  return (
    <div>
      <TextareaAutosize
        rowsMin={5}
        placeholder="Type a message"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
          chatContext.setIsTyping(!!event.target.value);
        }}
      />
      <Button
        variant="contained"
        color="primary"
        disabled={loading}
        onClick={async () => {
          setLoading(true);
          await chatContext.postMessage(text);
          setText('');
          setLoading(false);
        }}
      >
        {loading ? <CircularProgress size={24} /> : 'Post'}
      </Button>
    </div>
  );
};

export default observer(MessageList);
