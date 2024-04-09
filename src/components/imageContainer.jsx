import ImageCard from "./imageCard";
import { useState, useEffect } from "react";
import "../styles/imageCard.css";

export default function ImageContainer({
  images,

  updateSuccess,
  setImages,
}) {
  const [clickedImages, setClickedImages] = useState([]);

  useEffect(() => {
    if (clickedImages.length === 0) {
      updateSuccess(false);
    } else if (clickedImages.length !== 0) {
      updateSuccess(true);
    }
  }, [clickedImages, updateSuccess]);

  function kunthShuffle(array) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]; // Swap elements
    }
    return shuffledArray;
  }

  const handleClick = (e) => {
    const newImageId = e.currentTarget.getAttribute("data-id");
    const oldImages = images;
    if (clickedImages.includes(newImageId)) {
      console.log("Duplicate click detected");
      setClickedImages([]);
    } else {
      setClickedImages((prevImages) => [...prevImages, newImageId]);
      const newShuffledImages = kunthShuffle(oldImages);
      setImages(newShuffledImages);
    }
  };

  return (
    <div className="image-container">
      {images.map((image) => (
        <ImageCard
          key={image.id}
          dataId={image.id}
          onClick={handleClick}
          image={image}
        />
      ))}
    </div>
  );
}
