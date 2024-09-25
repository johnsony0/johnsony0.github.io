import React, { useState, useEffect } from 'react';
import TaskBoard from './TaskBoard';
import TaskList from './TaskList';
import {Typography, Grid, Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const ToDo = () => {
  const [boards, setBoards] = useState(() => {
    const savedBoards = localStorage.getItem('boards');
    return savedBoards ? JSON.parse(savedBoards) : [];
  });

  const [currIndex, setCurrIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('boards', JSON.stringify(boards));
  }, [boards]);

  const handleDeleteBoard = (currIndex) => {
    const updatedBoards = boards.filter((_, i) => i !== currIndex);
    setBoards(updatedBoards);
  };

  const createNewBoard = () => {
    setBoards([...boards, { name: 'New Board', frequency: 'regular', time: '2024-09-24T04:00:00.000Z', day: 'Sunday', tasks: [] }]);
  };

  const handleNameChange = (currIndex, newName) => {
    const updatedBoards = [...boards];
    updatedBoards[currIndex].name = newName;
    setBoards(updatedBoards);
  };

  const handleTypeChange = (currIndex, newFrequency) => {
    const updatedBoards = [...boards];
    updatedBoards[currIndex].frequency = newFrequency;
    setBoards(updatedBoards);
  };

  const handleTimeChange = (currIndex, newTime) => {
    const updatedBoards = [...boards];
    updatedBoards[currIndex].time = newTime;
    setBoards(updatedBoards);
  };

  const handleDayChange = (currIndex, newDay) => {
    const updatedBoards = [...boards];
    updatedBoards[currIndex].day = newDay;
    setBoards(updatedBoards);
  };

  const handleSave = () => {
    setCurrIndex(null);
  };

  const handleTasksChange = (boardIndex, updatedTasks) => {
    const updatedBoards = [...boards];
    updatedBoards[boardIndex].tasks = updatedTasks;
    setBoards(updatedBoards);
  };

  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Task Boards</Typography>
        <Button onClick={createNewBoard} startIcon={<AddIcon />} color="inherit">
          Create New
        </Button>
      </Grid>

      {boards.map((board, boardIndex) => (
        <Grid item xs={12} sm={6} md={4} key={boardIndex}>
          <Box
            sx={{
              border: '1px solid #ccc',
              borderRadius: '12px',
              minHeight: '250px',
            }}
          >
            <TaskBoard 
              board={board} 
              boardIndex={boardIndex}
              currIndex={currIndex}
              handleNameChange={handleNameChange}
              handleSave={handleSave}
              setCurrIndex={setCurrIndex}
              handleDeleteBoard={handleDeleteBoard}
              handleTypeChange={handleTypeChange}
              handleTimeChange={handleTimeChange}
              handleDayChange={handleDayChange}
            />
            <TaskList
              tasks={board.tasks}
              onTasksChange={(updatedTasks) => handleTasksChange(boardIndex, updatedTasks)}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ToDo;