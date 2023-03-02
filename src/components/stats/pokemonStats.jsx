import { useState } from 'react';
import { pokemonAPI } from '../../api/pokemonAPI';
import style from './style.module.css';

export default function PokemonStats({test}) {
    return (
        <div>
            <p>
                {test}
            </p>
        </div>
    );
}