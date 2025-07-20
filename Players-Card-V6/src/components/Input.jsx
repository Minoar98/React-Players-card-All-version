import { useState } from "react";

// Two way binding

const Input = () => {
  const [name, setName] = useState("");

  // Receiving the `event` value from React
  // const changeHandler = (event) => {
  //   setName(event.target.value);
  // }

  // Receiving the inner value of `event` from React
  // const changeHandler = (value) => {
  //   console.log(value);
  //   setName(value);
  // };

  const clickHandler = () => {
    console.log("name clicked", name);
  };

  return (
    <div>
      {/* <h1 className="text-lg">{name}</h1> */}
      <input
        type="text"
        value={name}
        // onChange={(event) => changeHandler(event)}
        // onChange={(event) => changeHandler(event.target.value)}
        onChange={(e) => setName(e.target.value)}
        name="name"
        placeholder="Please enter your name"
        className="p-2 rounded-md bg-red-100 text-gray-900"
      />
      <button onClick={clickHandler} className="rounded-md bg-red-500 p-2 ml-2">
        Submit
      </button>
      <button className="rounded-md bg-pink-400 p-2 ml-2">Clear</button>
    </div>
  );
};

export default Input;
