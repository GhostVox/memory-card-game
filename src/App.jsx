import { useState, useEffect, useCallback } from "react";
import ImageContainer from "./components/imageContainer";
import "./App.css";

const apiKey = import.meta.env.VITE_REACT_APP_PEXELS_API_KEY;

async function gatherImages() {
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=cats&per_page=9`,
    {
      method: "GET",

      headers: {
        Authorization: apiKey,
        // "jklRKNik8zZQiFeCDgVH0qMw97t9mHRbM4oKrWKgzxBZXjrgEnDNFP1d",
      },
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
}

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(0);

  const updateSuccess = useCallback((shouldIncrementOrReset) => {
    setSuccess((prevSuccess) => (shouldIncrementOrReset ? prevSuccess + 1 : 0));
  }, []);

  useEffect(() => {
    gatherImages()
      .then((data) => setImages(data.photos))
      .catch((error) => {
        console.error(error);
        setError("Failed to load images.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Image Gallery</h1>
        <h2>{`successful choices ${success}`}</h2>
      </header>
      <main>
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ImageContainer
            updateSuccess={updateSuccess}
            success={success}
            images={images}
          />
        )}
      </main>
      <footer>
        <div className="signature">
          <a
            href="https://github.com/Brent-the-carpenter/memory-card-game"
            rel="noopener noreferrer"
          >
            <h3>Brent-The-Carpenter</h3>{" "}
            <img
              src="/github-mark/github-mark.svg"
              alt="link to github account"
            />{" "}
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
