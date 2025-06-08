import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Beneficio from './components/Beneficio.jsx';
import Planos from './components/Planos.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Beneficio />
        <Planos />
      </main>
    </>
  );
}
export default App
