import React from 'react';
import ListItemText from '@mui/material/ListItemText';

function TodoItem({ todo }) {
  return <ListItemText primary={todo.text} />;
}

export default TodoItem;
