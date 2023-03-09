import style from './style.module.scss';

export function ItemPokemon({ img, onClick, nom, id }) {
    return (
        <div
            key={id}
            className={style.container}
            onClick={onClick}
        >
            <img src={img} alt="" />
            <h4>{nom}</h4>
            <span>{id}</span>
        </div>
    );
}
