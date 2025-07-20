// Installed package
import { useState } from "react";
import { Heart } from "lucide-react";

// Self made package/folder/file
import data from "./data";
import Card from "./components/Card/Card";
import HeartIcon from "./components/Card/HeartIcon";
import Input from "./components/Input";
import Allinput from "./components/AllInput";
import UserForm from "./components/UserForm";

// css file
import "./App.css";

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
        <div>
          {/* <Allinput/> */}
          <UserForm />
          {/* <Input /> */}
        </div>
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

// topics
