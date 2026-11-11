import React, { createContext, usestate } from 'react';
import Home from './Home'

const namecontext = createContext("");
const funccontext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    count :{count}
    <br />
    <nameContext.provider value={"zawed khan"}>
      <funccontext.provider value={setCount}>
      <Home />
      </funccontext.provider>
      </nameContext.provider>




      
    </div>
  )
}

export default App

