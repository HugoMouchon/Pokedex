import React from "react";
import logo from "../../assets/images/logo/logo_pokeAPI.svg";
import style from './style.module.scss';

function NavigationBar () {
  return (
    <nav className={style.navbar}>
      <div className={style.navbar__logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={style.navbar__search}>
        <form>
          <input type="text" placeholder="Taper le nom du Pokemon" />
          <button type="submit">Rechercher</button>
        </form>
      </div>
    </nav>
  );
}

export default NavigationBar;