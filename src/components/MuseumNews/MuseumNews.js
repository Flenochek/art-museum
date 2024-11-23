import React from "react";
import "./MuseumNews.css"; 

const MuseumNews = () => {
  const newsItems = [
    {
      title: "Выставка «Искусство Будущего»",
      date: "2024-11-20",
      description: "Не пропустите уникальную выставку, которая откроет двери в мир будущего искусства!",
      image: "/images/pic1.jpg",
    },
    {
      title: "Лекция «Тайны Мастеров»",
      date: "2024-11-18",
      description: "Узнайте секреты великих художников на нашей лекции!",
      image: "/images/pic2.jpg",
    },
    {
      title: "Экскурсия по Музею",
      date: "2024-11-15",
      description: "Присоединяйтесь к увлекательной экскурсии и откройте для себя мир искусства!",
      image: "/images/pic3.jpg",
    },
    {
      title: "Перенос выставки «Свет и Тень»",
      date: "2024-11-10",
      description: "Внимание! Выставка переносится на следующую неделю. Не упустите шанс!",
      image: "/images/pic4.jpg",
    },
  ];

  return (
    <div className="museum-news">
      <div className="museum-stats">
        <div>
          <h3>150+</h3>
          <p>Уникальных экспонатов</p>
        </div>
        <div>
          <h3>20+</h3>
          <p>Мероприятий в месяц</p>
        </div>
        <div>
          <h3>5000+</h3>
          <p>Счастливых посетителей</p>
        </div>
      </div>
      <h1>Новости нашего музея</h1>
      <div className="news-grid">
        {newsItems.map((item, index) => (
          <div className="news-item" key={index}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.date}</p>
            <p>{item.description}</p>
            <button>К новостям</button>
          </div>
        ))}
      </div>  
    </div>
  );
};

export default MuseumNews;