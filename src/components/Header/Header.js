import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="nav-item">Главная</a>
        <a href="/about" className="nav-item">О музее</a>
        <a href="/schedule" className="nav-item">Афиша</a>
        <a href="/contacts" className="nav-item">Контакты</a>
        <a href="/profile" className="nav-item">Личный кабинет</a>
      </nav>
    </header>
  );
};

export default Header;
