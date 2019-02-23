import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  //const element = <h1>Hello, CodeSandbox</h1>;

  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  const user = {
    firstName: "Harper",
    lastName: "Perez"
  };

  const element = <h1>Hello, {formatName(user)}!</h1>;
  return (
    <div className="App">
      {element}
      <h2>Currently using React {React.version}</h2>
    </div>
  );
};
function Tick() {
  const element2 = (
    <div className="Tick">
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element2, document.getElementById("root2"));
}
setInterval(Tick, 1000);
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
