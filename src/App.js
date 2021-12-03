import React, { useEffect} from 'react';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Footer from './Components/Footer';
import M from 'materialize-css';


function App() {
useEffect (() => {
  M.AutoInit();
},[]);
  return (
    <>
      <Navbar/>
      
      <Body/>
      <Footer/>
    </>
  );
}

export default App;
