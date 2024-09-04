import { useState } from "react";

/*
    - We need to perform three events.
        1. mousehover
        2. onClick
        3. mouseleave
    - In order to perform three events, we need two state variables
        1. rating
        2. hover

    - onClick={() => setRating(num)}        // sets rating till the selected star, based on the number // if selected = 4, rating = 4 starts
    - onMouseOver={() => setHover(num)}     // sets hover-stars till the selected stars, based on the number
    - onMouseLeave={() => setHover(rating)} // removes the hover effect, if present and  if rating is not availabel sets rating 0 else sets to previously selected stars


    const On = {
        color: "red",
    };

    const Off = {
        color: "black",
    };

*/

function StarRatingUI() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((num) => (
        <button
          key={num}
          onClick={() => setRating(num)}
          onMouseOver={() => setHover(num)}
          onMouseLeave={() => setHover(rating)}
        >
          <span
            className={`text-6xl m-2 ${
              num <= ((rating && hover) || hover) ? "On" : "Off"
            } transition-colors duration-150`}
          >
            &#9733;
          </span>
        </button>
      ))}
    </div>
  );
}

export default StarRatingUI;
