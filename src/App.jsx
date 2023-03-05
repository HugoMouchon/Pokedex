import style from './style.module.scss';
import './global.scss';
import React, { useEffect, useState } from 'react';
import NavBar from './components/navbar/navbar';
import { pokemonAPI } from './api/pokemonAPI';
import PokemonStats from './components/stats/pokemonStats';
import BadgePokemon from './components/badge/badgePokemon';
import { Button } from '@mui/material';
import { ArrowBackIosNewRounded, ArrowRightAltRounded, ArrowRightAltSharp, ArrowRightRounded, KeyboardArrowLeft, KeyboardArrowRight, KeyboardDoubleArrowRight, Send } from '@mui/icons-material';

export function App() {

  let test = 1;

  const [imagePokemon, setImagePokemon] = useState();
  const [namePokemon, setNamePokemon] = useState();
  const [weightPokemon, setWeightPokemon] = useState();
  const [heightPokemon, setHeightPokemon] = useState();
  const [abilitiesPokemon, setAbilitiesPokemon] = useState([]);
  const [typesPokemon, setTypesPokemon] = useState([]);
  const [orderPokemon, setOrderPokemon] = useState();
  const [statsPokemon, setStatsPokemon] = useState([]);

  const [nextPokemon, setNextPokemon] = useState(1);

  const nextClick = () => {
    setNextPokemon(nextPokemon + 1);
  }

  const previousClick = () => {
    setNextPokemon(nextPokemon - 1);
  }


  // Fonction permettant de récupérer l'image du Pokemon
  async function fetchPokemonImage(pokemonID) {
    const imageURL = await pokemonAPI.fetchPokemonImage(pokemonID);
    setImagePokemon(imageURL);
  }

  useEffect(() => {
    fetchPokemonImage(nextPokemon);
  }, [nextPokemon]);

  // Fonction permettant de récupérer le nom du Pokemon
  async function fetchPokemonName(pokemonID) {
    const name = await pokemonAPI.fetchPokemonName(pokemonID);
    if (name.length > 0) {
      setNamePokemon(name);
    }
  }

  useEffect(() => {
    fetchPokemonName(nextPokemon);
  }, [nextPokemon])

  // Fonction permettant de récupérer le poid du Pokemon
  async function fetchPokemonWeight(pokemonID) {
    const weight = await pokemonAPI.fetchPokemonWeight(pokemonID);
    setWeightPokemon(weight);
  }

  useEffect(() => {
    fetchPokemonWeight(nextPokemon);
  }, [nextPokemon])

  // Fonction permettant de récupérer la hauteur du Pokemon
  async function fetchPokemonHeight(pokemonID) {
    const height = await pokemonAPI.fetchPokemonHeight(pokemonID);
    setHeightPokemon(height);
  }

  useEffect(() => {
    fetchPokemonHeight(nextPokemon);
  }, [nextPokemon])

  // Fonction permettant de récupérer les abilitées du Pokemon et qui en affiche 1 maximum
  async function fetchPokemonAbilities(pokemonID) {
    const abilities = await pokemonAPI.fetchPokemonAbilities(pokemonID);
    setAbilitiesPokemon(abilities.slice(0, 1));
  }

  useEffect(() => {
    fetchPokemonAbilities(nextPokemon);
  }, [nextPokemon])

  // Fonction permettant de récupérer le ou les types du Pokemon
  async function fetchPokemonTypes(pokemonID) {
    const types = await pokemonAPI.fetchPokemonTypes(pokemonID);
    setTypesPokemon(types.slice(0, 1));
  }

  useEffect(() => {
    fetchPokemonTypes(nextPokemon);
  }, [nextPokemon])

  // Fonction permettant de récupérer le numéro d'ordre du Pokemon
  async function fetchPokemonOrder(pokemonID) {
    const ordre = await pokemonAPI.fetchPokemonOrder(pokemonID);
    setOrderPokemon(ordre);
  }

  useEffect(() => {
    fetchPokemonOrder(nextPokemon);
  }, [nextPokemon])

  // Fonction permettant de récupérer les stats du Pokemon
  async function fetchPokemonStats(pokemonID) {
    const stats = await pokemonAPI.fetchPokemonStats(pokemonID);
    setStatsPokemon(stats);
  }

  useEffect(() => {
    fetchPokemonStats(nextPokemon);
  }, [nextPokemon])

  // Fonction permettant d'ajouter un hashtag et un ou des zéros devant l'ordre du pokemon
  function addZeros(orderPokemon) {
    if (orderPokemon < 10) {
      return "#00" + orderPokemon;
    } else if (orderPokemon < 100) {
      return "#0" + orderPokemon;
    } else if (orderPokemon > 100) {
      return "#" + orderPokemon;
    } else {
    }
  }

  // Fonction permettant de convertir la mesure "pied" en "mètres" 
  function converterFeetToMeter(heightPokemon) {
    const meter = heightPokemon / 3.048
    return meter.toFixed(2);
  }

  // Fonction permettant de convertir la mesure "pound" en "kilos" 
  function converterToKilos(weightPokemon) {
    const kilos = weightPokemon / 10
    return kilos.toFixed(2);
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <NavBar onSubmit={fetchPokemonName} />
      </div>

      <div className={style.container_PreviousNext}>

      <div className={style.previous}>
          <Button
            onClick={previousClick}
            variant="contained"
            startIcon={<KeyboardArrowLeft />}
          >
            Suivant {orderPokemon - 1}
          </Button>
        </div>

        <div className={style.container_details}>
          <div className={style.container_nomination2}>
            <div className={style.container_types}>
              {typesPokemon && typesPokemon.map((type) => (
                <div key={type.slot}>
                  <BadgePokemon types={typesPokemon} />
                </div>
              ))}
            </div>
            <h1>{namePokemon}</h1>
            <div className={style.container_nomination1}>
              <div>
                <p>Poid : </p>
                <p>Hauteur : </p>
                <p>Abilitées :</p>
              </div>
              <div className={style.container_abilities}>
                <p>{converterToKilos(weightPokemon)} Kg</p>
                <p>{converterFeetToMeter(heightPokemon)} M</p>
                <div className={style.ability}>
                  {abilitiesPokemon && abilitiesPokemon.map((ability) => (
                    <div key={ability.slot}>
                      <span>{ability.ability.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={style.container_image}>
            <img className={style.image} src={imagePokemon} alt="" />
            <span className={style.number}>{addZeros(orderPokemon)}</span>
          </div>
        </div>

        <div className={style.next}>
          <Button
            onClick={nextClick}
            variant="contained"
            endIcon={<KeyboardArrowRight />}
          >
            Suivant {orderPokemon +1}
          </Button>
        </div>

      </div>
      <div className={style.statistique}>
        <PokemonStats
          stats={statsPokemon}
        />
      </div>
    </div>
  );
}

export default App