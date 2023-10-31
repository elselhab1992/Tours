import React from "react";
import "./Tours.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useGlobalContext } from "../../components/Context/Context";

const Tours = ({ id, image, name, price, info, filteredTours }) => {
  const { readMore, setReadMore } = useGlobalContext();
  return (
    <section className="tours-section">
      <div className="tour-container">
        <div className="tour-img">
          <img src={image} alt={name} />
        </div>

        <div className="tour-info">
          <h2>{name}</h2>
          <h4 className="tour-price">${price}</h4>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? (
                <AiOutlineMinus className="info-icon" />
              ) : (
                <AiOutlinePlus className="info-icon" />
              )}
            </button>
          </p>
        </div>
        <div className="tour-btn">
          <button onClick={() => filteredTours(id)}>Remove Tour</button>
        </div>
      </div>
    </section>
  );
};

export default Tours;
