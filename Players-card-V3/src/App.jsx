import "./App.css";
import Card from "./Card/Card";
import players from "./data";

function App() {
  return (
    <main className="flex flex-col items-center bg-black text-white p-10 border-4 border-white rounded-[25px] max-w-[800px] mx-auto my-[30px] gap-[30px]">
      <header>
        <h1 className="span">Players Card</h1>
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
