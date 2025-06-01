import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <article id="card" className="card">
      <p>
        <strong>Name: </strong>
        {props.name}
      </p>
      <p>
        <strong>Profession: </strong>
        {props.profession}
      </p>
      <p>
        <strong>Age: </strong>
        {props.age}
      </p>
      <p>
        <strong>Gender: </strong>
        {props.gender}
      </p>
    </article>
  );
};

export default Card;
