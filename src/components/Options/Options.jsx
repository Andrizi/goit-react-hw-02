import css from "./Options.module.css";

export default function Options({ onFeedback, onReset, hasFeedback }) {
  return (
    <div>
      <button onClick={() => onFeedback("good")}>Good</button>
      <button onClick={() => onFeedback("neutral")}>Neutral</button>
      <button onClick={() => onFeedback("bad")}>Bad</button>
      {hasFeedback && <button onClick={onReset}>Reset</button>}
    </div>
  );
}
