import React from "react";
import Greeting from "./Greeting";

function App() {
  const greeting = "Welcome to React";
  return (
    <div>
      <Greeting greeting={greeting} />
    </div>
  );
}

export default App;
