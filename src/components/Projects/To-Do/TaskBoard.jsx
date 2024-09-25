import dayjs from 'dayjs';
import { TextField, Box, Grid, IconButton, MenuItem } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';

function TaskBoard({
  board,
  boardIndex,
  currIndex,
  handleNameChange,
  handleSave,
  setCurrIndex,
  handleDeleteBoard,
  handleTypeChange,
  handleTimeChange,
  handleDayChange
}) {
  return (
      <Grid
        container
        sx={{
          backgroundColor: '#f5f5f5',
          borderRadius: '12px',
          px: '12px',
          py: '6px',
          height: '100%',
          position: 'relative',
          '&:hover .hover-buttons': {
            opacity: 1,
          },
        }}
      >
        <Grid item xs={currIndex === boardIndex ? 10 : 10} sx={{ marginBottom: '16px' }}>
          <TextField
            label={currIndex === boardIndex ? 'Name' : ''}
            variant="standard"
            fullWidth
            value={board.name}
            onChange={(e) => handleNameChange(boardIndex, e.target.value)}
            InputProps={{
              readOnly: currIndex !== boardIndex,
            }}
          />
        </Grid>
        {currIndex === boardIndex ? (
          <Grid
            item
            xs={2}
            className="hover-buttons"
            sx={{
              display: 'flex',
              opacity: 0,
              transition: 'opacity 0.3s ease',
            }}
          >
            <IconButton size="small" onClick={() => handleSave()}>
              <SaveIcon fontSize="inherit" />
            </IconButton>
            <IconButton size="small" onClick={() => handleSave()}>
              <CancelIcon fontSize="inherit" />
            </IconButton>
          </Grid>
        ) : (
          <Grid
            item
            xs={2}
            className="hover-buttons"
            sx={{
              display: 'flex',
              opacity: 0,
              transition: 'opacity 0.3s ease',
            }}
          >
            <IconButton size="small" onClick={() => setCurrIndex(boardIndex)}>
              <EditIcon fontSize="inherit" />
            </IconButton>
            <IconButton size="small" onClick={() => handleDeleteBoard(boardIndex)}>
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </Grid>
        )}
        {currIndex === boardIndex && (
          <Grid container spacing={2}>
            <Grid item xs={board.frequency === 'weekly' ? 4 : board.frequency === 'daily' ? 6 : 12}>
              <TextField
                label="Frequency"
                variant="outlined"
                select
                fullWidth
                value={board.frequency}
                onChange={(e) => handleTypeChange(boardIndex, e.target.value)}
                sx={{ marginBottom: '16px' }}
              >
                <MenuItem value="weekly">Weekly</MenuItem>
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="regular">Regular</MenuItem>
              </TextField>
            </Grid>
            {board.frequency !== 'regular' && (
              <Grid item xs={board.frequency === 'weekly' ? 4 : board.frequency === 'daily' ? 6 : 12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileTimePicker
                    label="Time"
                    slotProps={{
                      actionBar: {
                        sx: {
                          '& .MuiButton-root': {
                            color: 'black',  
                          },
                        }
                      }
                    }}
                    value={board.time ? dayjs(board.time) : null}
                    onChange={(newTime) => handleTimeChange(boardIndex, newTime)}
                  />
                </LocalizationProvider>
              </Grid>
            )}
            {board.frequency === 'weekly' && (
              <Grid item xs={board.frequency === 'weekly' ? 4 : 12}>
                <TextField
                  label="Day"
                  variant="outlined"
                  select
                  fullWidth
                  value={board.day}
                  onChange={(e) => handleDayChange(boardIndex, e.target.value)}
                  sx={{ marginBottom: '16px' }}
                  SelectProps={{
                    MenuProps: {
                      PaperProps: {
                        style: {
                          maxHeight: 48 * 4.5, 
                        },
                      },
                    }
                  }}
                >
                  <MenuItem value="Sunday">Sunday</MenuItem>
                  <MenuItem value="Monday">Monday</MenuItem>
                  <MenuItem value="Tuesday">Tuesday</MenuItem>
                  <MenuItem value="Wednesday">Wednesday</MenuItem>
                  <MenuItem value="Thursday">Thursday</MenuItem>
                  <MenuItem value="Friday">Friday</MenuItem>
                  <MenuItem value="Saturday">Saturday</MenuItem>
                </TextField>
              </Grid>
            )}
          </Grid>
        )}
      </Grid>
  );
}

export default TaskBoard;