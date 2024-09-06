import React from "react";
import waterBodies from "./waterbodies";

function App() {
  return (
    <div>
      <h1>World Water Bodies</h1>
      {waterBodies.map((sources) => {
        return (
          <div key={sources.id}>
            <p>{sources.name}</p>
            <p>{sources.location}</p>
            <p>{sources.size}</p>
            <p>{sources.freshOrSalty}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default App;
