import { display } from '@mui/system';
import { Divider, Progress } from 'antd';
import style from './style.module.scss';

// Composant qui affiche les statistiques du pokemon
export default function PokemonStats({ stats }) {
    return (
        <div className={style.container}>
            <div>
                {/** Texte "Stat" affiché verticalement à gauche de la progressBar  */}
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

            {/** Affichage de la nomination des statistiques sur PC */}
            <div className={`${style.stats} ${style.statsDesktop}`}>
                <ul>
                    {stats.map((stat) => (
                        <li className={style.nomination} key={stat.stat.url}>
                            {stat.stat.name}
                        </li>
                    ))}
                </ul>
            </div>

            {/**  Affichage de la valeurs des statistiques sur PC & Mobile et affiche du nom sur Mobile également */}
            <div className={style.barValeurs}>
                <div className={style.progressBar}>
                    {stats.map((stat) => (

                        <li key={stat.stat.url} >
                            <span className={style.nameMobile}>{stat.stat.name}</span>
                            <div className={style.statItem}>
                                {/**  Composant Progress qui affiche les bar de progression de la bibliothèque "Ant Design" */}
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