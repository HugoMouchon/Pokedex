
/** Tableau associatif qui contient des objets ayant trois propriétés : 
 1/ le nom exactement le même que le type du pokemon 
 2/ la couleur dégradé du fond de l'application en RGB
 3/ la couleur de fond de la fenetre modal (Composant Drawer) en HEXADECIMAL
 */ 
export const backgroundColorsTable = [
    {
        name: "normal", color: "linear-gradient(180deg, rgb(203, 198, 152) 20%, rgba(170, 166, 127, 1) 100%)", bgDrawer: "#aaa67f",
    },
    {
        name: "fighting", color: "linear-gradient(180deg, rgb(222, 150, 160) 20%, rgb(125, 14, 30) 100%)", bgDrawer: "#7d0e1e",
    },
    {
        name: "flying", color: "linear-gradient(180deg, rgb(183, 169, 224) 20%, rgb(119, 98, 182) 100%)", bgDrawer: "#7762b6",
    },
    {
        name: "ground", color: "linear-gradient(180deg, rgb(223, 209, 171) 20%, rgb(199, 170, 84) 100%)", bgDrawer: "#CAAE5D",
    },
    {
        name: "poison", color: "linear-gradient(180deg, rgb(170, 111, 166) 20%, rgba(164, 62, 158, 1) 100%)", bgDrawer: "#A5439F",
    },
    {
        name: "rock", color: "linear-gradient(180deg, rgb(215, 190, 75) 20%, rgb(182, 158, 49) 100%)", bgDrawer: "#B69E31",
    },
    {
        name: "bug", color: "linear-gradient(180deg, rgb(207, 213, 144) 20%, rgba(167, 183, 35, 1) 100%)", bgDrawer: "#ABBA2E",
    },
    {
        name: "ghost", color: "linear-gradient(180deg, rgb(179, 148, 230) 20%, rgba(112, 85, 155, 1) 100%)", bgDrawer: "#70559B",
    },
    {
        name: "steel", color: "linear-gradient(180deg, rgb(230, 230, 242) 20%, rgba(183, 185, 208, 1) 100%)",bgDrawer: "#B7B9D0",
    },
    {
        name: "fire", color: "linear-gradient(180deg, rgb(253, 167, 113) 20%, rgba(245, 125, 49, 1) 100%)",bgDrawer: "#F68138",
    },
    {
        name: "water", color: "linear-gradient(180deg, rgb(152, 188, 255) 20%, rgba(100, 147, 235, 1) 100%)", bgDrawer: "#6997ED",
    },
    {
        name: "grass", color: "linear-gradient(180deg, rgb(126, 215, 155) 20%, rgb(27, 135, 64) 100%)", bgDrawer: "#1C8841",
    },
    {
        name: "electric", color: "linear-gradient(180deg, #ffe27a 20%, rgba(249, 207, 48, 1) 100%)", bgDrawer: "#F9CF30",
    },
    {
        name: "psychic", color: "linear-gradient(180deg, rgb(250, 143, 173) 20%, rgba(251, 85, 132, 1) 100%)", bgDrawer: "#FB5584",
    },
    {
        name: "ice", color: "linear-gradient(180deg, rgb(180, 230, 237) 20%, rgb(108, 164, 173) 100%)", bgDrawer: "#9AD6DF",
    },
    {
        name: "dragon", color: "linear-gradient(180deg, rgb(156, 120, 248) 20%, rgba(112, 55, 255, 1) 100%)", bgDrawer: "#7037FF",
    },
    {
        name: "dark", color: "linear-gradient(180deg, rgb(169, 126, 110) 20%, rgba(117, 87, 76, 1) 100%)", bgDrawer: "#75574C",
    },
    {
        name: "fairy", color: "linear-gradient(180deg, rgb(232, 179, 190) 20%, rgba(230, 158, 172, 1) 100%)", bgDrawer: "#E69EAC",
    },
];