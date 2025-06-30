// Installed package
import { useState } from "react";
import { Heart } from "lucide-react";

// css file
import "./App.css";
// Self made package/folder/file

import data from "./data";
import Card from "./Card/Card";
import HeartIcon from "./Card/HeartIcon";

function App() {
  const [players, setPlayers] = useState(data);

  const clickHandler = (id) => {
    setPlayers((prevState) => {
      return prevState.map(
        (player) =>
          player.id === id // jake love/hate kori tare khuje ber korsi
            ? { ...player, isFavorite: !player.isFavorite } // update/modification (first e choray disi then toggle korsi)
            : player // ja ase tai return
      );
    });
  };

  return (
    <>
      <main className="flex flex-col items-center bg-black text-white p-10 border-4 border-white rounded-[25px] max-w-[800px] mx-auto my-[30px] gap-[30px]">
        <header>
          <h1 className="span">Players Card</h1>
        </header>
        <section className="card-container">
          {players.map((player) => {
            return (
              <Card key={player.id} {...player} onClickHandler={clickHandler} />
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;

// 1. props -> primitive data (string, number, boolean etc)
// 2. props -> function
// 3. props -> component
// 3. props -> jsx
