import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Box, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function FriendsPage() {
  const friends = [
    { name: 'John Doe', treesSaved: 10, avatarUrl: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Jane Smith', treesSaved: 5, avatarUrl: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Bob Johnson', treesSaved: 20, avatarUrl: 'https://i.pravatar.cc/150?img=3' },
  ];

  return (
    <Box boxShadow={3} borderRadius={16} p={2}>
      <h1>Friends</h1>
      <List>
        <ListItem>
          <ListItemText primary="Name" />
          <ListItemText primary="Trees Saved" />
        </ListItem>
        {friends.map((friend, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar src={friend.avatarUrl} />
            </ListItemAvatar>
            <ListItemText primary={friend.name} />
            <ListItemText primary={friend.treesSaved} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="details">
                <ArrowForwardIosIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default FriendsPage;