import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addTodo = async (text) => {
    try {
      const response = await axios.post('http://localhost:5000/api/todos', { text });
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh' }}
      spacing={5} // Add spacing between items
    >
      <Grid item>
        <Typography component="h1" variant="h4" gutterBottom>
          Todo App
        </Typography>
      </Grid>
      <Grid item>
        <TodoForm addTodo={addTodo} fetchTodos={fetchTodos} />
      </Grid>
      <Grid item>
        <TodoList todos={todos} fetchTodos={fetchTodos} />
      </Grid>
    </Grid>
  );
}

export default App;
