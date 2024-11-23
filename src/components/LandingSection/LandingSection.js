import React from "react";
import "./LandingSection.css";

const LandingSection = () => {
  return (
    <div className="landing-section">
      <div className="text-block">
        <h1>Ваше путешествие в мир искусства начинается здесь!</h1>
        <p>
        Наш музей — это не просто галерея, а живая история искусства. Здесь вы найдете полотна старых мастеров, смелые современные работы и вдохновляющие экспонаты со всего мира. Откройте для себя красоту, разнообразие и магию искусства!
        </p>
      </div>
      <div className="color-block">
        <div className="image-block">
          <img src="/images/gallery.jpg" alt="Landing" />
        </div>
      </div>
    </div>
  );
};

export default LandingSection;