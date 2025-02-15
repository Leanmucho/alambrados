import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2C3E50", // Gris oscuro
    },
    secondary: {
      main: "#3498DB", // Azul industrial
    },
    warning: {
      main: "#E67E22", // Naranja
    },
    info: {
      main: "#F1C40F", // Amarillo oscuro
    },
    background: {
      default: "#ECF0F1", // Gris claro
      paper: "#FFFFFF", // Blanco
    },
    text: {
      primary: "#2C3E50", // Gris oscuro para texto
      secondary: "#3498DB", // Azul industrial para texto secundario
    },
  },
});