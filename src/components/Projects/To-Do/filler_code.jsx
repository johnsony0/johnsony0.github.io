import React, { useState, useEffect } from 'react';
import { TextField, Button, List, ListItem, Typography, Box, Checkbox, Grid } from '@mui/material';

const ToDo = () => {
  const [boards, setBoards] = useState(() => {
    const savedBoards = localStorage.getItem('boards');
    return savedBoards ? JSON.parse(savedBoards) : [];
  });

  const [newBoardName, setNewBoardName] = useState('');
  const [newTask, setNewTask] = useState({});

  useEffect(() => {
    localStorage.setItem('boards', JSON.stringify(boards));
  }, [boards]);

  const handleAddBoard = () => {
    if (newBoardName.trim()) {
      setBoards([...boards, { name: newBoardName, tasks: [] }]);
      setNewBoardName('');
    }
  };

  const handleAddTaskToBoard = (boardIndex) => {
    if (newTask[boardIndex]?.trim()) {
      const updatedBoards = [...boards];
      updatedBoards[boardIndex].tasks.push({ name: newTask[boardIndex], resetDate: new Date().toLocaleDateString() });
      setBoards(updatedBoards);
      setNewTask({ ...newTask, [boardIndex]: '' });
    }
  };

  const handleDeleteBoard = (boardIndex) => {
    const updatedBoards = boards.filter((_, i) => i !== boardIndex);
    setBoards(updatedBoards);
  };

  const handleDeleteTask = (boardIndex, taskIndex) => {
    const updatedBoards = [...boards];
    updatedBoards[boardIndex].tasks = updatedBoards[boardIndex].tasks.filter((_, i) => i !== taskIndex);
    setBoards(updatedBoards);
  };

  const handleToggleComplete = (boardIndex, taskIndex) => {
    const updatedBoards = [...boards];
    updatedBoards[boardIndex].tasks[taskIndex].completed = !updatedBoards[boardIndex].tasks[taskIndex].completed;
    setBoards(updatedBoards);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Task Boards
      </Typography>

      <Box mb={2}>
        <TextField
          label="New Board Name"
          variant="outlined"
          value={newBoardName}
          onChange={(e) => setNewBoardName(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <Button variant="contained" color="primary" onClick={handleAddBoard}>
          Add Board
        </Button>
      </Box>

      {boards.map((board, boardIndex) => (
        <Box key={boardIndex} mb={4}>
          <Typography variant="h5">{board.name}</Typography>

          <Button
            variant="contained"
            color="error"
            style={{ marginBottom: '10px' }}
            onClick={() => handleDeleteBoard(boardIndex)}
          >
            Delete Board
          </Button>

          <Box mb={2}>
            <TextField
              label="New Task"
              variant="outlined"
              value={newTask[boardIndex] || ''}
              onChange={(e) => setNewTask({ ...newTask, [boardIndex]: e.target.value })}
              style={{ marginRight: '10px' }}
            />
            <Button variant="contained" color="primary" onClick={() => handleAddTaskToBoard(boardIndex)}>
              Add Task
            </Button>
          </Box>

          <List>
            {board.tasks.map((task, taskIndex) => (
              <ListItem key={taskIndex}>
                <Checkbox
                  checked={task.completed}
                  onChange={() => handleToggleComplete(boardIndex, taskIndex)}
                  color="primary"
                />
                <Typography variant="body1"
                  style={{ flexGrow: 1, textDecoration: task.completed ? 'line-through' : 'none' }}
                >
                  {task.name} - Added on {task.resetDate}
                </Typography>
                <Button variant="outlined" color="secondary" onClick={() => handleDeleteTask(boardIndex, taskIndex)}>
                  Delete
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </div>
  );
};

export default ToDo;