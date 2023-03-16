import style from './style.module.scss';

// Composant permettant de créer un ItemPokemon afficheant son image, son nom, ainsi que l'ordre (ID) propre lui même
export function ItemPokemon({ img, onclick, nom, id }) {

    // Fonction permettant d'ajouter un hashtag et un ou des zéros devant l'ID du pokemon
    function addZeros(id) {
        if (id < 10) {
            return "#00" + id;
        } else if (id < 100) {
            return "#0" + id;
        } else if (id > 100) {
            return "#" + id;
        } else {
        }   
    }

    return (
        <div
            key={id} // id unique à chaque création de composant ItemPokemon
            className={style.container}
            onClick={onclick}
        >
            <img src={img} alt="Image représentant un pokemon" />
            <h4>{nom}</h4>
            <span>{addZeros(id)}</span>     
        </div>
    );
}
