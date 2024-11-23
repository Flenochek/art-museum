import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <nav className="nav">
        <a href="#main" className="nav-item">Главная</a>
        <a href="#info" className="nav-item">О музее</a>
        <a href="#afisha" className="nav-item">Афиша</a>
        <a href="#contacts" className="nav-item">Контакты</a>
        <a href="#profile" className="nav-item">Личный кабинет</a>
      </nav>
    </div>
  );
};

export default Header;
