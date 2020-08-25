import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something important">Adopt Me!</h1>
      <Pet name="Alien" animal="cat" breed="Maine Coon" />
      <Pet name="Signal" animal="cat" breed="Sphynx" />
      <Pet name="Flexik" animal="cat" breed="Persian" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
