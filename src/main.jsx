import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Main/Home/Home'
import Home2 from './Main/Home2/Home2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Home2" element={<Home2 />} />
        {/* </>
        <Services/>
        <Pages/>
        <Work/>
        <Pages/>
        <Contact/> */}
      </Routes>
    </HashRouter>
  </StrictMode>,
)
