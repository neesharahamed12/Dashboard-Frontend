import { useState } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from '../src/pages/Dashboard'
import About from '../src/pages/About'
import Blog from '../src/pages/Blog'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Dashboard />}> */}
          <Route index element={<Dashboard />} />
          <Route path="about-us" element={<About />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="contact" element={ 'contact'} />
          <Route path="*" element={'page not found...'} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
