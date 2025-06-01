# React-Players-card-version-1

✅ Create 1 reusable component (Card.jsx)

✅ Use it 6 times in a parent component (App.jsx)

✅ Pass player information as hardcoded props in object format

✅ Access that info in Card.jsx using props.keyName

# Step 1: Create the Card.jsx component

```jsx
import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Country: {props.country}</p>
      <p>Role: {props.role}</p>
    </div>
  );
};

export default Card;
```

## Step 2: Use Card 6 times in the parent (App.jsx)

```jsx
import Card from "./Card/Card";
import "./App.css";

function App() {
  return (
    <main>
      <header>
        <h1>Players Card</h1>
      </header>
      <section className="card-container">
        <Card
          name="Shakib Al Hasan"
          profession="Cricketer"
          gender="Male"
          age={35}
        />
        <Card
          name="Tamim Iqbal"
          profession="Cricketer"
          gender="Male"
          age={37}
        />
        <Card
          name="Nigar Sulatan"
          profession="Cricketer"
          gender="Female"
          age={27}
        />
        <Card name="Leo Messi" profession="Footballer" gender="Male" age={37} />
        <Card
          name="Cristiano Ronaldo"
          profession="Footballer"
          gender="Male"
          age={37}
        />
        <Card
          name="Siidikur Rahman"
          profession="Golfer"
          gender="Male"
          age={37}
        />
      </section>
    </main>
  );
}

export default App;
```

📦 Output (UI):
![Player Card Preview](public/Players-Card.png)

✅ Summary

| Topic           | Description                                                                              |
| --------------- | ---------------------------------------------------------------------------------------- |
| **Component**   | A reusable `Card` component is created to display player information.                    |
| **Props Usage** | Player data (`name`, `profession`, `age`, `gender`) is passed as props to the component. |
| **Reusability** | The `Card` component is reused 6 times in the parent component with different data.      |
