import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2E7D32", // Verde oscuro
    },
    secondary: {
      main: "#66BB6A", // Verde medio
    },
    warning: {
      main: "#E67E22", // Naranja (sin cambios)
    },
    info: {
      main: "#F1C40F", // Amarillo oscuro (sin cambios)
    },
    background: {
      default: "#E8F5E9", // Verde muy claro
      paper: "#FFFFFF", // Blanco
    },
    text: {
      primary: "#1B5E20", // Verde muy oscuro para texto principal
      secondary: "#2E7D32", // Verde oscuro para texto secundario
    },
  },
});