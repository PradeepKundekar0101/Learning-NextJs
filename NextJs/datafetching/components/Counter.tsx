'use client' //Tell this is client Component, by telling you are allowed to use Hooks which is not allowed in SSR
import React from 'react'
const Counter = () => {
    const [counter,setCounter] = React.useState(0);
  return (
    <div className='my-6'>
        <h1>Counter = {counter}</h1>
        <button className='bg-blue-700 text-white py-1 px-5 rounded-md' onClick={()=>{setCounter((prev)=>prev+1)}}>Increment</button>
    </div>
  )
}

export default Counter