# 🧠 React: Store Player Info in a Separate File Using Object & Array

## ✅ Step-by-step Plan

1. Use object destructuring (with default values) in the child component (`Card.jsx`).

2. For a more dynamic, use the `players` array with `.map()` to render `<Card />` components. Pass player data using `{...player}` and include a unique `key`. While using map, I must provide extra key props otherwise React will complain an error.,

## 📁 Step 1: Destructure Props in Card.jsx (with Default Value)

```jsx
import React from "react";
import "./Card.css";

const Card = ( { name, profession, age, gender = "Male" }) => {
  return (
    <article id="card" className="card">
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Profession:</strong> {profession}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>cd
    </article>
  );
};

export default Card;
```

## 📁 Step 2: Pass player data using `{...player}` and include a unique `key`. While using map, I must provide extra key props.

```jsx
{players.map((player, index) => {
          console.log(player);
          return <Card key={index} {...player} />;


```

## otherwise React will complain an error.,

```jsx
{players.map((player, index) => {
          console.log(player);
          return <Card key={index} {...player} />;


```

## 📦 Output:

![eact will complain an error](public/image.png)

## 📦 Output (UI):

![Player Card Preview](public/Players-Card.png)
