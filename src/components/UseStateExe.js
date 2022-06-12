import React, { useState } from 'react'

 const UseStateExe = () => {
     const [count,setCount]=useState(0);

  return (
    <div>
        <h2>Current Count:{count}</h2>
        <button onClick={()=>setCount(count+1)}>Click Me</button>
    </div>
  )
}

export default UseStateExe;
