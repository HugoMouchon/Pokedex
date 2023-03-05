import React from "react";
import logo from "../../assets/images/logo/logo_pokeAPI.svg";
import { SearchBar } from "../searchBar/searchBar";
import style from './style.module.scss';

function NavigationBar ({onSubmit}) {
  return (
    <nav className={style.navbar}>
      <div className={style.navbar__logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={style.navbar__search}>
        <SearchBar onSubmit={onSubmit}/>
      </div>
    </nav>
  );
}

export default NavigationBar;