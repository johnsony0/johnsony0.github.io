import React, { useState, useEffect } from 'react';
import TaskBoard from './TaskBoard';
import TaskList from './TaskList';
import dayjs from 'dayjs';
import Cookies from 'js-cookie';
import {Typography, Grid, Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {randomId} from '@mui/x-data-grid-generator';
const ToDo = () => {
  const [boards, setBoards] = useState(() => {
    const savedBoards = localStorage.getItem('boards');
    return savedBoards ? JSON.parse(savedBoards) : [];
  });

  const [currIndex, setCurrIndex] = useState(null);

  const deleteCookie = (id) => {
    Cookies.remove(id, { path: '/' }); 
  }

  const setCookie = (id, day, time, frequency) => {
    const setDate = dayjs(day).startOf('day'); 
    const setTime = dayjs(time); 

    let expirationDate; 

    if (frequency === 'weekly') {
        expirationDate = setDate
            .hour(setTime.hour())
            .minute(setTime.minute())
            .second(setTime.second())
            .millisecond(setTime.millisecond())
            .add(7, 'day'); 
    } else {
        expirationDate = setDate
            .hour(setTime.hour())
            .minute(setTime.minute())
            .second(setTime.second())
            .millisecond(setTime.millisecond())
            .add(1, 'day'); 
    }
    console.log(expirationDate)
    console.log(setTime)
    Cookies.set(id, id,{
      expires: expirationDate.subtract(1,'day').toDate(), 
      sameSite: 'Lax', 
      secure: true 
    });
  };

  useEffect(() => {
    localStorage.setItem('boards', JSON.stringify(boards));
  }, [boards]);

  const handleDeleteBoard = (currIndex) => {
    deleteCookie(boards[currIndex].id)
    const updatedBoards = boards.filter((_, i) => i !== currIndex);
    setBoards(updatedBoards);
  };

  const createNewBoard = () => {
    setBoards([...boards, { id: randomId(), name: 'New Board', frequency: 'regular', time: dayjs().set('hour', 0).set('minute', 0).set('second', 0).set('millisecond', 0), day: dayjs(), tasks: [] }]);
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
    setCookie(updatedBoards[currIndex].id, updatedBoards[currIndex].day, updatedBoards[currIndex].time, updatedBoards[currIndex].frequency);
  };

  const handleTimeChange = (currIndex, newTime) => {
    const updatedBoards = [...boards];
    updatedBoards[currIndex].time = newTime;
    setBoards(updatedBoards);
    setCookie(updatedBoards[currIndex].id, updatedBoards[currIndex].day, updatedBoards[currIndex].time, updatedBoards[currIndex].frequency);
  };

  const handleDayChange = (currIndex, newDay) => {
    const updatedBoards = [...boards];
    updatedBoards[currIndex].day = newDay;
    setBoards(updatedBoards);
    setCookie(updatedBoards[currIndex].id , updatedBoards[currIndex].day, updatedBoards[currIndex].time, updatedBoards[currIndex].frequency)
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
              id={board.id}
              tasks={board.tasks}
              frequency={board.frequency}
              onTasksChange={(updatedTasks) => handleTasksChange(boardIndex, updatedTasks)}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ToDo;