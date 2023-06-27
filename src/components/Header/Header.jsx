import React from "react";
import logo from "../../assets/images/logo/logo_pokeAPI.svg";
import style from './style.module.scss';

// Composant qui affiche la NavBar avec dedans l'icone PokeAPI
function Header() {

  const handleLogoClick = () => {
    window.location.reload();
  };
  
  return (
    <nav className={style.navbar}>
      <div className={style.navbar__logo}>
        <img
          onClick={handleLogoClick}
          src={logo}
          alt="Logo" />
      </div>
    </nav>
  );
}

export default Header;