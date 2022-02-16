import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Menubar from './Components/Menubar';
import Weather from './Components/Weather';

function App() {
  return (
    <>
      <Menubar />
      <Weather />
      <Footer />
    </>
  );
}

export default App;
