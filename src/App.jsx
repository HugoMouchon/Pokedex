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
import { backgroundColorsTable } from './components/backgroundColorsTable/backgroundColorsTable';

export function App() {

  const [imagePokemon, setImagePokemon] = useState();
  const [namePokemon, setNamePokemon] = useState();
  const [weightPokemon, setWeightPokemon] = useState();
  const [heightPokemon, setHeightPokemon] = useState();
  const [abilitiesPokemon, setAbilitiesPokemon] = useState([]);
  const [typesPokemon, setTypesPokemon] = useState([]);
  const [changeBackgroundColor, setChangeBackgroundColor] = useState([]);
  const [changeBackgroundColorDrawer, setChangeBackgroundColorDrawer] = useState([]);
  const [orderPokemon, setOrderPokemon] = useState();
  const [statsPokemon, setStatsPokemon] = useState([]);
  const [flavorTextPokemon, setFlavorTextPokemon] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const [numberPokemon, setNumberPokemon] = useState(1);
  const [listePokemon, setListPokemon] = useState([]);

  useEffect(() => {
    const backgroundColors = typesPokemon.map((type) => {
      const typeObject = backgroundColorsTable.find((obj) => obj.name === type.type.name);
      return typeObject ? typeObject.color : "grey";
    });
    setChangeBackgroundColor(backgroundColors);
  }, [typesPokemon]);

  useEffect(() => {
    const backgroundColorsDrawer = typesPokemon.map((type) => {
      const typeObject2 = backgroundColorsTable.find((obj) => obj.name === type.type.name);
      return typeObject2 ? typeObject2.bgDrawer : "grey";
    });
    setChangeBackgroundColorDrawer(backgroundColorsDrawer);
  }, [typesPokemon]);


  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#fff',
      },
      secondary: {
        main: '#fff',
      },
    },
  });

  const nextClick = () => {
    setNumberPokemon(numberPokemon + 1);
  }

  // UseEffect permettant de placer un écouteur d'evenements sur le bouton "fleche de droite" et lord de l'appui de celui ci, ça affiche le pokemon suivant grace à la fonction nextClick().
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 39) {
        nextClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [numberPokemon]);

  const previousClick = () => {
    if (numberPokemon === 1) {
      return numberPokemon;
    }
    setNumberPokemon(numberPokemon - 1);
  }

  // UseEffect permettant de placer un écouteur d'evenements sur le bouton "fleche de gauche" et lord de l'appui de celui ci, ça affiche le pokemon précedent grace à la fonction previousClick().
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 37) {
        previousClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [numberPokemon]);

  const handlePokemonClick = (pokemonId) => {
    setNumberPokemon(pokemonId);
  };

  function handleSearch(value) {
    setSearchValue(value);
  }

  // Fonction permettant de récupérer une liste de Pokemon
  async function fetchPokemonList() {
    const listPokemons = await pokemonAPI.fetchPokemonList();
    setListPokemon(listPokemons)
  }

  useEffect(() => {
    fetchPokemonList();
  }, []);

  // Fonction permettant de récupérer l'image du Pokemon
  async function fetchPokemonImage(pokemonID) {
    const imageURL = await pokemonAPI.fetchPokemonImage(pokemonID);
    setImagePokemon(imageURL);
  }

  useEffect(() => {
    fetchPokemonImage(numberPokemon);
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
      style={{ background: `${changeBackgroundColor}` }}
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
              style={{ color: "#3c5aa6" }}
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
              style={{ color: "#3c5aa6" }}
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
      <PokemonList pokemonList={listePokemon} searchValue={searchValue} onPokemonClick={handlePokemonClick} backgroundColor={changeBackgroundColorDrawer} />
    </div>
  );    
}

export default App