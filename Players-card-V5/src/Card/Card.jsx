import { Heart } from "lucide-react";

const Card = ({
  id,
  name,
  profession,
  age,
  gender,
  isFavorite,
  onClickHandler,
}) => {
  return (
    <>
      <article className="card" id="card">
        <div>
          <p>
            <strong>Name:</strong>
            {name}
          </p>
          <p>
            <strong>Profession:</strong>
            {profession}
          </p>
          <p>
            <strong>Age:</strong>
            {age}
          </p>
          <p>
            <strong>Gender:</strong>
            {gender}
          </p>
        </div>
        <div
          className="flex flex-row-reverse m-4 p-4 cursor-pointer"
          onClick={() => onClickHandler(id)}
        >
          <Heart
            className={`text-red-600 hover:fill-red-600 ${
              isFavorite ? "fill-red-600" : ""
            }`}
          />
        </div>
      </article>
    </>
  );
};

export default Card;
