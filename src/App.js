import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar';
import Weather from './Components/Weather';

function App() {
  return (
    <>
      <Menubar />
      <Weather />
    </>
  );
}

export default App;
