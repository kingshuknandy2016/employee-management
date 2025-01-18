import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    primary: {
      light: "#93c5fd", // Light blue
      main: "#3b82f6", // Default blue
      dark: "#1e3a8a", // Dark blue
      contrastText: "#ffffff", // Text color for buttons
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
      color: "#374151",
    },
  },
});

export default muiTheme;
