import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Main/Home/Home'
import Home2 from './Main/Home2/Home2'
import About from './Main/About/About'
import Services from './Main/Services/Services'
import Service_Single from './Main/Service_Single/Service_Single'
import Team from './Main/Team/Team'
import Team_Single_one from './Main/Team/Team_Single/Team_Single_one'
import Team_Single_two from './Main/Team/Team_Single/Team_Single_two'
import Team_Single_three from './Main/Team/Team_Single/Team_Single_three'
import Team_Single_four from './Main/Team/Team_Single/Team_Single_four'
import Team_Single_five from './Main/Team/Team_Single/Team_Single_five'
import Team_Single_six from './Main/Team/Team_Single/Team_Single_six'
import Case_Study from './Main/Case_Study/Case_Study'
import Blog from './Main/Blog/Blog'
import Blog_Single from './Main/Blog/Blog_Single/Blog_Single'
import Test from './Main/Test/Test'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Home2" element={<Home2 />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Service_Single" element={<Service_Single />} />
        <Route path="/Team" element={<Team/>} />
        <Route path="/Team_Single_one" element={<Team_Single_one/>} />
        <Route path="/Team_Single_two" element={<Team_Single_two/>} />
        <Route path="/Team_Single_three" element={<Team_Single_three/>} />
        <Route path="/Team_Single_four" element={<Team_Single_four/>} />
        <Route path="/Team_Single_five" element={<Team_Single_five/>} />
        <Route path="/Team_Single_six" element={<Team_Single_six/>} />
        <Route path="/Case_Study" element={<Case_Study/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/Blog_Single" element={<Blog_Single/>} />
        <Route path="/Test" element={<Test/>} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
