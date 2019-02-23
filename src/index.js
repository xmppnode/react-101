import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  //const element = <h1>Hello, CodeSandbox</h1>;
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };

  const element = (
    <h1>
      Hello, {formatName(user)}!
  </h1>
  );
  return (
    <div className="App">
      {element}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
