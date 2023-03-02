import { Progress, Space } from 'antd';
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
            <div className={style.progressBar}>
                {stats.map((stat) => (
                    <li key={stat.stat.url}>
                        <Progress percent={stat.base_stat} status="active" width={"100vw"} />
                    </li>
                ))}
            </div>
        </div>
    );
}