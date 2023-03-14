import { Button, notification } from 'antd';
import style from './style.module.scss';
import icone from '../../assets/images/icones/pokeball.png';

export function NotificationPokemon({ text, name }) {

    const [api, contextHolder] = notification.useNotification();

    const openNotification = () => {
        const placement = window.innerWidth <= 576 ? 'bottom' : 'bottomRight';
        api.open({
            message: `Information sur ${name}`,
            description:
               `" ${text.flavor_text} "`,
            icon: (
                <img className={style.icone} src={icone} alt="pokeball" />
            ),
            style: { backgroundColor: "#fff", color: "black" },
            placement: placement,
});
    };
return (
    <>
        {contextHolder}

        <Button
            type="primary"
            shape="circle"
            onClick={openNotification}
            style={{ backgroundColor: '#fff', color: '#1b8740' }}
            className={style.notificationButton}
        >
            ?
        </Button>
    </>
);
};
export default NotificationPokemon;
