const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
