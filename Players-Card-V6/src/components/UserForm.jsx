import { useState } from "react";

const UserForm = () => {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const changeHandler = (identifier, value) => {
    if (identifier === "name") {
      setName(value);
    } else if (identifier === "profession") {
      setProfession(value);
    } else if (identifier === "age") {
      setAge(value);
    } else if (identifier === "gender") {
      setGender(value);
    } else if (identifier === "isFavorite") {
      setIsFavorite(value);
    }
  };

  const clickHandler = (event) => {
    event.preventDefault();
    console.log("data submitted");

    // validation
    if (name.trim().length === 0 || name.trim().length < 5) {
      alert("name should be less than 5");
      return;
    }

    // const fixedAge = Number(age);
    const fixedAge = +age; // Alternate
    if (fixedAge < 0 || fixedAge >= 100) {
      alert("age should be 0 to 99");
      return;
    }

    // es6
    const user = {
      id: new Date().getTime(),
      name: name.trim(),
      profession,
      age: fixedAge,
      gender,
      isFavorite,
    };

    // user = {
    // name: 'sakib'
    // profession: 'Cricketer'
    // age: 20,
    // gender: 'Male'
    // isFavorite: false
    // }

    console.log("user: ", user);
    clearHandler();
  };

  const clearHandler = (event) => {
    event.preventDefault();
    setName("");
    setProfession("");
    setAge("");
    setGender("");
    setIsFavorite(false);
  };

  return (
    <form className="text-red-500 space-y-4 p-4 border rounded-md max-w-md mx-auto">
      <div>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => changeHandler("name", event.target.value)}
          className="text-red-500 border px-3 py-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="">Profession</label>
        <select
          value={profession}
          onChange={(event) => changeHandler("profession", event.target.value)}
          className="text-red-500 border px-3 py-2 w-full"
        >
          <option value=""> Profession</option>
          <option value="Cricketer">Cricketer</option>
          <option value="Footballer">Footballer</option>
          <option value="Golfer">Golfer</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Age</label>
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(event) => changeHandler("age", event.target.value)}
          className="text-red-500 border px-3 py-2 w-full"
        />
      </div>

      <div>
        <label>Gender</label>
        <select
          name="gender"
          value={gender}
          onChange={(event) => changeHandler("gender", event.target.value)}
          className="text-red-500 border px-3 py-2 w-full"
        >
          <option value=""> Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="">Favorite?</label>
        <input
          type="checkbox"
          checked={isFavorite}
          onChange={(event) =>
            changeHandler("isFavorite", event.target.checked)
          }
          className="text-red-500 border px-3 py-2 w-full"
        />
      </div>

      <div className="flex gap-2">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={clickHandler}
        >
          Submit
        </button>
        <button
          className="bg-gray-600 text-white px-4 py-2 rounded"
          onClick={clearHandler}
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default UserForm;


// use 5 states
// validation
// object creation
// checkbox special behavior
// clear all the fields

// for form, must use `event.preventDefault()`
// onChange e single function handler usage