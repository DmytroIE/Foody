import React from 'react';

function MenuItemCard({ name, imageURL, price }) {
  return (
    <div className="card">
      <div className="card__img-cont">
        <img className="card__img" src={imageURL} alt="Meal" />
        <h2 className="card__name">{name}</h2>
        <p className="card__price">{price}</p>
      </div>
    </div>
  );
}

export default MenuItemCard;
