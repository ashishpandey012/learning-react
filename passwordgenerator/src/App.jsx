import { useState, useCallback, useEffect } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(5);
  const [numberAlwd, setNumberAlwd] = useState(false);
  const [charAlwd, setCharAlwd] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGen = useCallback( () => {
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAlwd) str += "0123456789"
    if(charAlwd) str += "@#$%^!&*"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass);

  }, [length, numberAlwd, charAlwd, setPassword])
  
  useEffect(() => {
    passwordGen()
  }, [length, numberAlwd, charAlwd, passwordGen])
  

  return (
    <>
        <div className=' my-5 bg-white mx-auto w-3/5 px-8 py-5 rounded-2xl'>
          <div className='flex gap-0 w-full'>
            <input
            type="text"
            value = {password}
             placeholder='password' 
             readOnly
             className='w-full font-medium outline-none bg-yellow-400 rounded-l-lg px-5 py-2'></input>
            <button 

            className='px-5 py-2 bg-blue-900 text-white rounded-r-lg'
            >Apply</button>
          </div>
          <div className='flex justify-between mt-5'>
            <div className='flex gap-2'>
              <input className='cursor-pointer' 
                type="range"
                min={6} 
                max={100} 
                value={length} 
                onChange={(e) => {setLength(e.target.value)}}>
              </input>
              <label>No. of Characters {length}</label>
            </div>
            <div  className='flex gap-2'>
              <input 
              type="checkbox"
              defaultChecked={numberAlwd}
              id="numberInput"
              onChange={() => {setNumberAlwd ((prev) => !prev)}}></input>
              <label>No. Allowed</label>
            </div>
            <div  className='flex gap-2'>
              <input type="checkbox" 
              className=''
              onChange={() => {setCharAlwd ((prev) => !prev)}}>
              </input> 
              <label>Special Characters</label>
            </div>
            
          </div>
        </div>
    </>
  )
}

export default App
