import React from 'react';
import './App.css';
import {BunnyCard} from "./features/bunny-card/BunnyCard";

function App() {
  let bunnies = []
  for (let i = 0; i <= 9; i++) {
    bunnies.push(<BunnyCard bunnyId={i}/>)
  }
  return (
      <div>
        {bunnies}
      </div>
  );
}

export default App;
