import style from './style.module.css';
import './global.css';
import React, { useEffect, useState } from 'react'
import NavBar from './components/navbar/navbar';
import { pokemonAPI } from './api/pokemonAPI';

export function App() {

  const [pokemonList, setPokemonList] = useState([]);

  async function fetchPokemonImage(pokemonID) {
    const pokemons = await pokemonAPI.fetchPokemonImage(pokemonID);
    if (Array.isArray(pokemons) && pokemons.length > 0) {
      setPokemonList(pokemons[0]);
    }
  }

  useEffect(() => {
    fetchPokemonImage(35);
  }, []);

  useEffect(() => {
    console.log(pokemonList);
  }, [pokemonList]);


  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.container_navbar}>
          <NavBar />
        </div>
      </div>

        <div className={style.details}>
          <h1>coucou</h1>
          <img src={[pokemonList]} alt="" />
        </div>
        <div className={style.statistique}>
          <h1>Coucou</h1>
        </div>

    </div>
  );
}

export default App