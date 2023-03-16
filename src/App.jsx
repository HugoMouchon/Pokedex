import style from './style.module.scss';
import '../src/sass/global.scss';
import React, { useEffect, useState } from 'react';
import NavBar from './components/navbar/navbar';
import { pokemonAPI } from './api/pokemonAPI';
import PokemonStats from './components/stats/pokemonStats';
import BadgePokemon from './components/badge/badgePokemon';
import { Button } from 'antd';
import PokemonList from './components/pokemonList/pokemonList';
import NotificationPokemon from './components/notificationPokemon/notificationPokemon';
import { backgroundColorsTable } from './components/backgroundColorsTable/backgroundColorsTable';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';

export function App() {
  /*Déclaration des différents constantes avec l'utilisation du hook useState() afin de récupérer les informations du pokemon:
    1/ L'image
    2/ Le nom
    3/ Le poid
    4/ La hauteur
    5/ L'abilité
    6/ Le type
    7/ L'ID
    8/ Les statistiques
    9/ Le texte descriptif
  */
  const [imagePokemon, setImagePokemon] = useState();
  const [namePokemon, setNamePokemon] = useState();
  const [weightPokemon, setWeightPokemon] = useState();
  const [heightPokemon, setHeightPokemon] = useState();
  const [abilitiesPokemon, setAbilitiesPokemon] = useState([]);
  const [typesPokemon, setTypesPokemon] = useState([]);
  const [orderPokemon, setOrderPokemon] = useState();
  const [statsPokemon, setStatsPokemon] = useState([]);
  const [flavorTextPokemon, setFlavorTextPokemon] = useState([]);
  /* 
    Déclaration de deux états afin de changer respitevement la couleur de fond de l'application ainsi que la couleur de fond du modal (Liste de pokemon)
  */
  const [changeBackgroundColor, setChangeBackgroundColor] = useState([]);
  const [changeBackgroundColorDrawer, setChangeBackgroundColorDrawer] = useState([]);
  /* 
    Déclaration d'un état qui va stocker dans une liste les différentes informations (Nom, Image, Ordre)
  */
  const [listePokemon, setListPokemon] = useState([]);
  /* 
  Déclaration d'un état qui va initialiser l'application Pokedex au pokemon N°1
*/
  const [numberPokemon, setNumberPokemon] = useState(1);

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

  // Fonction qui permet mettre à jours "numberPokemon" en l'incrémentant de 1 à chaque click.
  const nextClick = () => {
    setNumberPokemon(numberPokemon + 1);
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

  // Utilisation d'une fonction asynchrone permettant de récupérer les données pour la future liste pokemon, données stockée dans la variable "listPokemon", si une erreur se produit pendant l'appel avec une erreur sera afficher dans la console de l'utilisateur
  async function fetchPokemonList() {
    try {
      const listPokemons = await pokemonAPI.fetchPokemonList();
      setListPokemon(listPokemons)
    } catch (error) {
      console.log("Erreur durant la recupération de la liste Pokemon");
    }
  }

  // Appel de la fonction fetchPokemonList() qu'une seule fois
  useEffect(() => {
    fetchPokemonList();
  }, []);

  // Utilisation d'une fonction asynchrone permettant de récupérer l'image du pokemon, données stockée dans la variable "imageURL", si une erreur se produit pendant l'appel avec une erreur sera afficher dans la console de l'utilisateur
  async function fetchPokemonImage(pokemonID) {
    try {
      const imageURL = await pokemonAPI.fetchPokemonImage(pokemonID);
      setImagePokemon(imageURL);
    } catch (error) {
      console.log("Erreur lors de la récupération de l'image du Pokemon");
    }
  }

  // Appel de la fonction fetchPokemonImage() qui prend en paramètre le nombre pokemon (initialisé à 1 par défaut) et qui mettra à jours automatiquement l'image si ce dernier change de valeur
  useEffect(() => {
    fetchPokemonImage(numberPokemon);
  }, [numberPokemon]);

  // Utilisation d'une fonction asynchrone permettant de récupérer le nom du pokemon, données stockée dans la variable "names", si il n'existe pas, un message s'affiche à la place et/ou si il y a une erreur technique qui se produit pendant l'appel de cette fonction une erreure sera afficher dans la console de l'utilisateur
  async function fetchPokemonName(pokemonID) {
    try {
      const names = await pokemonAPI.fetchPokemonName(pokemonID);
      if (names.length > 0) {
        setNamePokemon(names[0].name);
      } else {
        setNamePokemon("Pokemon Inconnu");
      }
    } catch (error) {
      console.log("Erreur lors de la récupération du nom du Pokemon");
    }
  }

  // Appel de la fonction fetchPokemonName() qui prend en paramètre le nombre pokemon (initialisé à 1 par défaut) et qui mettra à jours automatiquement le nom si ce dernier change de valeur
  useEffect(() => {
    fetchPokemonName(numberPokemon);
  }, [numberPokemon])

  // Utilisation d'une fonction asynchrone permettant de récupérer le poid du pokemon, données stockée dans la variable "weight", si une erreur se produit pendant l'appel avec une erreur sera afficher dans la console de l'utilisateur
  async function fetchPokemonWeight(pokemonID) {
    try {
      const weight = await pokemonAPI.fetchPokemonWeight(pokemonID);
      setWeightPokemon(weight);
    } catch (error) {
      console.log("Erreur lors de la récupération du poid du Pokemon");
    }
  }

  // Appel de la fonction fetchPokemonWeight() qui prend en paramètre le nombre pokemon (initialisé à 1 par défaut) et qui mettra à jours automatiquement le poid si ce dernier change de valeur
  useEffect(() => {
    fetchPokemonWeight(numberPokemon);
  }, [numberPokemon])

  // Utilisation d'une fonction asynchrone permettant de récupérer la hauteur du pokemon, données stockée dans la variable "height", si une erreur se produit pendant l'appel avec une erreur sera afficher dans la console de l'utilisateur
  async function fetchPokemonHeight(pokemonID) {
    try {
      const height = await pokemonAPI.fetchPokemonHeight(pokemonID);
      setHeightPokemon(height);
    } catch (error) {
      console.log("Erreur lors de la récupération de la hauteur du Pokemon");
    }
  }
  // Appel de la fonction fetchPokemonHeight() qui prend en paramètre le nombre pokemon (initialisé à 1 par défaut) et qui mettra à jours automatiquement la hauteur si ce dernier change de valeur
  useEffect(() => {
    fetchPokemonHeight(numberPokemon);
  }, [numberPokemon])

  // Utilisation d'une fonction asynchrone permettant de récupérer les abilités du pokemon, données stockée dans la variable "abilities", mais ne garde que le premier de la liste. Si une erreur se produit pendant l'appel avec une erreur sera afficher dans la console de l'utilisateur
  async function fetchPokemonAbilities(pokemonID) {
    try {
      const abilities = await pokemonAPI.fetchPokemonAbilities(pokemonID);
      setAbilitiesPokemon(abilities.slice(0, 1));
    } catch (error) {
      console.log("Erreur lors de la récupération de l'abilité principale du Pokemon");
    }
  }
  // Appel de la fonction fetchPokemonAbilities() qui prend en paramètre le nombre pokemon (initialisé à 1 par défaut) et qui mettra à jours automatiquement la liste d'abilités si ce dernier change de valeur
  useEffect(() => {
    fetchPokemonAbilities(numberPokemon);
  }, [numberPokemon])

  // Utilisation d'une fonction asynchrone permettant de récupérer le ou les types du pokemon, données stockée dans la variable "types", mais ne garde que le premier de la liste. Si une erreur se produit pendant l'appel avec une erreur sera afficher dans la console de l'utilisateur
  async function fetchPokemonTypes(pokemonID) {
    try {
      const types = await pokemonAPI.fetchPokemonTypes(pokemonID);
      setTypesPokemon(types.slice(0, 1));
    } catch (error) {
      console.log("Erreur lors de la récupération du type du Pokemon");
    }
  }

  // Appel de la fonction fetchPokemonTypes() qui prend en paramètre le nombre pokemon (initialisé à 1 par défaut) et qui mettra à jours automatiquement la liste de types si ce dernier change de valeur
  useEffect(() => {
    fetchPokemonTypes(numberPokemon);
  }, [numberPokemon])

  // Utilisation d'une fonction asynchrone permettant de récupérer le numéro d'ordre du pokemon, données stockée dans la variable "ordre", si une erreur se produit pendant l'appel avec une erreur sera afficher dans la console de l'utilisateur
  async function fetchPokemonOrder(pokemonID) {
    try {
      const ordre = await pokemonAPI.fetchPokemonOrder(pokemonID);
      setOrderPokemon(ordre);
    } catch (error) {
      console.log("Erreur lors de la récupération de L'ID du Pokemon");
    }
  }
  // Appel de la fonction fetchPokemonOrder() qui prend en paramètre le nombre pokemon (initialisé à 1 par défaut) et qui mettra à jours automatiquement l'ordre si ce dernier change de valeur
  useEffect(() => {
    fetchPokemonOrder(numberPokemon);
  }, [numberPokemon])

  // Utilisation d'une fonction asynchrone permettant de récupérer une tableau de statistiques du pokemon, données stockée dans la variable "stats", si une erreur se produit pendant l'appel avec une erreur sera afficher dans la console de l'utilisateur
  async function fetchPokemonStats(pokemonID) {
    try {
      const stats = await pokemonAPI.fetchPokemonStats(pokemonID);
      setStatsPokemon(stats);
    } catch (error) {
      console.log("Erreur lors de la récupération des statistiques du Pokemon");
    }
  }

  // Appel de la fonction fetchPokemonStats() qui prend en paramètre le nombre pokemon (initialisé à 1 par défaut) et qui mettra à jours automatiquement les différentes statistiques si ce dernier change de valeur
  useEffect(() => {
    fetchPokemonStats(numberPokemon);
  }, [numberPokemon])

  // Utilisation d'une fonction asynchrone permettant de récupérer le texte descriptif du pokemon, données stockée dans la variable "text", si une erreur se produit pendant l'appel avec une erreur sera afficher dans la console de l'utilisateur
  async function fetchPokemonFlavorText(pokemonID) {
    try {
      const text = await pokemonAPI.fetchPokemonFlavorText(pokemonID);
      setFlavorTextPokemon(text);
    } catch (error) {
      console.log("Erreur lors de la récupération du texte descriptif du Pokemon");
    }
  }

  // Appel de la fonction fetchPokemonFlavorText() qui prend en paramètre le nombre pokemon (initialisé à 1 par défaut) et qui mettra à jours automatiquement le texte descriptif si ce dernier change de valeur
  useEffect(() => {
    fetchPokemonFlavorText(numberPokemon);
  }, [numberPokemon])

  // Fonction permettant d'ajouter un hashtag et un ou des zéros devant le numéro d'ordre du pokemon
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

  // Fonction permettant de convertir la mesure anglaise "Pied" en "Mètres" pour plus de compréhension.
  function converterFeetToMeter(heightPokemon) {
    const meter = heightPokemon / 3.048
    return meter.toFixed(2);
  }

  // Fonction permettant de convertir la mesure anglaise "Pound" en "Kilos" pour plus de compréhension.
  function converterToKilos(weightPokemon) {
    const kilos = weightPokemon / 10
    return kilos.toFixed(2);
  }

  return (
    <div className={style.container}
      style={{ background: `${changeBackgroundColor}` }} // Change la couleur de fond par rapport au type du Pokemon
    >
      <div className={style.header}>
        <NavBar onSubmit={fetchPokemonName} />
      </div>

      <div className={style.container_PreviousNext}>
        <div className={style.previousDesktop}>

          {/** Bouton Précedent affiché sur PC */}
          <Button
            onClick={previousClick}
            variant="contained"
            icon={<CaretLeftOutlined />}
            color="primary"
            className={style.btnPreviousDesktop}
          >
            {orderPokemon - 1} Précedent
          </Button>
        </div>

        {/** Bouton Suivant affiché sur Mobile*/}
        <div className={style.previousMobile}>
          <Button
            onClick={previousClick}
            icon={<CaretLeftOutlined />}
            size='large'
            style={{ borderRadius: 0, borderTopRightRadius: 30 }}
          >
          </Button>
        </div>

        <div className={style.container_details}>
          <div className={style.container_nomination2}>
            <div className={style.container_types}>
              {typesPokemon && typesPokemon.map((type) => (
                <div key={type.slot}>
                  <BadgePokemon types={typesPokemon} /> {/** Composant Badge qui permet d'afficher le type de pokemon */}
                </div>
              ))}
            </div>
            <h1>{namePokemon}</h1> {/** Nom du pokemon */}
            <div className={style.container_nomination1}>
              <div>
                <p>Poid : </p>
                <p>Hauteur : </p>
                <p>Abilitées :</p>
              </div>
              <div className={style.container_abilities}>
                <p>{converterToKilos(weightPokemon)} Kg</p> {/** Appel de la fonction qui tranforme le poid en Kilos */}
                <p>{converterFeetToMeter(heightPokemon)} M</p> {/** Appel de la fonction qui tranforme la hauteur en Mètre */}
                <div className={style.ability}>
                  {abilitiesPokemon && abilitiesPokemon.map((ability) => (
                    <div key={ability.slot}>
                      <span>{ability.ability.name}</span> {/** Affichage de la l'abilité du pokemon */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={style.container_image}>
            <img className={style.image} src={imagePokemon} alt="" /> {/** Image du Pokemon */}
            <span className={style.number}>{addZeros(orderPokemon)}</span> {/** fonction rajoutant un # et 1 ou 2 zéros devant le numéro du pokemon */}
            <NotificationPokemon name={namePokemon} text={flavorTextPokemon} /> {/** Composant qui affiche une phrase descriptif du pokemon */}
          </div>
        </div>

        {/** Bouton Suivant affiché sur PC */}
        <div className={style.nextDesktop}>
          <Button
            onClick={nextClick}
            variant="contained"
            icon={<CaretRightOutlined />}
            className={style.btnNextDesktop}
            color="primary"
          >
            Suivant {orderPokemon + 1}
          </Button>
        </div>

        {/** Bouton Suivant affiché sur Mobile */}
        <div className={style.nextMobile}>
          <Button
            onClick={nextClick}
            icon={<CaretRightOutlined />}
            size='large'
            style={{ borderRadius: 0, borderTopLeftRadius: 30 }}
          >
          </Button>
        </div>
      </div>

      {/** Composant Stat qui d'afficher les différentes statistique avec le composant progressBar de la bibliothèque Ant Design */}
      <div className={style.container_stats}>
        <div className={style.statistique}>
          <PokemonStats
            stats={statsPokemon}
          />
        </div>
      </div>
      {/** Composant qui affiche une liste de pokemon cliquable  */}
      <PokemonList pokemonList={listePokemon} onPokemonClick={handlePokemonClick} backgroundColor={changeBackgroundColorDrawer} />
    </div>
  );
}

export default App