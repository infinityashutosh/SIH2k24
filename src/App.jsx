import { useState } from 'react'
import './App.css'
import img from './assets/illustraion.jpg'

function App() {
  const [number, setnumber] = useState('') 
  
  return (
    <>
    <div>
    <div>
       <h1 className='text-black p-10 text-7xl font-semibold'>Enter your Number</h1>
       <input className='h-14 rounded-xl text-xl bg-gray-300 text-black' placeholder='+91 | ' type="text" value={number} onChange={(e) => setnumber(e.target.value)} />
       <button className='h-14 rounded-xl ml-5 text-xl' >
        Login
       </button>
    </div>
    <div>
      <img src={img} alt="image" />
    </div>
    </div>
    </>
  )
}

export default App
