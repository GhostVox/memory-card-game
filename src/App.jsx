import { useState, useEffect, useCallback } from "react";
import ImageContainer from "./components/imageContainer";
import Header from "./components/header";
import About from "./components/about";
import Footer from "./components/footer";

import { gatherImages } from "./api/pexelApi";

import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(0);
  const [wins, setWins] = useState(0);
  const [start, setStart] = useState(false);

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

  useEffect(() => {
    if (images.length === 0) return;
    if (success === images.length) {
      alert("You won!");
      setWins((prevWins) => prevWins + 1);
      setSuccess(0);
    }
  }, [success, images.length]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div className="App">
      <Header success={success} wins={wins} start={start} />
      <main>
        {!start ? (
          <About setStart={setStart} />
        ) : (
          <ImageContainer
            updateSuccess={updateSuccess}
            success={success}
            images={images}
            setImages={setImages}
            setWins={setWins}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
