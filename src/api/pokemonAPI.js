import axios from "axios";
import { BASE_URL_POKEAPI } from '../config';

// Création d'une classe pokemonAPI qui regroupe des fonctions asynchone allant chercher différentes données depuis l'API officiel fournis par l'entreprise Nintendo et utilisant le client axios.
export class pokemonAPI {

    // Fonction qui récupère l'image depuis l'url de l'API
    static async fetchPokemonImage(pokemonID) {
        const response = await axios.get(`${BASE_URL_POKEAPI}pokemon/${pokemonID}`);
        return response.data.sprites.other.dream_world.front_default;
    };

    // Fonction qui récupère le nom depuis l'url de l'API
    static async fetchPokemonName(pokemonID) {
        const response = await axios.get(`${BASE_URL_POKEAPI}pokemon-species/${pokemonID}`);
        return response.data.names.filter((name) => name.language.name === "fr");

    };

    // Fonction qui récupère le poid depuis l'url de l'API
    static async fetchPokemonWeight(pokemonID) {
        const response = await axios.get(`${BASE_URL_POKEAPI}pokemon/${pokemonID}`);
        return response.data.weight;
    };

    // Fonction qui récupère la hauteur depuis l'url de l'API
    static async fetchPokemonHeight(pokemonID) {
        const response = await axios.get(`${BASE_URL_POKEAPI}pokemon/${pokemonID}`);
        return response.data.height;
    };

    // Fonction qui récupère les abilités depuis l'url de l'API
    static async fetchPokemonAbilities(pokemonID) {
        const response = await axios.get(`${BASE_URL_POKEAPI}pokemon/${pokemonID}`);
        return response.data.abilities;
    };

    // Fonction qui récupère le type depuis l'url de l'API
    static async fetchPokemonTypes(pokemonID) {
        const response = await axios.get(`${BASE_URL_POKEAPI}pokemon/${pokemonID}`);
        return response.data.types;
    };

    // Fonction qui récupère l'ordre depuis l'url de l'API
    static async fetchPokemonOrder(pokemonID) {
        const response = await axios.get(`${BASE_URL_POKEAPI}pokemon/${pokemonID}`);
        return response.data.order;
    };

    // Fonction qui récupère les statistiques depuis l'url de l'API
    static async fetchPokemonStats(pokemonID) {
        const response = await axios.get(`${BASE_URL_POKEAPI}pokemon/${pokemonID}`);
        return response.data.stats;
    };

    // Fonction qui récupère le texte descriptif depuis l'url de l'API
    static async fetchPokemonFlavorText(pokemonID) {
        const response = await axios.get(`${BASE_URL_POKEAPI}pokemon-species/${pokemonID}`);
        return response.data.flavor_text_entries.find(
            (entry) => entry.language.name === "fr"
        );
    };

    /** Fonction qui récupère une liste de pokemon depuis l'url de l'API avec leur : 
     * 1/ Nom
     * 2/ Image
     * 3/ Ordre (id)
     * */ 
    static async fetchPokemonList() {
        const response = await axios.get(`${BASE_URL_POKEAPI}pokemon/?offset=1&limit=300`);
        const pokemonList = response.data.results;
        const pokemonDataList = await Promise.all(pokemonList.map(async (pokemon) => {
            const response = await axios.get(pokemon.url);
            const pokemonData = {
                name: pokemon.name,
                number: response.data.id,
                imageUrl: response.data.sprites.other.dream_world.front_default,
            };
            return pokemonData;
        }));
        return pokemonDataList;
    }
}


