import React, { useState } from 'react'
import { useReducer } from 'react';
function Reducer() {

    const[count,setCount]=useState(0);
  return (
    <div>
      <p></p>
      <button>Increase</button>
      <button>Decrease</button>
      <button>Rest</button>
    </div>
  )
}

export default Reducer
