import style from './style.module.css';

export default function PokemonStats({ stats }) {
    return (
        <div className={style.container}>
            <div className={style.stats}>
                <ul>
                    {stats.map((stat) => (
                        <li key={stat.stat.url}>
                            {stat.stat.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                
            </div>
            <div>
                <ul>
                    {stats.map((stat) => (
                        <li key={stat.stat.url}>
                            {stat.base_stat}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}