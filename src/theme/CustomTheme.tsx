import { createTheme, ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#210490",
    },
    secondary: {
      main: "#f50057",
    },
  },
};

const muiTheme = createTheme(themeOptions);

export default muiTheme;
