// import {collection, onSnapshot} from '@firebase/firestore'
// import { useState, useEffect } from 'react';
// import db from './firebase'
import './App.css';
import Hero from './Hero';
import Navbar from './Navbar';
import Articles from './Articles';


function App() {

  return (
    <div className="App">
      <Hero/>
      <Navbar/>
      <Articles/>    
    </div>
  );
}

export default App;
