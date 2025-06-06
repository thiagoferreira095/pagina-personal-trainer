import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
    </>
  );
}
export default App
