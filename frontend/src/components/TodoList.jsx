import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import axios from 'axios';

function TodoList({ todos, fetchTodos }) {
  // Ensure that todos is an array
  if (!Array.isArray(todos)) {
    return <p>No todos available.</p>;
  }

  const handleDoneClick = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      fetchTodos(); // Fetch updated todos after deletion
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo._id}>
          <ListItemText primary={`• ${todo.text}`} sx={{ marginRight: '20px' }}/>
          <Button onClick={() => handleDoneClick(todo._id)} variant="outlined" color="primary">
            Done
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

export default TodoList;
