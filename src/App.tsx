import './App.css'
import Navbar from './Components/Navbar'
import { useState } from 'react';
function App() {
  const [open, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className='text-text relative container max-w-6xl mx-auto px-4 sm:px-6 md:px-8'>
        <Navbar open={open} setIsOpen={setIsOpen}/>
      </div>
    </>
  )
}

export default App
