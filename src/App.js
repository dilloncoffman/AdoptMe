import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Daisy",
      animal: "Dog",
      breed: "Corgi/Dachshund"
    }),
    React.createElement(Pet, {
      name: "Todd",
      animal: "Dog",
      breed: "Basset Hound"
    }),
    React.createElement(Pet, {
      name: "Leo",
      animal: "Dog",
      breed: "Bullmastiff"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
