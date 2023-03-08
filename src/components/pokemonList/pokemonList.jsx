import { Button, Drawer, Space } from 'antd';
import { useState } from 'react';
import { ItemPokemon } from '../itemPokemon/itemPokemon';

export function PokemonList({ gif, name, onclick, id }) {

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
        <Button type="primary" onClick={showDrawer}>
          Liste de Pokemons
        </Button>
      </Space>
      <Drawer
        title="Liste de Pokemons"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        style={{ textAlign: "center", backgroundColor: "#7ed79b", color: "#fff" }}
      >
        <div>
          <ItemPokemon gif={gif} name={name} onClick={onclick} id={id} />
        </div>

      </Drawer>
    </>
  );
};
export default PokemonList;