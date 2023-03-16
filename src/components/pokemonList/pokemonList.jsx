import { Drawer, Input, Space } from 'antd';
import { useState } from 'react';
import { ItemPokemon } from '../itemPokemon/itemPokemon';
import style from './style.module.scss';
import IconePokedexHaut from '../topArrowPokedex/iconePokedexHaut';

// Composant qui affiche la liste des pokemons
export function PokemonList({ pokemonList, onPokemonClick, backgroundColor }) {

  // UseState qui concerne l'ouverture du modal de Ant Design
  const [open, setOpen] = useState(false);
  const [placement] = useState('bottom');

  // UseState qui permet de stocker la valeur de l'utilisateur dans la barre de recherche
  const [searchValue, setSearchValue] = useState('');

  // Barre de recherche utilisant "Input.Search de la bibliothèque Ant Design"
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

  // Fonction qui met à jours l'état "open" avec la valeur "Vrai", rend donc visible le modal
  const showDrawer = () => {
    setOpen(true);
  };

  // Fonction qui met à jours l'état "open" avec la valeur "Faux", rend invisible le modal
  const onClose = () => {
    setOpen(false);
  };

  // Fonction permettant de filtrer le nom du pokemon dans la pokemonList avec la valeur tapé de l'utilisateur dans la barre de recherche
  function filterPokemonList(pokemonList, searchValue) {
    return pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }


  return (
    // Bouton qui ouvre la fenetre modal et affiche la liste de pokemon, ce bouton est accompagné du composant crée auparavant avec l'image pokedex animé
    <> {/** Fragment qui remplace la div  */}
      <Space>
        <button className={style.button}
          onClick={showDrawer}
          style={{ backgroundColor: "transparent", border: "none", boxShadow: "none", color: "#fff" }}
        >
          <IconePokedexHaut />
        </button>
      </Space>

      {/** Fenetre modal venant de la bibliothèque Ant Design */}
      <Drawer
        title={<SearchBar />} // Appel du composant "Searchbar" 
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        height="420px"
        style={{ textAlign: "center", background: `${backgroundColor}`, color: "#fff" }}
      >
        {/** Boucle permettant de créer autant de composant ItemPokemon qu'il y a de pokemon, et qui transmet en parametre 
         * 1/ le nom
         * 2/ l'image
         * 3/ l'ordre
         * -----------------------------------
         * 4/ fonction onclick qui retourne l'odre du pokemon
         * 5/ fonction onClose qui ferme la fenetre modal
         * 6/ fonction setSearchValue qui réinitialise la barre de recherche
         */}
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