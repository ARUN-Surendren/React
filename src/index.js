import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Counter extends React.Component {
  state = {
    count: 0
  };
  count_fun() {
    {
      this.setState(this.state.count, this.state.count + 1);
    }
  }
  render() {
    return <h1 onClick={Counter.count_fun}> {this.state.count}</h1>;
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Counter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
