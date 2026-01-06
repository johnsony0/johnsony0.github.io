import { createTheme } from '@mui/material/styles';

export const themeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#fce4ec',
    },
    text: {
      primary: '#707070',
      secondary: '#202020',
    },
    error: {
      main: '#d32f2f',
    },
  },
  clarity: {
    primary: '#fdfaf1',
    secondary: '#e8dec9',
    bg: '#F8F8F8',
    heading: '#292922'
  },
  typography: {
    fontFamily: 'Segoe UI',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Segoe UI', 
          fontSize: '10pt', 
          textTransform: 'none', 
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Segoe UI', 
          fontSize: '10pt', 
          textTransform: 'none', 
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides:{
        root: {
          fontFamily: 'Segoe UI',
          fontSize: '16pt',
          fontWeight: 'bold',
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            fontFamily: 'Segoe UI',
            fontSize: '10pt',
            color: '#707070',
          },
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;