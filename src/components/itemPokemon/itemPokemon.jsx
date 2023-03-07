import style from './style.module.scss';

export function ItemPokemon({ gif, name, onClick, id }) {
    return (
        <div
            key={id}
            className={style.container}
            onClick={onClick}
        >
            <img src={gif.front_default} alt="" />
            <h4>{name}</h4>
        </div>
    );
}
