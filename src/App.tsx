
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'





function Home() {
  return <>
  <h1>Hello! I'm iPig👋</h1>
  <h3>I'm a 15 years old programmer from Taiwan 🇹🇼</h3>
  <h2>My skills</h2>
  <img src="https://skillicons.dev/icons?i=nodejs,py,react,lua,discord,flask" />
  <h2>My social medias</h2>
  <a href="https://github.com/iPigTW"><img src='/github.png' width="50" height="50"/></a>
  <a href="https://youtube.com/@ipigtaiwan"><img src='/youtube.png' width="50" height="50"/></a>
  <a href="https://discord.gg/4uezbEqfSA"><img src='/discord.png' width="55" height="45"/></a>
  <p className='footer'>Made with <a href="https://react.dev">React</a> by iPig</p>
  </>
}


function App() {
 
  
  
  
  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path="/home" element={<Home />} />
    <Route index element={<Home />} /> 
    </Routes>
    </BrowserRouter>
    

    </>
  )
}

export default App
