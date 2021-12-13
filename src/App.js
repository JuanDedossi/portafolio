import './App.css';
import Navbar from './components/NavBar/Navbar2';
import {Hero} from './components/Hero/Hero';
import ResponsiveGrid from './components/Technologies/Technologies';
import { ThemeProvider} from '@mui/material/styles';
import Theme from './Theme.js'
import Sobre from './components/Sobre/sobre';
import Proyects from './components/Proyects/Proyects';
import Contact from './components/Contact/Contact';
import * as React from 'react';



function App() {
  return (
    <ThemeProvider theme={Theme}>
    <div>
      <Navbar />
    <div className="App">
      <Hero />
      <Sobre /> 
      <ResponsiveGrid />
      <Proyects />
      <Contact />
    </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
