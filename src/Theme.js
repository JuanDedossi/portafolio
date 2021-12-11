import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#D4A418",
      contrastText: "#fff"
    },
    secondary: {
      main: "#E7EFFF",
    },
    error:{
      main: "#FF0000",
    }
  },
  typography: {
    fontFamily: "poppins",
    
  }
});
export default theme;
