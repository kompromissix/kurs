import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Header from './Header/Header/Header'
import Header_All from './Header/Header_All/Header_All'
import Home from './Main/Home/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Header/>
      <Header_All/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/Home" element={<Home />} />
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
