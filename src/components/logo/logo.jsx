import style from './style.module.scss';

export function Logo({ image, titre }) {
    return (
        <>
            <div className={style.container}>
                <img className={style.image} src={image} alt="Logo de l'idétiteur de jeux vidéo Pokemon"/>
            </div>
        </>
    );
}