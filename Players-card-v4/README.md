# 🧠 React: Store Player Info in a Separate File Using Object & Array

## ✅ Step-by-step Plan

1. Use object destructuring (with default values) in the child component (`Card.jsx`).

2. For a more dynamic, use the `players` array with `.map()` to render `<Card />` components multiple times. Pass player data using `{...player}` and include a unique `key`. While using map, I must provide extra `key` `props` otherwise React will complain an error.

```jsx
import players from "./data";

function App() {
  return (
    <section className="card-container">
      {players.map((player, index) => {
        return <Card key={index} {...player} />;
      })}
    </section>
  );
}
```

## 📁 Destructure `props` in Card.jsx

As I am passing the data using `{...player}` then receving like the following style

```jsx
const Card = ({ name, profession, age, gender = "Male" }) => {
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
      <p>
        <strong>Gender:</strong> {gender}
      </p>
    </article>
  );
};
```

While using `map`, I must provide an extra `key` `props` (`<Card key={index} {...player} />`). Otherwise React will complain an error.

![React will complain an error](public/image.png)

## ❓ Why use key props?

In React, key props help identify which items in a list have changed, been added, or removed. This helps React optimize rendering by updating only the changed components instead of re-rendering the whole list.

## ❓ Why use key={index}?

We use key={index} when we don’t have a unique id or value to use as a key. The index is just the position of the item in the array, and it’s an easy fallback when no better unique identifier is available.

## ❓ What is the problem with using key={index}?

The problem is that if the order of items changes, React may get confused and reuse the wrong components. This can cause bugs, especially with input fields or animations, because the keys don’t match the right data anymore.

## ❓ What is the solution?

The better solution is to use a unique and stable identifier from the data itself, like an id field. This helps React track each item correctly even if the list changes order.

## ❓ Why are `props` immutable in React?

"`props` are immutable in React because they are used to pass data from a parent component to a child. React follows a one-way data flow, so data should only go from parent to child.

If we change props inside a child, it can create confusion and bugs, because we won’t know where or how the data is changing. That’s why props are read-only — we can use them, but we can’t change them.

"React-এ `props` immutable কারণ এগুলো প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে ডেটা পাঠাতে ব্যবহার করা হয়। React চায় যেন এই ডেটা শুধু প্যারেন্ট থেকে চাইল্ডে যাক, যেন ডেটার flow পরিষ্কার থাকে।

যদি আমরা চাইল্ড কম্পোনেন্ট থেকে `props` পরিবর্তন করি, তাহলে অ্যাপের মধ্যে কোন ডেটা কখন বদলাচ্ছে সেটা ট্র্যাক করা কঠিন হয়ে যাবে। এজন্য `props` read-only, মানে শুধু ব্যবহার করতে পারি, কিন্তু বদলাতে পারি না।

-

## `Fragment`

`Fragment` – div এর মত কিন্তু block করে না
`Fragment` হলো একটা invisible wrapper যা DOM এ কোন নতুন element যোগ করে না, কিন্তু JSX এ একাধিক element একসাথে wrap করতে দেয়।

## `React.Fragment`

## `<></>`

Popular way – use start tag and close tags short syntax (<> </>) উভয়েই একই কাজ করে — multiple elements return করার জন্য একটি invisible wrapper দেয়।

## 📘 Types of CSS (Cascading Style Sheets)

CSS ব্যবহার করে আমরা HTML elements-এর স্টাইল নিয়ন্ত্রণ করি। CSS সাধারণত ৩টি প্রকারের হয়ে থাকে:

---

## 1. 🔹 Inline CSS

CSS সরাসরি HTML element এর `style` attribute-এ লেখা হয়।

### ✅ Use Case:

- ছোটখাটো styling
- এক বা দুইটা element এর জন্য কাস্টম স্টাইল

### 📄 Example:

```html
<h1 style="color: blue; font-size: 24px;">Welcome</h1>
```

### ⚠️ Disadvantages:

- Code cluttered হয়ে যায়
- Reusability কম
- Maintain করা কঠিন

---

## 2. 🔸 Internal CSS

CSS কে `<style>` ট্যাগ এর ভিতরে `<head>` সেকশনে লেখা হয়।

### ✅ Use Case:

- একটি নির্দিষ্ট পেজে CSS প্রয়োগ করতে চাইলে

### 📄 Example:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 {
        color: green;
      }
      p {
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <h1>About Us</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

### ⚠️ Disadvantages:

- অন্য পেজে একই CSS use করা যায় না
- কোড আলাদা না থাকায় management কঠিন

---

## 3. 🟢 External CSS

CSS আলাদা `.css` ফাইলে রাখা হয় এবং HTML এ `<link>` ট্যাগের মাধ্যমে যুক্ত করা হয়।

### ✅ Use Case:

- বড় ও মাল্টিপেজ ওয়েবসাইট
- কোড reusability এবং separation of concerns

### 📄 Example:

**style.css**

```css
h1 {
  color: red;
}
p {
  font-family: Arial, sans-serif;
}
```

## 🎯 React-এ Inline Style কী?

Inline style মানে হলো — style গুলো কম্পোনেন্টের ভিতরে সরাসরি JavaScript অবজেক্ট হিসেবে লিখে এবং সেগুলো style `props` মাধ্যমে apply.

🧠 Key Points (for React Inline Styles):
CSS properties must be written in camelCase

✅ Examples:

background-color → backgroundColor

font-size → fontSize

Values must be in string or number format

✅ Examples:

padding: '10px' (string with units)

fontSize: 16 (just a number for pixels)

```jsx
function Welcome() {
  return (
    <h1 style={{ color: "green", fontSize: "24px" }}>Welcome to React!</h1>
  );
}
```

## ❓In React: What do the first {} and second {} mean in this line?

```jsx
<div style={{ color: "red" }}></div>
```

➡️ Means:

style={ ... } → JSX expression

{ color: 'red' } → JavaScript object passed into the style prop

## Rest opertaor

The rest operator (...) in JavaScript collects multiple values into one array or object.

```jsx
const Card = ({ name, ...restProps }) => {
  const { profession, age, gender } = restProps;
};
```

## Importing Orders

```jsx
// Installed package
import React from "react";
import { useState } from "react";

// Self made package/folder/file
import Card from "./Card/Card";
import players from "./data";

// CSS files
import "./App.css";
```

## 📦 Output (UI):

![Player Card Preview](public/Players-Card.png)

```

```
