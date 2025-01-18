import { createTheme, ThemeOptions } from "@mui/material/styles";

const themeJson: ThemeOptions = {
  palette: {
    primary: {
      light: "#d4e157", // Light lime
      main: "#84cc16", // Default lime
      dark: "#4d7c0f", // Dark lime
      contrastText: "#ffffff", // Text color for buttons
    },
    secondary: {
      light: "#009688", // Light lime
      main: "#009688", // Default lime
      dark: "#009688", // Dark lime
      contrastText: "#ffffff", // Text color for buttons
    },
  },
  typography: {
    fontFamily: '"Times New Roman", serif',
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
      color: "#374151",
    },
  },
};

const muiTheme = createTheme(themeJson);

export default muiTheme;
