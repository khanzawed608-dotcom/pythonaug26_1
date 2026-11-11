import React from 'react'

import { funcContext, nameContext } from './App';

function Home() {
    let name = useContext(nameContext);
    let setCount = useContext(funcContext);
  return (
    <div>
        Home
        <br />
        Home page name : {name}
        
        <br />
        <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
        <button onClick={() => setCount((prev) => prev - 1)}>decrement</button>


    </div>
  );
}

export default Home;
