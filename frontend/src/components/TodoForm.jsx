import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        label="Add a new todo"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{ marginRight: '20px' }} // Add a margin to the right
      />
      <Button type="submit" variant="contained" color="primary">
        Add Todo
      </Button>
    </form>
  );
}

export default TodoForm;
