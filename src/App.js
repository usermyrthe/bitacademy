  
import React from 'react';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Experience from './Components/Experience';
import Aboutme from './Components/Aboutme';


function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Aboutme />
      <Experience/>
      <Contact />
    
    </>
  );
}

export default App;