import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="text-about-block">
        <h1>Вдохновляем поколения!</h1>
        <p>
        Наш музей — это место, где искусство оживает, создавая пространство для размышлений, вдохновения и общения. Здесь представлены произведения, которые переносят вас в разные эпохи, культуры и миры, помогая глубже понять не только искусство, но и саму суть человеческого существования.
        </p>
        <p>Музей не ограничивается лишь экспозицией картин. Мы предлагаем вам погрузиться в многослойную палитру художественного наследия через скульптуры, графику, фотографии и другие виды искусства. Каждый уголок нашего музея наполнен историями, которые переживают века и открывают новые смыслы с каждым взглядом.</p>
        {/* <p>Для нас важен не только эстетический аспект, но и взаимодействие с нашими посетителями. Мы организуем постоянные и временные выставки, образовательные программы, мастер-классы и перформансы. Каждое событие в нашем музее — это уникальная возможность увидеть искусство с другой стороны, почувствовать его вживую и стать частью этого творческого процесса.</p> */}
        <button className="button">Узнать больше</button>
      </div>

      <div className="image-about-block">
        <img src="/images/sculpture.jpg" alt="Landing" />
      </div>
    </div>
  );
};

export default AboutSection;