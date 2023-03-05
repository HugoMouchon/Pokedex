// Manger 5 fruits et légumes par jours !
import style from './style.module.scss';

export const colorsTable = [
    {
        name: "normal", color: "#AAA67F",
    },
    {
        name: "fighting", color: "#C12239",
    },
    {
        name: "flying", color: "#A891EC",
    },
    {
        name: "ground", color: "#DEC16B",
    },
    {
        name: "poison", color: "#A43E9E",
    },
    {
        name: "rock", color: "#B69E31",
    },
    {
        name: "bug", color: "#A7B723",
    },
    {
        name: "ghost", color: "#70559B",
    },
    {
        name: "steel", color: "#B7B9D0",
    },
    {
        name: "fire", color: "#F57D31",
    },
    {
        name: "water", color: "#6493EB",
    },
    {
        name: "grass", color: "#74CB48",
    },
    {
        name: "eletric", color: "#F9CF30",
    },
    {
        name: "psychic", color: "#FB5584",
    },
    {
        name: "ice", color: "#9AD6DF",
    },
    {
        name: "dragon", color: "#7037FF",
    },
    {
        name: "dark", color: "#75574C",
    },
    {
        name: "fairy", color: "#E69EAC",
    },
];

export default function BadgePokemon({ types }) {

    return (
        <div className={style.container}>
            {types.map((type) => {
                const typeObject = colorsTable.find((obj) => obj.name === type.type.name);
                const backgroundColor = typeObject ? typeObject.color : "grey";
                return (
                    <span
                        key={type.type.name}
                        className={style.chips}
                        style={{ backgroundColor }}
                    >
                        {type.type.name}
                    </span>
                );
            })}
        </div>
    );
}
