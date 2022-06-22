import "./styles.css";
import React, {useState} from 'react';
export default function App() {
const [count, setNum]=useState(0);
function Inc()
{
  setNum(count+1);
}
function Dec()
  {
setNum(count>0?count-1:null);
  }

  return (
    <div className="App">
      <h1>{count}</h1>
        <button onClick={Inc}>+</button>
        <button onClick={Dec}>-</button>
    </div>
  );
}
