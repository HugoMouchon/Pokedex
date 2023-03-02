import axios from "axios";
import { BASE_URL_POKEAPI } from '../config';

export class pokemonAPI {
    static async fetchPokemonImage(pokemonID) {
        const response = await axios.get(`${BASE_URL_POKEAPI}pokemon/${pokemonID}`);
        return response.data.sprites.other.dream_world.front_default;
    };

    static async fetchPokemonName(pokemonID) {
        const response = await axios.get(`${BASE_URL_POKEAPI}pokemon/${pokemonID}`);
        return response.data.species.name;
    };

    static async fetchPokemonWeight(pokemonID) {
        const response = await axios.get(`${BASE_URL_POKEAPI}pokemon/${pokemonID}`);
        return response.data.weight;
    };

    static async fetchPokemonHeight(pokemonID) {
        const response = await axios.get(`${BASE_URL_POKEAPI}pokemon/${pokemonID}`);
        return response.data.height;
    };
}