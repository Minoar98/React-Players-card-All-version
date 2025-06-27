// Installed package
// import React from 'react';
import { useState } from "react";

// Self made package/folder/file
import Card from "./Card/Card";
import data from "./data";

// CSS files
import "./App.css";

function App() {
  const [players, setPlayers] = useState(data);

  const clickHandler = (id) => {
    setPlayers((prevState) => {
      return prevState.map((player) =>
        player.id === id
          ? { ...player, isFavorite: !player.isFavorite }
          : player
      );
    });
  };

  return (
    <main className="flex flex-col items-center bg-black text-white p-10 border-4 border-white rounded-[25px] max-w-[800px] mx-auto my-[30px] gap-[30px]">
      <header>
        <h1>Players Card</h1>
      </header>
      <section className="card-container">
        {players.map((player) => {
          return (
            <Card key={player.id} {...player} onClickHandler={clickHandler} />
          );
        })}
      </section>
    </main>
  );
}

export default App;
