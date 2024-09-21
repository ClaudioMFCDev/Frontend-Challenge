import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faDragon, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../../styles/card.css'; 

interface CardProps {
  state: string;
  stock: string;
  price: string;
  oldPrice: string;
  name: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ state, stock, price, oldPrice, name, description, image }) => {
  return (
    <div className="card">
      <div className="card-header">
        <p id="card-state">
          <FontAwesomeIcon icon={faCircle} className="icon-green" />
          {state}
        </p>
        <div className="card-amount">
          <input type="number" value={1} />
        </div>
      </div>

      <div className="card-stock">
        <span className="stock-label">{stock}</span>
      </div>

      <div className="image">
        <img src={image} alt={name} />
      </div>

      <div className="card-details">
        <p className="card-name">
          {name}
          <FontAwesomeIcon icon={faDragon} className="icon-green" />
        </p>
        <p className="card-price">
          {price} <span className="old-price">{oldPrice}</span>
        </p>
        <p className="card-description">{description}</p>
      </div>

      <div className="card-actions">
        <button className="details-btn">DETAILS</button>
        <button className="add-btn">
          ADD <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </div>
  );
};

export default Card;
