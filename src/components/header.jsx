import "../styles/header.css";

export default function Header({ success, wins, start }) {
  return (
    <header className="header">
      <h1>Memory Game</h1>
      {start && (
        <div className="score">
          <h2 className="choiceCount">{`successful choices ${success}`}</h2>
          <h2>{`Total Wins ${wins}`}</h2>
        </div>
      )}
    </header>
  );
}
