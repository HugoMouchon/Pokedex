import style from './style.module.css';
import './global.css';
import React, { useEffect, useState } from 'react'
import NavBar from './components/navbar/navbar';
import { pokemonAPI } from './api/pokemonAPI';

export function App() {

  const [imagePokemon, setImagePokemon] = useState();
  const [namePokemon, setNamePokemon] = useState(null);
  const [weightPokemon, setWeightPokemon] = useState();
  const [heightPokemon, setHeightPokemon] = useState();

  async function fetchPokemonImage(pokemonID) {
    const imageURL = await pokemonAPI.fetchPokemonImage(pokemonID);
    setImagePokemon(imageURL);
  }

  useEffect(() => {
    fetchPokemonImage(3);
  }, []);

  async function fetchPokemonName(pokemonID) {
    const name = await pokemonAPI.fetchPokemonName(pokemonID);
    setNamePokemon(name);
  }

  useEffect(() => {
    fetchPokemonName(3);
  }, [])

  async function fetchPokemonWeight(pokemonID) {
    const weight = await pokemonAPI.fetchPokemonWeight(pokemonID);
    setWeightPokemon(weight);
  }

  useEffect(() => {
    fetchPokemonWeight(3);
  }, [])

  async function fetchPokemonHeight(pokemonID) {
    const height = await pokemonAPI.fetchPokemonHeight(pokemonID);
    setHeightPokemon(height);
  }

  useEffect(() => {
    fetchPokemonHeight(3);
  }, [])


  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.container_navbar}>
          <NavBar />
        </div>
      </div>

      <div className={style.details}>
        <img className={style.image} src={imagePokemon} alt="" />
        <h1>Pokemon: {namePokemon}</h1>
        <h3>Poid: {weightPokemon} kilos</h3>
        <h3>Hauteur: {heightPokemon} mètres</h3>
      </div>
      <div className={style.statistique}>
        <h1>Coucou</h1>
      </div>

    </div>
  );
}

export default App