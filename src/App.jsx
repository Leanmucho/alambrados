import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import Header from "./components/header";
import HeroSection from "./components/HeroSection"
import Servicios from "./components/servicios";
import Nosotros from "./components/Nosotros"
import Footer from "./components/footer";

function App() {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <HeroSection /> 
        <Servicios />
        <Nosotros />
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App
