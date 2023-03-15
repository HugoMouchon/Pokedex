import { display } from '@mui/system';
import { Divider, Progress } from 'antd';
import style from './style.module.scss';


export default function PokemonStats({ stats }) {
    return (
        <div className={style.container}>
            <div>
                <Divider
                    className={style.divider}
                    type="horizontale"
                    style={{
                        writingMode: 'vertical-rl',
                        textOrientation: 'upright',
                    }}
                >
                    <span
                        className={style.titleStats}>
                        stats
                    </span>
                </Divider>
            </div>
            <div className={`${style.stats} ${style.statsDesktop}`}>
                <ul>
                    {stats.map((stat) => (
                        <li className={style.nomination} key={stat.stat.url}>
                            {stat.stat.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={style.barValeurs}>
                <div className={style.progressBar}>
                    {stats.map((stat) => (
                        
                        <li key={stat.stat.url} >
                            <span className={style.nameMobile}>{stat.stat.name}</span>
                            <div className={style.statItem}>
                            <Progress
                                percent={stat.base_stat}
                                width={"100%"}
                                strokeWidth={14}
                                showInfo={false}
                                strokeColor={"#fff"}
                            />
                            <span className={style.baseStatValue}>{stat.base_stat}</span>
                            </div>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
}