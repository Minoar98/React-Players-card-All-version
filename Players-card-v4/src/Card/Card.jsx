import PropTypes from 'prop-types';

import "./Card.css";

// immutable - will not change anymore

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

// - To know about the variables inside the `props`
// - What are the types of that variables

// Card.propTypes = {
//   name: PropTypes.string.isRequired,
//   profession: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,
//   gender: PropTypes.string.isRequired,
// };