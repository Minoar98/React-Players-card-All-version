// Installed package
// import React from 'react';

// Self made package/folder/file
import Card from "./Card/Card";
import players from "./data";

// CSS files
import "./App.css";

function App() {
  return (
    <main>
      <header>
        <h1>Players Card</h1>
      </header>
      <section className="card-container">
        {players.map((player, index) => {
          console.log(player);
          return <Card key={index} {...player} />;
        })}
      </section>
    </main>
  );
}

export default App;
