import { Button, notification } from 'antd';
import style from './style.module.scss';
import icone from '../../assets/images/icones/pokeball.png';

// Fonction de notification qui fait apparaitre une pop-in et à l'intérieur de celui-ci un texte descriptif du pokemon
export function NotificationPokemon({ text, name }) {

    const [api, contextHolder] = notification.useNotification();

    const openNotification = () => {
        // Variable qui stock un ternaire changeant l'emplacement d'apparition de la pop-in selon la taille de l'ecran (ici initialisé à 576px ou moins)
        const placement = window.innerWidth <= 576 ? 'bottom' : 'bottomRight';
        api.open({
            message: `Information sur ${name}`, // Affichage du nom du pokemon dynamiquement
            description:
              <span className={style.text}>" {text.flavor_text} "</span>, // Affichage de sa description respectif 
            icon: (
                <img className={style.icone} src={icone} alt="pokeball" /> // Icone pokeball
            ),
            placement: placement,
});
    };
return (
    <>
        {contextHolder}
        {/** Bouton venant de Ant Design */}
        <Button
            type="primary"
            shape="circle"
            onClick={openNotification}
            className={style.notificationButton}
        >
            ?
        </Button>
    </>
);
};
export default NotificationPokemon;
