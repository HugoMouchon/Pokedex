import style from './style.module.scss';
import './global.scss';
import React, { useEffect, useState } from 'react';
import NavBar from './components/navbar/navbar';
import { pokemonAPI } from './api/pokemonAPI';
import PokemonStats from './components/stats/pokemonStats';
import BadgePokemon from './components/badge/badgePokemon';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import PokemonList from './components/pokemonList/pokemonList';
import NotificationPokemon from './components/notificationPokemon/notificationPokemon';

export function App() {

  const [imagePokemon, setImagePokemon] = useState();
  const [gifsPokemon, setGifsPokemon] = useState([]);
  const [namePokemon, setNamePokemon] = useState();
  const [weightPokemon, setWeightPokemon] = useState();
  const [heightPokemon, setHeightPokemon] = useState();
  const [abilitiesPokemon, setAbilitiesPokemon] = useState([]);
  const [typesPokemon, setTypesPokemon] = useState([]);
  const [orderPokemon, setOrderPokemon] = useState();
  const [statsPokemon, setStatsPokemon] = useState([]);
  const [flavorTextPokemon, setFlavorTextPokemon] = useState([]);

  const [idPokemon, setIdPokemon] = useState([]);
  const [numberPokemon, setNumberPokemon] = useState(1);

  const [listePokemon, setListPokemon] = useState([]);

  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#f6c81f',
        seconder: '#f6c81f',
      },
      secondary: {
        main: '#f6c81f',
        contrastText: '#fff',
      },
    },
  });

  const nextClick = () => {
    setNumberPokemon(numberPokemon + 1);
  }

  const previousClick = () => {
    if (numberPokemon === 1) {
      return numberPokemon;
    }
    setNumberPokemon(numberPokemon - 1);
  }

  const handleClick = (listePokemon) => {
    setNumberPokemon(listePokemon.number);
  };

  // Fonction permettant de récupérer une liste de Pokemon
  async function fetchPokemonList() {
    const listPokemons = await pokemonAPI.fetchPokemonList();
    setListPokemon(listPokemons)
  }

  useEffect(() => {
    fetchPokemonList();
  }, []);


  // Fonction permettant de récupérer l'id du pokemon
  async function fetchPokemonId(pokemonID) {
    const id = await pokemonAPI.fetchPokemonId(pokemonID);
    setIdPokemon(id);
  }

  useEffect(() => {
    fetchPokemonId( );
  }, []);


  // Fonction permettant de récupérer l'image du Pokemon
  async function fetchPokemonImage(pokemonID) {
    const imageURL = await pokemonAPI.fetchPokemonImage(pokemonID);
    setImagePokemon(imageURL);
  }

  useEffect(() => {
    fetchPokemonImage(numberPokemon);
  }, [numberPokemon]);

  // Fonction permettant de récupérer le gif du Pokemon
  async function fetchPokemonGifs(pokemonID) {
    const gifURL = await pokemonAPI.fetchPokemonGifs(pokemonID);
    setGifsPokemon(gifURL);
  }

  useEffect(() => {
    fetchPokemonGifs(numberPokemon);
  }, [numberPokemon]);

  // Fonction permettant de récupérer le nom du Pokemon
  async function fetchPokemonName(pokemonID) {
    const names = await pokemonAPI.fetchPokemonName(pokemonID);
    if (names.length > 0) {
      setNamePokemon(names[0].name);
    } else {
      setNamePokemon("Pokemon Inconnu");
    }
  }

  useEffect(() => {
    fetchPokemonName(numberPokemon);
  }, [numberPokemon])

  // Fonction permettant de récupérer le poid du Pokemon
  async function fetchPokemonWeight(pokemonID) {
    const weight = await pokemonAPI.fetchPokemonWeight(pokemonID);
    setWeightPokemon(weight);
  }

  useEffect(() => {
    fetchPokemonWeight(numberPokemon);
  }, [numberPokemon])

  // Fonction permettant de récupérer la hauteur du Pokemon
  async function fetchPokemonHeight(pokemonID) {
    const height = await pokemonAPI.fetchPokemonHeight(pokemonID);
    setHeightPokemon(height);
  }

  useEffect(() => {
    fetchPokemonHeight(numberPokemon);
  }, [numberPokemon])

  // Fonction permettant de récupérer les abilitées du Pokemon et qui en affiche 1 maximum
  async function fetchPokemonAbilities(pokemonID) {
    const abilities = await pokemonAPI.fetchPokemonAbilities(pokemonID);
    setAbilitiesPokemon(abilities.slice(0, 1));
  }

  useEffect(() => {
    fetchPokemonAbilities(numberPokemon);
  }, [numberPokemon])

  // Fonction permettant de récupérer le ou les types du Pokemon
  async function fetchPokemonTypes(pokemonID) {
    const types = await pokemonAPI.fetchPokemonTypes(pokemonID);
    setTypesPokemon(types.slice(0, 1));
  }

  useEffect(() => {
    fetchPokemonTypes(numberPokemon);
  }, [numberPokemon])

  // Fonction permettant de récupérer le numéro d'ordre du Pokemon
  async function fetchPokemonOrder(pokemonID) {
    const ordre = await pokemonAPI.fetchPokemonOrder(pokemonID);
    setOrderPokemon(ordre);
  }

  useEffect(() => {
    fetchPokemonOrder(numberPokemon);
  }, [numberPokemon])

  // Fonction permettant de récupérer les stats du Pokemon
  async function fetchPokemonStats(pokemonID) {
    const stats = await pokemonAPI.fetchPokemonStats(pokemonID);
    setStatsPokemon(stats);
  }

  useEffect(() => {
    fetchPokemonStats(numberPokemon);
  }, [numberPokemon])

  // Fonction permettant de récupérer la text d'ambiance (phrase d'accroche) du Pokemon.
  async function fetchPokemonFlavorText(pokemonID) {
    const text = await pokemonAPI.fetchPokemonFlavorText(pokemonID);
    setFlavorTextPokemon(text);
  }

  useEffect(() => {
    fetchPokemonFlavorText(numberPokemon);
  }, [numberPokemon])

  // Fonction permettant d'ajouter un hashtag et un ou des zéros devant le numéro du pokemon
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
    <div className={style.container}
    >
      <div className={style.header}>
        <NavBar onSubmit={fetchPokemonName} />
      </div>

      <div className={style.container_PreviousNext}>

        <div className={style.previous}>
          <ThemeProvider theme={theme}>
            <Button
              onClick={previousClick}
              variant="contained"
              startIcon={<KeyboardArrowLeft />}
              color="primary"
              style={{ color: "white" }}
            >
              {orderPokemon - 1} Précedent
            </Button>
          </ThemeProvider>
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
            <NotificationPokemon name={namePokemon} text={flavorTextPokemon} />
          </div>
        </div>

        <div className={style.next}>
          <ThemeProvider theme={theme}>
            <Button
              onClick={nextClick}
              variant="contained"
              endIcon={<KeyboardArrowRight />}
              color="primary"
              style={{ color: "white" }}
            >
              Suivant {orderPokemon + 1}
            </Button>
          </ThemeProvider>
        </div>

      </div>
      <div className={style.container_stats}>
        <div className={style.statistique}>
          <PokemonStats
            stats={statsPokemon}
          />
        </div>
      </div>
      <PokemonList pokemonList={listePokemon} onclick={handleClick} />
    </div>
  );
}

export default App