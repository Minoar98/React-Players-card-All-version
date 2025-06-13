// Installed package
// import React from 'react';
import { useState } from "react";

// Self made package/folder/file
import Card from "./Card/Card";
import players from "./data";

// CSS files
import "./App.css";

function App() {
  const [count, setCount] = useState(15);
  // const [isLoading, setIsLoading] = useState(false);

  // let count = 15;
  const clickHandler = () => {
    console.log("Clicked");
    setCount(20);
    // count = 20;
  };
  return (
    <main>
      <header>
        <h1>Players Card</h1>
      </header>
      <p>count: {count}</p>
      <button onClick={clickHandler}>Increase</button>
      <section className="card-container">
        {players.map((player) => {
          // console.log(player);
          return <Card key={player.id} {...player} />;
        })}
      </section>
    </main>
  );
}

export default App;
