import style from './style.module.scss';

export function FlavorText({ text }) {
    return (
        <div className={style.text}>
            <h3>"{text.flavor_text}"</h3>
        </div>
    );
}