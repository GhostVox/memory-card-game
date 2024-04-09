export default function About({ setStart }) {
  const handleClick = () => {
    setStart(true);
  };
  return (
    <div>
      <h2>About</h2>
      <p>
        {`This is a memory card game. Click on an image to earn points, but don't
            click on any image more than once! Click on all images to win.`}
      </p>
      <button onClick={handleClick}>Start Game</button>
    </div>
  );
}
