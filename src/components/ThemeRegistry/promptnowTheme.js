import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';


const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#3c8ec7',
      main: '#0C72BA',
      dark: '#084f82',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e35251',
      main: '#dd2726',
      dark: '#9a1b1a',
      contrastText: '#fff',
    },
    error: {
      light: '#e35251',
      main: '#dd2726',
      dark: '#9a1b1a',
      contrastText: '#fff',
    },
    success: {
      light: '#64df9b',
      main: '#3ed883',
      dark: '#2b975b',
      contrastText: '#fff',
    },
    warning: {
      light: '#ffaa33',
      main: '#ff9500',
      dark: '#b26800',
      contrastText: '#fff',
    },
    background:{
      light: '#FFFFFF',
      main: '#EEEEEE',
      dark: '#e0e0e0',
      contrastText: '#fff',
      image1: {
        image: `url(Background/Background1.png)`,
      },
      image2: {
        image: `url(Background/Background2.png)`,
      },
    },
    frame:{
      light: '#989898',
      main: '#373737',
      dark: '#000000',
    }
  },

  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

// 0C72BA

export default theme;