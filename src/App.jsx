import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/Profile'
import Smalltitle from './component/smallTitle'
import Experience from './component/Experience'
import Casestudy1 from './component/Experiencelist/Casestudy1'
import Casestudy2 from './component/Experiencelist/Casestudy2'
import One from './component/Experiencelist/One'
import Two from './component/Experiencelist/Two'
import Three from './component/Experiencelist/Three'
import Four from './component/Experiencelist/Four'
import Five from './component/Experiencelist/Five'
import Six from './component/Experiencelist/Six'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Progressbar from './component/Progressbar'
import Casestudy from './component/Casestudy'
import Home from './Home'
import DesignJourney from './component/Page/DesignJourney'










function App() {



  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="experience-1" element={<One />} />
          <Route path="experience-2" element={<Two />} />
          <Route path="experience-3" element={<Three />} />
          <Route path="experience-4" element={<Four />} />
          <Route path="experience-5" element={<Five />} />
          <Route path="experience-6" element={<Six />} />
          <Route path="case-1" element={<Casestudy1 />} />
          <Route path="case-2" element={<Casestudy2 />} />
          <Route path="design-journey" element={<DesignJourney/>} />
        </Routes>
      </BrowserRouter>
   
    </>
  )
}

export default App
