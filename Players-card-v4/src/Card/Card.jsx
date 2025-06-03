import React from "react";
import "./Card.css";

const Card = ({ name, profession, age, gender }) => {
  return (
    <article className="card" id="card">
      <p>
        <strong>Name:</strong>
        {name}
      </p>
      <p>
        <strong>Profession:</strong>
        {profession}
      </p>
      <p>
        <strong>Age:</strong>
        {age}
      </p>
      <p>
        <strong>Gender:</strong>
        {gender}
      </p>
    </article>
  );
};

export default Card;
