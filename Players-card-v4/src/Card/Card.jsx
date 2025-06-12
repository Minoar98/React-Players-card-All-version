import "./Card.css";

// immutable - will not change anymore
// 1. non-reusable component
// 2. not able to show single responsibility principle
// 3. not able to show separate of concern

// README.md
// 1. key
// 2. props are immutable
// 3. style er priority gula
// 4. react er inline style
// 5. rest operator
// 6. Importing style (kunta age/kunta pore)

// v5
// hook -> useState

const Card = ({ name, ...restProps }) => {
  // console.log("restProps: ", restProps); // Object
  const { profession, age, gender } = restProps;

  return (
    <article className="card" id="card">
      <p
        style={{
          padding: "20px",
          background: "pink",
          // 'font-weight': 'bold'
          fontWeight: "bold",
        }}
      >
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
