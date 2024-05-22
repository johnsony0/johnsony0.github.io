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
  },
};

const theme = createTheme(themeOptions);

export default theme;