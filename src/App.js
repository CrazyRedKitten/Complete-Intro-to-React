import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    //Object with arguments
    { id: "Something important!" },
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Alien",
        animal: "Cat",
        breed: "Maine Coon",
      }),
      React.createElement(Pet, {
        name: "Signal",
        animal: "Cat",
        breed: "Sphynx",
      }),
      React.createElement(Pet, {
        name: "Flexik",
        animal: "Cat",
        breed: "Persian",
      }),
    ]
  );
};

render(React.createElement(App), document.getElementById("root"));
