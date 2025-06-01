🧠 React: Store Player Info in a Separate File Using Object & Array

✅ Step-by-step Plan

1. Store each player as an object inside an array
2. Export the array
3. Import the array where needed (App.jsx)
4. Use the array to render players using the <Card /> component
5. Use object destructuring as default parameters in the child (Card) component

📁 Step 1: Create data.js

👉 This file holds all player data

```jsx
const players = [
  { name: "Shakib al Hasan", profession: "Cricketer", age: 38, gender: "Male" },
  { name: "Tamim Iqbal", profession: "Cricketer", age: 37, gender: "Male" },
  { name: "Nigar Sultana", profession: "Cricketer", age: 27, gender: "Female" },
  { name: "Leo Messi", profession: "Footballer", age: 37, gender: "Male" },
  {
    name: "Cristiano Ronaldo",
    profession: "Footballer",
    age: 40,
    gender: "Male",
  },
  { name: " Siddikur Rahman", profession: "Golfer", age: 38, gender: "Male" },
];

export default players;
```

📁 Step 2: Import and Use the Array in App.jsx

```jsx
import "./App.css";
import Card from "./Card/Card";
import players from "./data";

function App() {
  return (
    <main>
      <header>
        <h1>Players Card</h1>
      </header>
      <section className="card-container">
        <Card player={players[0]} />
        <Card player={players[1]} />
        <Card player={players[2]} />
        <Card player={players[3]} />
        <Card player={players[4]} />
        <Card player={players[5]} />
      </section>
    </main>
  );
}

export default App;
```

📁 Step 3: Use Object Destructuring in Card Component (with Default Parameter)

```jsx
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
```

✅ Summary Table

| Step | Description                                                                  |
| ---- | ---------------------------------------------------------------------------- |
| 1    | Player data stored as objects inside an array in a separate file             |
| 2    | The array is exported                                                        |
| 3    | Array is imported where needed                                               |
| 4    | Players used in `<Card />` component like `<Card player={players[0]} />`     |
| 5    | Destructuring used in the `Card` component with a default value for `gender` |
