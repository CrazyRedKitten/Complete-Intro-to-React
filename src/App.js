const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
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
