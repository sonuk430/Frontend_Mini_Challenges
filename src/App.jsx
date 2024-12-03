import Counter from "./Easy/counterApp/Counter";
import GuessNumber from "./Easy/GuessNumber/GuessNumber";
import ImageGallery from "./Easy/ImageGallery/ImageGallery";
import StarRating from "./Easy/StarRating/StarRating";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <ImageGallery /> */}
      {/* <GuessNumber /> */}
      <StarRating starSize={5} />
      <StarRating starSize={7} />
      <StarRating />
    </>
  );
}

export default App;
