
const backgroundColorsTable = [
    {
        name: "normal", color: "linear-gradient(180deg, rgba(170, 166, 127, 1) 20%, rgba(170, 166, 127, 1) 100%)",
    },
    {
        name: "fighting", color: "linear-gradient(180deg, rgba(193, 34, 57, 1) 20%, rgba(193, 34, 57, 1) 100%)",
    },
    {
        name: "flying", color: "linear-gradient(180deg, rgba(168, 145, 236, 1) 20%, rgba(168, 145, 236, 1) 100%)",
    },
    {
        name: "ground", color: "linear-gradient(180deg, rgba(222, 193, 107, 1) 20%, rgba(222, 193, 107, 1) 100%)",
    },
    {
        name: "poison", color: "linear-gradient(180deg, rgba(164, 62, 158, 1) 20%, rgba(164, 62, 158, 1) 100%)",
    },
    {
        name: "rock", color: "linear-gradient(180deg, rgba(182, 158, 49, 1) 20%, rgba(182, 158, 49, 1) 100%)",
    },
    {
        name: "bug", color: "linear-gradient(180deg, rgba(167, 183, 35, 1) 20%, rgba(167, 183, 35, 1) 100%)",
    },
    {
        name: "ghost", color: "linear-gradient(180deg, rgba(112, 85, 155, 1) 20%, rgba(112, 85, 155, 1) 100%)",
    },
    {
        name: "steel", color: "linear-gradient(180deg, rgba(183, 185, 208, 1) 20%, rgba(183, 185, 208, 1) 100%)",
    },
    {
        name: "fire", color: "linear-gradient(180deg, rgba(245, 125, 49, 1) 20%, rgba(245, 125, 49, 1) 100%)",
    },
    {
        name: "water", color: "linear-gradient(180deg, rgba(100, 147, 235, 1) 20%, rgba(100, 147, 235, 1) 100%)",
    },
    {
        name: "grass", color: "linear-gradient(180deg, rgba(116, 203, 72, 1) 20%, rgba(116, 203, 72, 1) 100%)",
    },
    {
        name: "eletric", color: "linear-gradient(180deg, rgba(249, 207, 48, 1) 20%, rgba(249, 207, 48, 1) 100%)",
    },
    {
        name: "psychic", color: "linear-gradient(180deg, rgba(251, 85, 132, 1) 20%, rgba(251, 85, 132, 1) 100%)",
    },
    {
        name: "ice", color: "linear-gradient(180deg, rgba(154, 214, 223, 1) 20%, rgba(154, 214, 223, 1) 100%)",
    },
    {
        name: "dragon", color: "linear-gradient(180deg, rgba(112, 55, 255, 1) 20%, rgba(112, 55, 255, 1) 100%)",
    },
    {
        name: "dark", color: "linear-gradient(180deg, rgba(117, 87, 76, 1) 20%, rgba(117, 87, 76, 1) 100%)",
    },
    {
        name: "fairy", color: "linear-gradient(180deg, rgba(230, 158, 172, 1) 20%, rgba(230, 158, 172, 1) 100%)",
    },
];

export default function ChangeBackgroundColors({ types }) {
    return (
        <>
            {types.map((type) => {
                const typeObject = backgroundColorsTable.find((obj) => obj.name === type.type.name);
                const backgroundColor = typeObject ? typeObject.color : "grey";
                return (
                    backgroundColor
                );
            })}
        </>
    );
}
