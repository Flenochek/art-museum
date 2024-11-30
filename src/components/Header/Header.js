import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-background"> 
      <header className="header">
        <div className="logo">
          <img src="/images/logo.png" alt="Museum Logo" />
          <span>Художественный музей</span>
        </div>
        <nav className="menu">
          <ul>
            <li><a href="#home">Главная</a></li>
            <li><a href="#about">О музее</a></li>
            <li><a href="#schedule">Афиша</a></li>
            <li><a href="#news">Новости</a></li>
            <li><a href="#contacts">Контакты</a></li>
          </ul>
        </nav>
        <button className="profile-button">Личный кабинет</button>
      </header>
    </div>
  );
};

export default Header;
