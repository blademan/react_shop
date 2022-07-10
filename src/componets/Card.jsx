import React from 'react';

export default function Card(props) {
  const { addBasket = Function.prototype, id, name, description, price, full_background } = props;

  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={full_background} alt={description} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>

        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          onClick={() => addBasket({ id, name, price })}
          className="btn waves-effect waves-light"
          href="!">
          Add
        </button>
        <span className="right  ">$ {price}</span>
      </div>
    </div>
  );
}
