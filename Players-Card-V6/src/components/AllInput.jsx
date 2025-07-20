import { useState } from "react";

const Allinput = () => {
  const [inputs, setInputs] = useState({
    name: "",
    profession: "",
    gender: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", inputs);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-red-500 space-y-4 p-4 border rounded-md max-w-md mx-auto"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={inputs.name}
        onChange={handleChange}
        className="text-red-500 border px-3 py-2 w-full"
      />
      <select
        name="profession"
        value={inputs.profession}
        onChange={handleChange}
        className="text-red-500 border px-3 py-2 w-full"
      >
        <option value=""> Profession</option>
        <option value="Cricketer">Cricketer</option>
        <option value="Footballer">Footballer</option>
        <option value="Golfer">Golfer</option>
      </select>
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={inputs.age}
        onChange={handleChange}
        className="text-red-500 border px-3 py-2 w-full"
      />

      <select
        name="gender"
        value={inputs.gender}
        onChange={handleChange}
        className="text-red-500 border px-3 py-2 w-full"
      >
        <option value=""> Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default Allinput;
