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
        {/* // using spread operator */}
        <Card {...players[0]} />
        <Card {...players[1]} />
        <Card {...players[2]} />
        <Card {...players[3]} />
        <Card {...players[4]} />
        <Card {...players[5]} />

        {/* <Card player={players[0]} />
        <Card player={players[1]} />
        <Card player={players[2]} />
        <Card player={players[3]} />
        <Card player={players[4]} />
        <Card player={players[5]} /> */}
      </section>
    </main>
  );
}

export default App;
