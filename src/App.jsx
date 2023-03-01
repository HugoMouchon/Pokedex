import style from './style.module.css';
import './global.css';
import React from 'react'
import NavBar from './components/navbar/navbar';

export function App() {
  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <NavBar />
      </div>
      <div className={style.header}>

      </div>
      <header>

      </header>
    </div>
  );
}

export default App