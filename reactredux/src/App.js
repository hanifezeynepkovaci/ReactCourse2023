import React from "react";
import Counter from "./components/Counter";
import IncreaseCounter from "./components/IncreaseCounter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";
import { Row } from "reactstrap";
import MultiplyCounter from "./components/MultiplyCounter";

function App() {
  return (
    <div>
      <center>
        <h1>Counter</h1>
      </center>
      <Row>
        <Counter />
        <IncreaseCounter />
        <DecreaseCounter />
        <IncreaseByTwoCounter />
        <MultiplyCounter />
      </Row>
    </div>
  );
}

export default App;
