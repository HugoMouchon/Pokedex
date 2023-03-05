import style from './style.module.scss';
import SearchIcon from '@mui/icons-material/Search';

export function SearchBar({ onSubmit }) {

    function submit(event) {
        if (event.key === "Enter" && event.target.value.trim() !== "")
            console.log(event.target.value);
        onSubmit(event.target.value);
    }

    return (
        <>
            <SearchIcon className={style.icon} size={27}/>
            <input
                onKeyUp={submit}
                className={style.input}
                type="text"
                placeholder='Nom du Pokemon'
            />
        </>
    );
}