import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import {
  randomId,
} from '@mui/x-data-grid-generator';

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId(); 
    setRows((oldRows) => [
      ...oldRows,
      { id, task: '', priority: 'Low', status:'Not Started', isNew: true },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'task' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="inherit" startIcon={<AddIcon />} onClick={handleClick}>
        Add Task
      </Button>
    </GridToolbarContainer>
  );
}

function TaskList({ board, setBoards, boardIndex , onTasksChange }) {
  const [rows, setRows] = useState(board.tasks);
  const [rowModesModel, setRowModesModel] = useState({});

  useEffect(() => {
    setRows(board.tasks); 
  }, [board.tasks]);

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
    onTasksChange(updatedRows); 
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    const updatedRows = rows.map((row) => (row.id === newRow.id ? updatedRow : row));
    setRows(updatedRows);
    onTasksChange(updatedRows); 
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  useEffect(() => {
    const checkExpiration = () => {
      const isExpired = dayjs().isAfter(dayjs(board.expire));
      if (isExpired && board.frequency !== 'regular') {
        const updatedRows = rows.map((row) => ({
          ...row,
          status: 'Not Started',
        }));
        setRows(updatedRows);
        onTasksChange(updatedRows);
        const newExpiration =
          board.frequency === 'weekly'
            ? dayjs(board.expire).add(7, 'day')
            : dayjs(board.expire).add(1, 'day');
        setBoards((prevBoards) => {
          const updatedBoards = [...prevBoards];
          updatedBoards[boardIndex] = {
            ...board,
            expire: newExpiration.toISOString(),
          };
          return updatedBoards;
        });
      }
    };
  
    checkExpiration();
  
    const interval = setInterval(() => {
      checkExpiration();
    }, 60000);
  
    return () => clearInterval(interval);
  }, [board, rows, setBoards, setRows, onTasksChange, boardIndex]);

  const columns = [
    {
      field: 'task',
      headerName: 'Task',
      type: 'string',
      width: 200,
      align: 'left',
      headerAlign: 'left',
      editable: true,
      renderCell: (params) => {
        return (
          <span style={{ textDecoration: params.row.status === 'Completed' ? 'line-through' : 'none' }}>
            {params.value}
          </span>
        );
      },
    },
    {
      field: 'priority',
      headerName: 'Priority',
      width: 80,
      editable: true,
      type: 'singleSelect',
      valueOptions: ['Low','Medium','High'],
      renderCell: (params) => {
        let color = 'green'
        if (params.value === 'Medium') {
          color = 'yellow';
        } else if (params.value === 'High') {
          color = 'red';
        }
        return (
          <span style={{ color: color}}>
            {params.value}
          </span>
        );
      },
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      editable: true,
      type: 'singleSelect',
      valueOptions: ['Not Started','In Progress','Completed'],
      renderCell: (params) => {
        let color = '#707070'
        if (params.value === 'Completed') {
          color = 'green';
        } else if (params.value === 'In Progress') {
          color = 'blue';
        }
        return (
          <span style={{ color: color}}>
            {params.value}
          </span>
        );
      },
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              color="inherit"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
  );
}

export default TaskList;