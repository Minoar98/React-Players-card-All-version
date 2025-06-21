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
      {/* <button onClick={() => clickHandler(10)}>Increase</button> */}
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

// ## When use `onClick={clickHandler}`?
// Answer
// 1. `clickHandler` is not taking any parameter
// 2. Used function reference in `onClick`

// ```js
// const App = () => {
//     const [count, setCount] = useState(0);

//     // After clicking the `Increase` button, `clickHandler` will execute
//     const clickHandler = () => {
//       setCount(10); // Update the state
//     }

//     return (
//       <button onClick={clickHandler}>Increase</button>
//     )
// }
// ```

// ## When use `onClick={() => clickHandler(x)}`?
// Answer
// 1. `clickHandler` is taking a parameter
// 2. Used arrow function reference in `onClick`
// 3. Inside arrow function, call the `clickHandler` function with some value

// ```js
// const App = () => {
//     const [count, setCount] = useState(0);

//     // After clicking the `Increase` button, `clickHandler` will execute
//     const clickHandler = (cnt) => {
//       setCount(cnt); // Update the state
//     }

//     return (
//       <button onClick={() => clickHandler(10)}>Increase</button>
//     )
// }
// ```

// ## If State update depends on previous state value
// Answer:
// - Use `setCount((prevState) => prevState + 1)` instead of `setCount(count+1)`
// 1. Pass a arrow function in `setCount` instead of value
// 2. That arrow function is taking a parameter which is the previous state provided by React itself
// 3. Now you can update the state & that arrow function must return the updated state

// ## Why do I write the code while updating the state which is depending on its previous state?
// Answer:
// - When I use multiple state update operation, then I must ensure that for a specific state update operation which state value depends on its previous state value, I am using the right previous state value
// - If I have the following code:

// ```js
// const clickHandler = () => {
//   setCount(count+1);
//   setIsLoading(false);
//   setData(data);
//   setValue(value);
// }
// ```

// - Then I must write the following code only for `setCount` as `count` depends on its previous state value:

// ```js
// const clickHandler = () => {
//   setCount((prevState) => prevState + 1); // Change here
//   setIsLoading(false);
//   setData(data);
//   setValue(value);
// }
// ```
