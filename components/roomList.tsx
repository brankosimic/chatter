import React, { useContext } from 'react';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { observer } from 'mobx-react';
import { chatStore } from '../stores';
import chatStyles from '../styles/chat.module.scss';

const RoomList = () => {
  const chatContext = useContext(chatStore);
  if (!chatContext.rooms.length) chatContext.load();

  return (
    <List>
      {chatContext.rooms.map((room) => (
        <ListItem
          className={
            chatContext.activeRoomId === room.id ? chatStyles.active : ''
          }
          key={room.id}
          alignItems="flex-start"
          onClick={() => {
            chatContext.loadMessages(room.id);
          }}
        >
          <ListItemAvatar>
            <MeetingRoomIcon />
          </ListItemAvatar>
          <ListItemText
            primary={room.title}
            secondary={<React.Fragment>{room.body}</React.Fragment>}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default observer(RoomList);
