import { useState } from 'react'
import avatar from './pictures/avatar.jpg'
import appleEating from './videos/apple-eating.webm'
import NavBar from './NavBar.jsx/NavBar'
import Myself from './Myself/Myself'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <video autoPlay muted loop className="video-background" id="videoBackground">
        <source src={appleEating} type="video/webm" />
      </video> */}
        <NavBar />
        <Myself avatar={avatar}/>
        <div style={{ height: '1500px;' }}></div>
    </>
  )
}

export default App
