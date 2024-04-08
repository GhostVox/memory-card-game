import ImageCard from "./imageCard";
import { useState, useEffect } from "react";
import "../styles/imageCard.css";

export default function ImageContainer({ images, success, updateSuccess }) {
  const [clickedImages, setClickedImages] = useState([]);

  useEffect(() => {
    if (clickedImages.length === 0) {
      updateSuccess(false);
    } else if (clickedImages.length !== 0) {
      updateSuccess(true);
    }
  }, [clickedImages, updateSuccess]);

  useEffect(() => {
    if (success === images.length) {
      alert("You won!");
    }
  }, [success, images.length]);

  const handleClick = (e) => {
    const newImageId = e.currentTarget.getAttribute("data-id");
    if (clickedImages.includes(newImageId)) {
      console.log("Duplicate click detected");
      setClickedImages([]);
    } else {
      setClickedImages((prevImages) => [...prevImages, newImageId]);
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
