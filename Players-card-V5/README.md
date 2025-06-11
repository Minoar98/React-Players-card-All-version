## Rules of Hooks

1. **Hook names must start with `use`**  
   All React hooks must begin with the word `use`. For example: `useState`, `useEffect`.

2. **Hooks must be declared inside a component**  
   You should only call hooks like `useState` or `useEffect` **inside React functional components** or **custom hooks**.

3. **Components using hooks must start with a capital letter**  
   React treats components starting with lowercase letters as DOM tags. So your function component must start with a capital letter.

4. **Don't use hooks inside conditional statements**  
   Hooks should **not be called inside if/else, loops, or nested functions**. Always call them at the **top level of your component** to ensure consistent behavior across renders.

## Rules of useState

1. `useState` takes **one parameter**, which is the **default value** (initial state).

2. `useState` **returns an array** with **two elements**.

3. The **first element** of the array is the **current state value**,  
   and the **second element** is a **function to update that value**.
