import React from "react";
import "./InfoItem.css";

const InfoItem = () => {
  return (
    <div className="info-item">
      <div className="image-container">
        <img src="/images/main.png" alt="Decorative Pillow" className="info-image" />
      </div>
      <div className="text-container">
        <h3 className="info-title">Printed memory foam brief modern throw pillow case</h3>
      </div>
    </div>
  );
};

export default InfoItem;