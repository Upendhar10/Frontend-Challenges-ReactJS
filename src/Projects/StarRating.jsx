import StarRatingUI from "../Components/02-StartRating/StarRatingUI";

function StarRating() {
  return (
    <div className="grid place-content-center h-screen w-screen gap-5">
      <h1 className="text-3xl font-bold uppercase text-center">Star Rating</h1>
      <StarRatingUI />
    </div>
  );
}

export default StarRating;
