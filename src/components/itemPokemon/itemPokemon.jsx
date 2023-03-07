import style from './style.module.scss';

export function ItemPokemon({ gif, name }) {
    return (
        <div className={style.container}>
            <img src={gif.front_default} alt="" />
            <h4>{name}</h4>
        </div>
    );
}
