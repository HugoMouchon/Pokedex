import style from './style.module.scss';
import arrow from '../../assets/images/icones/pokedex3.png';

export default function IconePokedexHaut() {
  return (
    <div className={style.container}>
      <img className={style.iconeFleche} src={arrow} alt="" width={"50px"} />
      <span className={style.title} >Liste des Pokemons</span>
    </div>
  );


  // <svg className={style.iconeFleche} xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
  //   <path d="M12 3l-12 18h24z" />
  // </svg>
};


