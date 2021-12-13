import "./App.css";
import Navbar from "./components/NavBar/Navbar2";
import { Hero } from "./components/Hero/Hero";
import ResponsiveGrid from "./components/Technologies/Technologies";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./Theme.js";
import Sobre from "./components/Sobre/sobre";
import Proyects from "./components/Proyects/Proyects";
import Contact from "./components/Contact/Contact";
import * as React from "react";
import { Button } from "@mui/material";
import Arg from "./Arg.png";
import Usa from './USA.png'
import EngNavbar from "./components/NavBar/EngNavbar";
import EngHero from "./components/Hero/EngHero";
import EngSobre from "./components/Sobre/EngSobre";
import EngProyects from "./components/Proyects/EngProyects";
import EngContact from "./components/Contact/EngContact";

function App() {
  const [lang, setLang] = React.useState("es");

  const handleLang = () => {
    lang === "es" ? setLang("en") : setLang("es");
  };
  return (
    <ThemeProvider theme={Theme}>
      {lang === "es" ? (
        <div style={{ postition: "relative" }}>
          <Button
            sx={{ position: "fixed", top: "10px", right: "20px", zIndex: "1" }}
            onClick={handleLang}
          >
            <img style={{ width: "35px" }} src={Arg} alt="arg" />
          </Button>
          <Navbar />
          <div className="App">
            <Hero />
            <Sobre />
            <ResponsiveGrid lang={lang}/>
            <Proyects />
            <Contact />
          </div>
        </div>
      ) : (
        <div style={{ postition: "relative" }}>
          <Button
            sx={{ position: "fixed", top: "10px", right: "20px", zIndex: "1" }}
            onClick={handleLang}
          >
            <img style={{ width: "35px" }} src={Usa} alt="usa" />
          </Button>
          <EngNavbar />
          <div className="App">
            <EngHero />
            <EngSobre />
            <ResponsiveGrid lang={lang}/>
            <EngProyects />
            <EngContact />
          </div>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
