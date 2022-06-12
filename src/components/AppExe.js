import React, { useEffect } from 'react'
import { useState } from 'react';

 const App = () => {
     const [data,setData]=useState([]);
     useEffect(()=>{

         fetch('https://jsonplaceholder.typicode.com/users')
                .then(res=>res.json())
                .then(data=>{setData(data);
                });
     },[]);
  return (
    <div>{data.map(user=><h1>{user.name}</h1>)}</div>
  )
}

export default App;