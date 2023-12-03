import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] =  useState("olive");

  return (

      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='flex fixed fixed-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button
            onClick={() => setColor("red")}
             className='outline-none px-4 py-2 text-white rounded-xl' style={{backgroundColor: "red"}}>Red</button>
            <button 
            onClick={() => setColor("green")}
            className='outline-none px-4 py-2 text-white rounded-xl' style={{backgroundColor: "green"}}>Green</button>
            <button 
            onClick={() => setColor("blue")}
            className='outline-none px-4 py-2 text-white rounded-xl' style={{backgroundColor: "blue"}}>Blue</button>
            <button 
            onClick={() => setColor("purple")}
            className='outline-none px-4 py-2 text-white rounded-xl' style={{backgroundColor: "purple"}}>Purple</button>
            <button 
            onClick={() => setColor("yellow")}
            className='outline-none px-4 py-2 text-black rounded-xl' style={{backgroundColor: "yellow"}}>Yellow</button>
            <button 
            onClick={() => setColor("black")}
            className='outline-none px-4 py-2 text-white rounded-xl' style={{backgroundColor: "Black"}}>Black</button>
            <button 
            onClick={() => setColor("silver")}
            className='outline-none px-4 py-2 text-black rounded-xl' style={{backgroundColor: "silver"}}>Silver</button>
            <button 
            onClick={() => setColor("orange")}
            className='outline-none px-4 py-2 text-white rounded-xl' style={{backgroundColor: "orange"}}>Orange</button>
          </div>
        </div>
      </div>

  )
}

export default App
