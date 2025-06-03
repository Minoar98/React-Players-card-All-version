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
        {players.map((player, index) => {
          console.log(player);
          return <Card key={index} {...player} />;
        })}
      </section>
    </main>
  );
}

export default App;
