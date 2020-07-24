import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import UserIcon from '@material-ui/icons/SupervisedUserCircle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { observer } from 'mobx-react';
import { userService } from '../services/userService';

const UserList = () => {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  if (!users.length) userService.getAll().then((res) => setUsers(res));

  return (
    <List>
      {users.map((user) => (
        <ListItem
          key={user.id}
          alignItems="flex-start"
          onClick={() => {
            router.push(`/users/${user.id}`);
          }}
        >
          <ListItemAvatar>
            <UserIcon />
          </ListItemAvatar>
          <ListItemText primary={user.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default observer(UserList);
