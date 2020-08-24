const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Alien"),
    React.createElement("h2", {}, "Cat"),
    React.createElement("h2", {}, "Maine Coon"),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    //Object with arguments
    { id: "Something important!" },
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet),
      React.createElement(Pet),
      React.createElement(Pet),
    ]
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
