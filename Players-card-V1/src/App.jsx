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
