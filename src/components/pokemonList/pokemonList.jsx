import { Button, Drawer, Space } from 'antd';
import { useState } from 'react';
import { ItemPokemon } from '../itemPokemon/itemPokemon';
import style from './style.module.scss';
import IconePokedexHaut from '../topArrowPokedex/iconePokedexHaut';

export function PokemonList({ pokemonList, onclick, backgroundColor }) {

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('bottom');

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={showDrawer}
          style={{ backgroundColor: "transparent" }}
        >
          <IconePokedexHaut />
        </Button>
      </Space>
      <Drawer
        title={<span style={{ color: "#fff", textTransform: "uppercase" }}> Liste de Pokemons</span>}
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        style={{ textAlign: "center", background: `${backgroundColor}`, color: "#fff" }}
      >
        <div className={style.container_list}>
          {pokemonList.map((pokemon) => (
            <div key={pokemon.name}>
              <ItemPokemon img={pokemon.imageUrl} onClick={onclick} nom={pokemon.name} id={pokemon.number} />
            </div>
          ))}

        </div>

      </Drawer>
    </>
  );
};
export default PokemonList;