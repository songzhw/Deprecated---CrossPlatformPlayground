import React from "react";

const App: React.FC = () => {
  function fetchId() {

  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchId}>fetch id</button>
      </header>
    </div>
  );
};

export default App;
