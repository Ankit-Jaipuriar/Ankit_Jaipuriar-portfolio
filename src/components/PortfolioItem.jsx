import React, { useState } from "react";
import Close from "../assets/close.svg";

const PortfolioItem = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="portfolio__item">
      <img src={img} alt="" className="portfolio__img" />

      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
      </div>

      {modal && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <img src={Close} alt='' className="modal__close" onClick={toggleModal} />
            <h3 className="modal__title">{title}</h3>

            <ul className="modal__list grid">
              {details.map(({ icon, title, desc }, index) => (
                <li className="modal__item" key={index}>
                  <span className="item__icon">{icon}</span>
                  <div>
                    <span className="item__title">{title}</span>
                    {desc.startsWith("http") ? (
                      <a
                        href={desc}
                        className="item__details underline text-blue-500 hover:text-blue-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                          Visit
                      </a>
                    ) : (
                      <span className="item__details">{desc}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <img src={img} alt="" className="modal__img" />
          </div>
          <span className="modal__close" onClick={toggleModal}>
            <img src={Close} alt="Close" />
          </span>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
