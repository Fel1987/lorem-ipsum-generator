import { useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  return (
    <section className="section-center">
      <h4>Tired of boring lorem ipsum?</h4>
      <form className="lorem-form">
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          min={1}
          step={1}
          max={8}
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => {
            setCount(+e.target.value);
          }}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
    </section>
  );
};
export default App;
