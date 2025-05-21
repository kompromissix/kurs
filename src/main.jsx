import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Main/Home/Home'
import Home2 from './Main/Home2/Home2'
import About from './Main/About/About'
import Services from './Main/Services/Services'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Home2" element={<Home2 />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
