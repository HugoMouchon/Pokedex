import style from './style.module.css';
import './global.css';
import React, { useEffect, useState } from 'react'
import NavBar from './components/navbar/navbar';
import { pokemonAPI } from './api/pokemonAPI';

export function App() {

  const [imagePokemon, setImagePokemon] = useState([]);

  async function fetchPokemonImage(pokemonID) {
    const imageURL = await pokemonAPI.fetchPokemonImage(pokemonID);
    if (imageURL.length > 0) {
      setImagePokemon(imageURL);
    }
  }

  useEffect(() => {
    fetchPokemonImage(35);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.container_navbar}>
          <NavBar />
        </div>
      </div>

      <div className={style.details}>
        <img src={imagePokemon} alt="" />
      </div>
      <div className={style.statistique}>
        <h1>Coucou</h1>
      </div>

    </div>
  );
}

export default App