import React from "react";
import "./Card.css";

const Card = ({ player: { name, profession, age, gender = "Male" } }) => {
  // const { name, profession, age, gender } = props.player;

  return (
    <article id="card" className="card">
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Profession:</strong> {profession}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Gender:</strong> {gender}
      </p>
    </article>
  );
};

export default Card;
