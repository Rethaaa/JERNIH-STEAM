import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#259b24",
    },
    secondary: {
      main: "#8bc34a",
      text: "fff",
    },
    tertiary: {
      main: "#00bcd4",
    },
    quaternary: {
      main: "#03a9f4",
      dark: "#0288d1",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "DM Sans, sans-serif",
    h6: {
      fontWeight: 600,
    },
  },
});

export default theme;