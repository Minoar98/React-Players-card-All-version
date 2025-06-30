import React from "react";
import { Heart } from "lucide-react";
import CardWrapper from "./CardWrapper";
import HeartIcon from "./HeartIcon";

const Card = ({
  id,
  name,
  profession,
  age,
  gender,
  isFavorite,
  onClickHandler,
}) => {
  // Short Circuit condition/operation
  // &&, ||
  // (condition) && <JSX>, if condition true, then show the jsx
  // (condition) || <JSX>, if condition false, then show the jsx

  return (
    isFavorite && (
      <CardWrapper id="card" className="card">
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
        {/* Heart Icon */}
        {/* {hearticon} */}
        <HeartIcon

          id={id}
          onClickHandler={onClickHandler}
          isFavorite={isFavorite}
        />
      </CardWrapper>
    )
  );
};

export default Card;

{
  /* 
1. <Component props />
2. 
<Component props>
  children
</Component> 
*/
}

// 1. short circuit
// 2. passing props & children through a component
// 3. receive props using 'rest' operator & use props using 'spread' operator in CardWrapper.jsx
// 4. passing jsx as a props
// 5. passing component as a props
// 6. props drilling
