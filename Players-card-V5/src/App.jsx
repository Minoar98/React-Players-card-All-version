// Installed package
// import React from 'react';
import { useState } from "react";

// Self made package/folder/file
import Card from "./Card/Card";
import data from "./data";

// CSS files
import "./App.css";

function App() {
  const [players, _] = useState(data);
  const [count, setCount] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);

  // let count = 15;
  const clickHandler = (newCountValue) => {
    console.log("Clicked");
    setCount(newCountValue);

    // --------------------- Update State depends on previous state value ---------------------------------------
    // don't use like that
    // setCount(count+1);

    // recommanded way ->
    // while updating the state, updated value depends on previous state value
    // why? - to ensure that `setCount` will receive the exact same tracked current state value by React
    // vanilla
    // function fn(prevState) {
    //   return prevState + 1;
    // }
    // setCount(fn)

    // es6+
    // setCount((prevState) => prevState + 1);
    // --------------------- Update State depends on previous state value ---------------------------------------
  };

  return (
    <main>
      <header>
        <h1>Players Card</h1>
      </header>
      <p>count: {count}</p>
      <button onClick={() => clickHandler(10)}>Increase</button>
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
