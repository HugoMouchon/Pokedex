import { Drawer, Space } from 'antd';
import { useState } from 'react';
import { ItemPokemon } from '../itemPokemon/itemPokemon';
import style from './style.module.scss';
import IconePokedexHaut from '../topArrowPokedex/iconePokedexHaut';
import Search from 'antd/es/transfer/search';

export function PokemonList({ pokemonList, onPokemonClick, backgroundColor }) {

  const [open, setOpen] = useState(false);
  const [placement] = useState('bottom');
  const [searchValue, setSearchValue] = useState('');

  const SearchBar = () => (
    <>
      <Search
        placeholder="Entrez le nom d'un Pokemon"
        loading
        enterButton
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        style={{ width: "100px" }} />
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
            <div key={pokemon.name} style={{ width: 'calc(100% / 7)' }} className={style.item}>
              <ItemPokemon img={pokemon.imageUrl} onclick={() => { onPokemonClick(pokemon.number); onClose(); }} nom={pokemon.name} id={pokemon.number} />
            </div>
          ))}

        </div>
      </Drawer>
    </>
  );
};
export default PokemonList;