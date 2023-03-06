import axios from "axios";
import { BASE_URL_POKEAPI } from '../config';

export class pokemonAPI {
    static async fetchPokemonImage(pokemonID) {
        const response = await axios.get(`${BASE_URL_POKEAPI}pokemon/${pokemonID}`);
        return response.data.sprites.other.dream_world.front_default;
    };

    static async fetchPokemonName(pokemonID) {
        const response = await axios.get(`${BASE_URL_POKEAPI}pokemon-species/${pokemonID}`);
        return response.data.name;
    };
    
    static async fetchPokemonWeight(pokemonID) {
        const response = await axios.get(`${BASE_URL_POKEAPI}pokemon/${pokemonID}`);
        return response.data.weight;
    };

    static async fetchPokemonHeight(pokemonID) {
        const response = await axios.get(`${BASE_URL_POKEAPI}pokemon/${pokemonID}`);
        return response.data.height;
    };

    static async fetchPokemonAbilities(pokemonID) {
        const response = await axios.get(`${BASE_URL_POKEAPI}pokemon/${pokemonID}`);
        return response.data.abilities;
    };

    static async fetchPokemonTypes(pokemonID) {
        const response = await axios.get(`${BASE_URL_POKEAPI}pokemon/${pokemonID}`);
        return response.data.types;
    };

    static async fetchPokemonOrder(pokemonID) {
        const response = await axios.get(`${BASE_URL_POKEAPI}pokemon/${pokemonID}`);
        return response.data.order;
    };

    static async fetchPokemonStats(pokemonID) {
        const response = await axios.get(`${BASE_URL_POKEAPI}pokemon/${pokemonID}`);
        return response.data.stats;
    };

    static async fetchPokemonFlavorText (pokemonID) {
        const response = await axios.get(`${BASE_URL_POKEAPI}pokemon-species/${pokemonID}`);
        return response.data.flavor_text_entries.find(
            (entry) => entry.language.name === "fr"
          );
    };
}


