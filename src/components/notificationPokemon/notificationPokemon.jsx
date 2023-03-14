import { Button, notification } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import style from './style.module.scss';
import icone from '../../assets/images/icones/pokeball.png';

export function NotificationPokemon({ text, name }) {

    const [api, contextHolder] = notification.useNotification();

    const openNotification = () => {
        api.open({
            message: `Information sur ${name}`,
            description:
               `" ${text.flavor_text} "`,
            icon: (
                <img className={style.icone} src={icone} alt="pokeball" />
            ),
            style: { backgroundColor: "#fff", color: "black" },
            placement: 'bottomRight',
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
        >
            ?
        </Button>
    </>
);
};
export default NotificationPokemon;
