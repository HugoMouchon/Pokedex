import { Drawer, Input, Space } from 'antd';
import { useState } from 'react';
import { ItemPokemon } from '../itemPokemon/itemPokemon';
import style from './style.module.scss';
import IconePokedexHaut from '../topArrowPokedex/iconePokedexHaut';

export function PokemonList({ pokemonList, onPokemonClick, backgroundColor }) {

  const [open, setOpen] = useState(false);
  const [placement] = useState('bottom');
  const [searchValue, setSearchValue] = useState('');

  const SearchBar = () => (
    <>
      <Input.Search
        placeholder="Entrez le nom d'un Pokemon"
        enterButton
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        style={{ width: "300px" }} />
    </>
  );

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  function filterPokemonList(pokemonList, searchValue) {
    return pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }


  return (
    <>
      <Space>
        <button className={style.button}
          onClick={showDrawer}
          style={{ backgroundColor: "transparent", border: "none", boxShadow: "none", color: "#fff" }}
        >
          <IconePokedexHaut />
        </button>
      </Space>

      <Drawer
        title={<SearchBar />}
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        height="420px"
        style={{ textAlign: "center", background: `${backgroundColor}`, color: "#fff" }}
      >
        <div className={style.container_list}>
          {filterPokemonList(pokemonList, searchValue).map((pokemon) => (
            <div key={pokemon.name} className={style.item}>
              <ItemPokemon img={pokemon.imageUrl} onclick={() => { onPokemonClick(pokemon.number); onClose(); setSearchValue(""); }} nom={pokemon.name} id={pokemon.number} />
            </div>
          ))}

        </div>
      </Drawer>
    </>
  );
};
export default PokemonList;