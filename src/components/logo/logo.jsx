import style from './style.module.css';

export function Logo({image}) {
    return (
        <>
            <div className={style.container}>
                <img className={style.image} src={image} alt="Logo de l'idétiteur de jeux vidéo Pokemon" />
            </div>
        </>
    );
}