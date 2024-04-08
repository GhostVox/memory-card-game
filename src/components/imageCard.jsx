import "../styles/imageCard.css";

export default function ImageCard({ image, onClick, dataId }) {
  return (
    <div className="image-card" onClick={onClick} data-id={dataId}>
      <img src={image.src.landscape} alt={image.alt} />
      <p>{image.alt}</p>
      <span>
        By:
        {image.photographer}
      </span>
    </div>
  );
}
