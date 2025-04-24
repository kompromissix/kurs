import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Header from './Header/Header/Header'
import Header_All from './Header/Header_All/Header_All'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Header/>
      <Header_All/>
      <Routes>
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
