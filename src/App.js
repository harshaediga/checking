
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './Pages/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Article from './Pages/Article';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <div id="Pagebody">
        <Routes>
        < Route path="/" element={<Home/>}/>
        < Route path="/about" element={<About/>}/>
        <Route path="/article" element={<Article/>}/> 
        </Routes> 
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
