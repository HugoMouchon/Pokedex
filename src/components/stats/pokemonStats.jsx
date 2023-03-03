import { Divider, Progress } from 'antd';
import style from './style.module.scss';


export default function PokemonStats({ stats }) {
    return (
        <div className={style.container}>
            <div>
                <Divider className={style.divider}
                    type="horizontale"
                    style={{
                        writingMode: 'vertical-rl',
                        textOrientation: 'upright',
                    }}
                >
                    <span>stats</span>
                </Divider>
            </div>
            <div className={style.stats}>
                <ul>
                    {stats.map((stat) => (
                        <li className={style.nomination} key={stat.stat.url}>
                            {stat.stat.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={style.progressBar}>
                {stats.map((stat) => (
                    <li key={stat.stat.url}>
                        <Progress percent={stat.base_stat} width={"100%"} strokeWidth={14} showInfo={false} strokeColor={"#fff"} />
                    </li>
                ))}
            </div>
            <div className={style.stats}>
                <ul>
                    {stats.map((stat) => (
                        <li className={style.valeurs} key={stat.stat.url}>
                            {stat.base_stat}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}