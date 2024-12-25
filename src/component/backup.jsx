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










function App() {



  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="Home" element={<Home/>} />
          <Route path="experience-1" element={<One />} />
          <Route path="experience-2" element={<Two />} />
          <Route path="experience-3" element={<Three />} />
          <Route path="experience-4" element={<Four />} />
          <Route path="experience-5" element={<Five />} />
          <Route path="experience-6" element={<Six />} />
          <Route path="case-1" element={<Casestudy1 />} />
          <Route path="case-2" element={<Casestudy2 />} />
        </Routes>
      </BrowserRouter>










      {/* Main Container */}

      <div className=" sm:main flex flex-col b p-2 sm:flex-row gap-[5%] ">

        {/* sidebar Container */}
        <div className="invisible fixed left-[90%] top-[20%] sidebar border-2 p-3 rounded-[20px] h-4/4 sm:visible ">
          <ul className='flex flex-col gap-4'>
            <li><a href='#about'><img src="/photos/info.png" alt="" className='h-5 w-5' /></a></li>
            <li><a href='#Competencies'><img src="/photos/setting.png" alt="" className='h-5 w-5' /></a></li>
            <li><a href='#Experience'><img src="/photos/Vector.png" alt="" className='h-5 w-5' /></a></li>
            <li><a href='#Case'><img src="/photos/bag.png" alt="" className='h-5 w-5' /></a></li>
          </ul>
        </div>



        {/* Left Container */}
        <div className="m-[0px_auto] left mt-[5%] sm:w-[40%] sm:ms-[5%]">
          <div className='sm:fixed'>
            <Profile className="" />

          </div>
        </div>


        {/* Right Container */}
        <div className="right gap-[5%] m-2 w-[99%] sm:m-[5%_2%] mt-5">
     

        <section className='section-1' id='about'>
        <Smalltitle img="./photos/info.png" title="About Us" />
            <h1 className='text-[48px]'>Who am I ?</h1>
            <p className='font-[200] text-[30px] text-[#61CE70]'>Function + Creativity+ Aesthetics"</p>
            <p className='w-[100%] mt-5 sm:w-[50%]'>Hey, I’m Manoj, a UX & UI Designer with 11+ years creative experience and a passion for designing collaborative products that customers love to use. I coach designers, build tools that enable teams to work more effectively, and create the tools that help companies scale.</p>

            <div className="grid grid-flow-col  gap-10 me-[1%] mt-10 w-[80%]">
              <div className='h-[100px] w-[100px]'><img src="./photos/edu-logo.png" alt="" /></div>
              <div >
                <h2 className='text-[30px] sm:text-[48px] text-[#61CE70]'>11+</h2><p>years of experience</p>
              </div>
              <div>
                <h2 className='text-[30px] sm:text-[48px] text-[#61CE70]'>7+ Industry</h2><p>Fintech, Ed tech, Prop tech, Legal Tech, HR tech, Digital PR Agency, Advertising</p>
              </div>
            </div>


            <h2 className='mt-10 text-[30px]'>"Design Trinity: Function + Creativity+ Aesthetics"</h2>
            <p className='w-[100%] mt-5 sm:w-[50%]'>Highlights the three core pillars of UX design. Function ensures usability and practicality, Creativity fosters innovation and originality, and Aesthetics focus on visual appeal and emotional engagement. Balancing these elements enables designers to create user-centric experiences that are both functional and visually captivating.</p>
          </section>

         



          <section className='section-2' id='Experience'>
            <Smalltitle img="./photos/Vector.png" title="Edu-Work Experience" />
            <h2 className='title'>Experience</h2>


            <a href='http://localhost:5173/experience-1'>
              <Experience year="2022-Present" position="UX Lead" company="Elevate (Legal Tech)" />
            </a>
            <a href='http://localhost:5173/experience-2'>
              <Experience year="2021-2022" position="Senior UX Designer" company="Biz2credit (fintech)" />
            </a>
            <a href=''>
              <Experience year="2020-2021" position="UX Designer" company="Inforica SEB Admin (HR Tech)" />
            </a>
            <a href=''>
              <Experience year="2019-2020" position="UX Designer" company="Buildsupply (Prop tech)" />
            </a>
            <a href='http://localhost:5173/experience-6'>
              <Experience year="2019-2020" position="UX Designer" company="Hytech Professionals (Ed Tech)" />
            </a>
            <a href=''>
              <Experience year="2015 -2017" position="UX Designer" company="SPAG-Strategic Partners Group (Digital PR Agency)" />
            </a>
            <a href='http://localhost:5173/experience-4'>
              <Experience year="2012 -2013" position="Creative Visualiser" company="The Circus Entertainment Pvt. Ltd. (advertising)" />
            </a>
          </section>


          <section className='section-3'>

            <h2 className='title'>Education</h2>
            <a href='http://localhost:5173/experience-3'>
              <Experience year="2009 - 2013" position="Visual Communication" company="National Institute of Fashion Technology" />
            </a>
            <Experience year="2022" position="Creativity and Design Thinking Program" company="Stanford University Certification (Online)" />
            <Experience year="Pursuing" position="Professional Certificate Programme in Product Management: IIMK's" company="Indian Institute of Management Kozhikode - IIMK Certification (Online)" />
          </section>




          <section className="section-4" id='Competencies'>
            <Smalltitle img="./photos/setting.png" title="Tech Proficiency" />
            <h2 className='title'>Core Competencies</h2>
            <div className=" sm:w-[70%] grid grid-cols-2 gap-5 rounded-[20px] text-center">
              <div className='border-2 border-white rounded-[20px] p-2 hover:bg-[#27E98B] hover:border-[#27E98B] hover:text-black '>User-Centered Design</div>
              <div className='border-2 border-white rounded-[20px] p-2 hover:bg-[#27E98B] hover:border-[#27E98B] hover:text-black'>Wireframing and Prototyping</div>
              <div className='border-2 border-white rounded-[20px] p-2 hover:bg-[#27E98B] hover:border-[#27E98B] hover:text-black '>Product Development</div>
              <div className='border-2 border-white rounded-[20px] p-2 hover:bg-[#27E98B] hover:border-[#27E98B] hover:text-black '>Data Visualisation</div>
              <div className='border-2 border-white rounded-[20px] p-2 hover:bg-[#27E98B] hover:border-[#27E98B] hover:text-black '>Quality Assurance</div>
              <div className='border-2 border-white rounded-[20px] p-2 hover:bg-[#27E98B] hover:border-[#27E98B] hover:text-black '>Usability Testing and Analysis</div>
              <div className='border-2 border-white rounded-[20px] p-2 hover:bg-[#27E98B] hover:border-[#27E98B] hover:text-black '>Scenario Development</div>
              <div className='border-2 border-white rounded-[20px] p-2 hover:bg-[#27E98B] hover:border-[#27E98B] hover:text-black '>Information Architecture Design</div>
              <div className='border-2 border-white rounded-[20px] p-2 hover:bg-[#27E98B] hover:border-[#27E98B] hover:text-black '>UX Strategy Development</div>
              <div className='border-2 border-white rounded-[20px] p-2 hover:bg-[#27E98B] hover:border-[#27E98B] hover:text-black '>Market Research</div>
              <div className='border-2 border-white rounded-[20px] p-2 hover:bg-[#27E98B] hover:border-[#27E98B] hover:text-black '>Innovation Management</div>
              <div className='border-2 border-white rounded-[20px] p-2 hover:bg-[#27E98B] hover:border-[#27E98B] hover:text-black '>Design Enhancements</div>
              <div className='border-2 border-white rounded-[20px] p-2 hover:bg-[#27E98B] hover:border-[#27E98B] hover:text-black '>Storytelling</div>
            </div>
          </section>





          <section className="section-5 w-[100%] sm:w-[80%]">

            <div className="progress-main-container flex flex-wrap gap-5 justify-around  p-5 sm:justify-normal sm:p-2">
              <Progressbar
                percent={92}
                logoSrc="./photos/Component 1.png"
                heading="Figma"
              />
              <Progressbar
                percent={90}
                logoSrc="./photos/Component 2.png"
                heading="Photoshop"
              />
              <Progressbar
                percent={84}
                logoSrc="./photos/Component 3.png"
                heading="Illustrator"
              />
              <Progressbar
                percent={70}
                logoSrc="./photos/Component 4.png"
                heading="Framer"
              />

              <Progressbar
                percent={70}
                logoSrc="./photos/Component 5.png"
                heading="Jlra"
              />

              <Progressbar
                percent={70}
                logoSrc="./photos/Component 6.png"
                heading="Confluence"
              />

              <Progressbar
                percent={70}
                logoSrc="./photos/Component 7.png"
                heading="JPD"
              />

              <Progressbar
                percent={70}
                logoSrc="./photos/Component 8.png"
                heading="Monday.com"
              />

              <Progressbar
                percent={70}
                logoSrc="./photos/Component 9.png"
                heading="Miro"
              />

            </div>
          </section>





          <section className="section-6" id='Case'>
            <Smalltitle img="./photos/bag.png" title="Case Study" />
            <h2 className='title'>Cap Table Mangement</h2>
<a href='http://localhost:5173/case-1'>

            <Casestudy logo={"./photos/Biz.png"} description="Revamping Biz2Credit's loan application system to accommodate multi-product scenarios, simplifying the process for customers and optimizing management for bankers." image="./photos/img-1.png" />
</a>

<a href='http://localhost:5173/case-2'>

            <Casestudy title="Cap Table Management UX Case Study" description="Revamping Biz2Credit's loan application system to accommodate multi-product scenarios, simplifying the process for customers and optimizing management for bankers." image="./photos/img-2.png" />
</a>

           
          </section>
        </div>
      </div>
    </>
  )
}

export default App
