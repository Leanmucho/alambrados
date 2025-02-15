import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import Header from "./components/header";
import HeroSection from "./components/HeroSection"

function App() {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <HeroSection />
      </ThemeProvider>
    </div>
  )
}

export default App
