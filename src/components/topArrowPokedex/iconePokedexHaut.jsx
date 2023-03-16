import style from './style.module.scss';
import arrow from '../../assets/images/icones/pokedex3.png';

// Composant qui affiche l'image d'un pokedex et sera utilisé dans le bouton "Pokedex"
export default function IconePokedexHaut() {
  return (
    <div className={style.container}>
      <img className={style.iconeFleche} src={arrow} alt="" width={"60px"} />
      <span className={style.title} >Voir Pokedex</span>
    </div>
  );
};


