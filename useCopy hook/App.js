import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import useCopy from "./src/utils/useCopy";

const App = () => {
  const [someText, setSomeText] = useState("");
  const copy = useCopy();

  return (
    <div>
      <div>
        <textarea
          value={someText}
          onChange={(e) => {
            setSomeText(e.target.value);
          }}
        ></textarea>
      </div>
      <button onClick={() => copy(someText)}>Copy</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
