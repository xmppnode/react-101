import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Welcome(props) {
  return (
    <h1>
      Hello, {props.firstName} {props.lastName}!
    </h1>
  );
}
const App = props => {
  return (
    <div className="App">
      <Welcome firstName="XMPP" lastName="Node" />
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
