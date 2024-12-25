import { useState } from 'react'
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
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Progressbar from './component/Progressbar'
import Casestudy from './component/Casestudy'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import AboutSVG from './component/AboutSVG'
import DesignThinking from './component/DesignThinking'





// const Navigate=useNavigate()

// const goToExp1=()=>{
//     Navigate("/Experience-1");
// };

// const goToExp2=()=>{
//     Navigate("/Experience-2");
// };

// const goToExp3=()=>{
//     Navigate("/Experience-3");
// };

// const goToExp5=()=>{
//     Navigate("/Experience-4");
// };

// const goToExp6=()=>{
//     Navigate("/Experience-5");
// };

// const goToCase1=()=>{
//     Navigate("/case-1");
// };

// const goToCase2=()=>{
//     Navigate("/case-1");
// };







const Home = () => {


    useGSAP(() => {
        gsap.from("#about-h1", {
            scrollTrigger: '#about-h1',
            x: 100,
            duration: 2
        })

        gsap.from(".about-2", {
            scrollTrigger: '.about-p',
            opacity: -.2,
            y: 100,
            duration: 2,

        })

        gsap.from(".about-3", {
            scrollTrigger: '.about-3',
            x: 100,
            duration: 2
        })

        gsap.from(".about-4", {
            scrollTrigger: '.about-4',
            x: -100,
            duration: 2
        })

        gsap.from("#Experience", {
            scrollTrigger: '#Experience',
            y: 100,
            opacity: 0,
            duration: 1
        })

        gsap.from("#Education", {
            scrollTrigger: '#Education',
            y: 100,
            opacity: 0,
            duration: 1
        })


        gsap.from("#Competencies", {
            scrollTrigger: '#Competencies',
            x: 200,
            opacity: 0,
            duration: 2
        })


        gsap.from("#Progress-bar", {
            scrollTrigger: '#Progress-bar',
            y: 200,
            opacity: -.5,
            duration: 2
        })

        gsap.from("#Case", {
            scrollTrigger: '#Case',
            x: 1000,
            opacity: -.5,
            duration: 2
        })






    })




    return (
        <div>

            {/* Main Container */}

            <div className=" sm:main flex flex-col b p-2 sm:flex-row gap-[5%] ">

                {/* sidebar Container */}
                <div className=" invisible fixed left-[90%] top-[20%] sidebar border-2 p-3 rounded-[20px] h-4/4  sm:visible ">
                    <ul className='flex flex-col gap-4'>
                        <li><a href='#about'>
                            <svg className='hover:fill-[#61CE70] fill-white' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5 7.5H16.5V10.5H13.5V7.5ZM13.5 13.5H16.5V22.5H13.5V13.5ZM15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 27C8.385 27 3 21.615 3 15C3 8.385 8.385 3 15 3C21.615 3 27 8.385 27 15C27 21.615 21.615 27 15 27Z" />
                            </svg>
                        </a></li>

                        <li><a href='#Competencies'>
                            <svg className='hover:fill-[#61CE70] fill-white' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_0_16009)">
                                    <path d="M21.1125 22.7625L22.7625 21.225C22.9375 21.05 23.025 20.8562 23.025 20.6437C23.025 20.4312 22.9375 20.2375 22.7625 20.0625L17.0625 14.3625C17.1875 14.0125 17.2875 13.675 17.3625 13.35C17.4375 13.025 17.475 12.6875 17.475 12.3375C17.475 10.8875 16.9625 9.65 15.9375 8.625C14.9125 7.6 13.675 7.0875 12.225 7.0875C11.8 7.0875 11.375 7.15 10.95 7.275C10.525 7.4 10.1125 7.575 9.7125 7.8L13.0125 11.0625L10.9875 12.975L7.7625 9.7875C7.5375 10.1875 7.36875 10.6 7.25625 11.025C7.14375 11.45 7.0875 11.8875 7.0875 12.3375C7.0875 13.7625 7.5875 14.9688 8.5875 15.9562C9.5875 16.9438 10.8 17.4375 12.225 17.4375C12.575 17.4375 12.9187 17.4062 13.2562 17.3438C13.5937 17.2812 13.9375 17.1875 14.2875 17.0625L19.95 22.7625C20.1 22.9125 20.2938 22.9875 20.5312 22.9875C20.7687 22.9875 20.9625 22.9125 21.1125 22.7625ZM15 30C12.95 30 11.0125 29.6062 9.1875 28.8187C7.3625 28.0312 5.76875 26.9562 4.40625 25.5938C3.04375 24.2313 1.96875 22.6375 1.18125 20.8125C0.39375 18.9875 0 17.05 0 15C0 12.925 0.39375 10.975 1.18125 9.15C1.96875 7.325 3.04375 5.7375 4.40625 4.3875C5.76875 3.0375 7.3625 1.96875 9.1875 1.18125C11.0125 0.39375 12.95 0 15 0C17.075 0 19.025 0.39375 20.85 1.18125C22.675 1.96875 24.2625 3.0375 25.6125 4.3875C26.9625 5.7375 28.0312 7.325 28.8187 9.15C29.6062 10.975 30 12.925 30 15C30 17.05 29.6062 18.9875 28.8187 20.8125C28.0312 22.6375 26.9625 24.2313 25.6125 25.5938C24.2625 26.9562 22.675 28.0312 20.85 28.8187C19.025 29.6062 17.075 30 15 30ZM15 27.75C18.55 27.75 21.5625 26.5063 24.0375 24.0188C26.5125 21.5313 27.75 18.525 27.75 15C27.75 11.45 26.5125 8.4375 24.0375 5.9625C21.5625 3.4875 18.55 2.25 15 2.25C11.475 2.25 8.46875 3.4875 5.98125 5.9625C3.49375 8.4375 2.25 11.45 2.25 15C2.25 18.525 3.49375 21.5313 5.98125 24.0188C8.46875 26.5063 11.475 27.75 15 27.75Z" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_16009">
                                        <rect width="30" height="30" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </a></li>
                        <li><a href='#Experience'>
                            <svg className='hover:fill-[#61CE70] fill-white' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.3664 10.296H19.3663C17.0881 10.2968 15.2348 8.44617 15.2348 6.17193C15.2348 3.89854 17.0881 2.04783 19.3664 2.04783C21.6456 2.04783 23.4988 3.89857 23.4988 6.17193C23.4988 8.44529 21.6456 10.296 19.3664 10.296ZM28.6 16.3041H27.8772C27.5953 13.4175 25.4648 11.0689 22.6829 10.4572C23.9665 9.46605 24.7988 7.91659 24.7988 6.17273C24.7988 3.18232 22.3616 0.75 19.3664 0.75C16.3711 0.75 13.9348 3.18237 13.9348 6.17273C13.9348 7.91724 14.7664 9.46616 16.0499 10.4572C13.268 11.0689 11.1375 13.4175 10.8556 16.3041H10.05V12.4947C10.05 12.1358 9.75847 11.8454 9.4 11.8454H7.3836V10.4981C7.3836 10.1392 7.09207 9.8488 6.7336 9.8488H4.7164V9.20034C4.7164 8.84144 4.42487 8.55103 4.0664 8.55103H1.4C1.04153 8.55103 0.75 8.84144 0.75 9.20034V16.9535V21.08C0.75 21.4389 1.04153 21.7293 1.4 21.7293H3.4164V28.6007C3.4164 28.9596 3.70793 29.25 4.0664 29.25H25.9336C26.2921 29.25 26.5836 28.9596 26.5836 28.6007V21.7293H28.6C28.9585 21.7293 29.25 21.4389 29.25 21.08V16.9535C29.25 16.5946 28.9585 16.3041 28.6 16.3041ZM17.4848 11.5955H21.248C23.9877 11.5955 26.2551 13.6557 26.5769 16.3041H12.1558C12.4768 13.6551 14.7442 11.5955 17.4848 11.5955ZM4.7164 16.3041V12.5946H6.0836V16.3041H4.7164ZM2.05 16.3041V11.2473H3.4164V16.3041H2.05ZM7.3836 14.5991H8.75V16.3041H7.3836V14.5991ZM8.75 13.144V13.3005H7.3836V13.144H8.75ZM6.0836 11.2967H4.7164V11.1474H6.0836V11.2967ZM3.4164 9.84966V9.94863H2.05V9.84966H3.4164ZM25.2836 27.9514H4.7164V21.7293H25.2836V27.9514ZM27.95 20.4307H25.9336H4.0664H2.05V17.6028H4.0664H6.7336H9.4H11.4664H27.2664H27.95V20.4307Z" stroke="white" stroke-width="0.5" />
                            </svg>

                        </a></li>
                        <li ><a href='#Case'>
                            <svg className='hover:fill-[#61CE70] fill-white' width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.3243 5.03922H21.6065L21.2736 2.75348C21.1279 1.75387 20.2564 1 19.2462 1H12.7538C11.7436 1 10.8721 1.75387 10.7264 2.75359L10.3936 5.03922H3.6758C2.20035 5.03922 1 6.23957 1 7.71496V24.3627C1 25.8382 2.20035 27.0385 3.6758 27.0385H28.3243C29.7997 27.0385 31 25.8382 31 24.3627V7.71496C31 6.23957 29.7997 5.03922 28.3243 5.03922ZM12.4728 3.00789C12.4829 2.94048 12.5168 2.87891 12.5684 2.83431C12.6199 2.78972 12.6857 2.76503 12.7539 2.76473H19.2463C19.3144 2.76505 19.3802 2.78973 19.4318 2.83433C19.4834 2.87892 19.5173 2.94048 19.5274 3.00789L19.8232 5.03922H12.1769L12.4728 3.00789ZM29.2353 24.3628C29.2353 24.8651 28.8266 25.2739 28.3243 25.2739H3.6758C3.17342 25.2739 2.76467 24.8652 2.76467 24.3627V15.9519C3.54115 16.5585 4.5168 16.9214 5.57629 16.9214H12.4704V17.7841C12.4704 17.944 12.5139 18.101 12.5961 18.2381C12.6784 18.3752 12.7964 18.4874 12.9375 18.5627L15.5847 19.9744C15.7125 20.0426 15.8552 20.0783 16 20.0783C16.1448 20.0783 16.2875 20.0426 16.4153 19.9744L19.0625 18.5627C19.2036 18.4874 19.3216 18.3752 19.4038 18.2381C19.4861 18.101 19.5296 17.944 19.5296 17.7841V16.9214H26.4237C27.4831 16.9214 28.4588 16.5586 29.2353 15.952V24.3628ZM14.2352 17.2547V14.7058H17.7649V17.2547L16 18.196L14.2352 17.2547ZM29.2353 12.3451C29.2353 13.8954 27.974 15.1567 26.4237 15.1567H19.5296V13.8234C19.5296 13.3361 19.1345 12.941 18.6472 12.941H13.3528C12.8655 12.941 12.4704 13.336 12.4704 13.8234V15.1567H5.57629C4.02596 15.1568 2.76467 13.8955 2.76467 12.3452V7.71496C2.76467 7.27539 3.07762 6.90754 3.49234 6.82246C3.55269 6.81009 3.61414 6.80389 3.67574 6.80395H28.3242C28.387 6.80395 28.4483 6.81033 28.5075 6.82246C28.9223 6.9076 29.2352 7.27545 29.2352 7.71496V12.3451H29.2353Z" stroke="white" stroke-width="0.5" />
                            </svg>

                        </a></li>
                    </ul>
                </div>



                {/* Left Container */}
                <div className="m-[0px_auto] left mt-[5%] sm:w-[40%] sm:ms-[5%]" id='Profile-tab'>
                    <div className='sm:fixed'>
                        <Profile />
                    </div>
                </div>

                {/* Right Container */}
                <div className="right gap-[5%] m-2 w-[99%] sm:m-[5%_2%] mt-5">


                    <section className='section-1 sm:w-[80%]' id='about'>
                        <Smalltitle img="./photos/info.png" title="About Us" />
                        <div className='relative'>
                            <h1 className='text-[30px]' id='about-h1'>Who am I ? </h1>

                            <Link className=' about-2 absolute m-[-1vh_35vh] sm:m-[-5vh_40vh] ' to="/design-journey">
                                <svg className='hover:fill-[#61CE70] group' width="37" height="37" viewBox="0 0 37 37"  xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="36" height="36" rx="18" stroke="white" />
                                    <path className='group-hover:fill-black' d="M12.7881 25.5763L19.8489 18.5L12.7881 11.4237L14.9618 9.25L24.2118 18.5L14.9618 27.75L12.7881 25.5763Z" fill="white" />
                                </svg>

                            </Link>
                        </div>
                        <p className='about-2 font-[200] text-[#61CE70]'>Function + Creativity+ Aesthetics"</p>

                        <p className='about-2 w-[100%] mt-5 sm:w-[80%]'>Hey, I’m Manoj from Deharadun, a UX & UI Designer with 11+ years creative experience and a passion for designing collaborative products that customers love to use. I coach designers, build tools that enable teams to work more effectively, and create the tools that help companies scale.</p>


                        <div className="grid grid-flow-col  gap-10 me-[1%] mt-10 w-[80%]">
                            <div className='about-3 h-[100px] w-[100px]'><img src="./photos/edu-logo.png" alt="" /></div>
                            <div className='about-3' >
                                <h2 className=' text-[30px] sm:text-[48px] text-[#61CE70]'>11+</h2><p>years of experience</p>
                            </div>
                            <div className='about-3'>
                                <h2 className='  text-[30px] sm:text-[48px] text-[#61CE70]'>7+ Industry</h2><p>Fintech, Ed tech, Prop tech, Legal Tech, HR tech, Digital PR Agency, Advertising</p>
                            </div>
                        </div>

                    </section>





                    <section className='section-2 m-5 sm:w-[80%]' id='Experience'>
                        <Smalltitle img="./photos/Vector.png" title="Edu-Work Experience" />
                        <h2 className='title'>Experience</h2>

                        <Link to="/experience-1">
                            <Experience year="2022-Present" position="UX Lead" company="Biz2credit (fintech)" />
                        </Link>
                        <Link to='/experience-2'>
                            <Experience year="2021-2022" position="Senior UX Designer" company="Elevate (Legal Tech)" />
                        </Link>
                        <Link to=''>
                            <Experience year="2020-2021" position="UX Designer" company="Inforica SEB Admin (HR Tech)" />
                        </Link>
                        <Link to=''>
                            <Experience year="2019-2020" position="UX Designer" company="Buildsupply (Prop tech)" />
                        </Link>
                        <Link to='/experience-6'>
                            <Experience year="2019-2020" position="UX Designer" company="Hytech Professionals (Ed Tech)" />
                        </Link>
                        <Link to=''>
                            <Experience year="2015 -2017" position="UX Designer" company="SPAG-Strategic Partners Group (Digital PR Agency)" />
                        </Link>
                        <Link to='/experience-4'>
                            <Experience year="2012 -2013" position="Creative Visualiser" company="The Circus Entertainment Pvt. Ltd. (advertising)" />
                        </Link>
                    </section>


                    <section className='section-3 sm:w-[80%] m-5 max-w-fit' id='Education'>

                        <h2 className='title'>Education</h2>
                        <Link to='experience-3'>
                            <Experience year="2009 - 2013" position="Visual Communication" company="National Institute of Fashion Technology" />
                        </Link>
                        <Experience year="2022" position="Creativity and Design Thinking Program" company="Stanford University Certification (Online)" />
                        <Experience year="Pursuing" position="Professional Certificate Programme in Product Management: IIMK's" company="Indian Institute of Management Kozhikode - IIMK Certification (Online)" />
                    </section>


                    <section className='section-3 m-5 sm:w-[80%]' id='Design Thinking'>
                        <h2 className='about-4 mt-10 text-[30px]'>"Design Trinity: Function + Creativity+ Aesthetics"</h2>
                        <p className='about-4 w-[100%] mt-5 mb-16'>Highlights the three core pillars of UX design. Function ensures usability and practicality, Creativity fosters innovation and originality, and Aesthetics focus on visual appeal and emotional engagement. Balancing these elements enables designers to create user-centric experiences that are both functional and visually captivating.</p>
                        <h2 className='title'>Design Thinking</h2>
                        <DesignThinking />
                    </section>


                    <section className="section-4 m-5 sm:w-[80%]" id='Competencies'>
                        <Smalltitle img="./photos/setting.png" title="Tech Proficiency" />
                        <h2 className='title'>Core Competencies</h2>
                        <div className=" sm:w-[100%] grid grid-cols-2 gap-5 rounded-[20px] text-center ">
                            <div className='border-2 border-white rounded-[20px] p-2 hover:text-[white] hover:border-[#27E98B] '>User-Centered Design</div>
                            <div className='border-2 border-white rounded-[20px] p-2 hover:text-[white] hover:border-[#27E98B]'>Wireframing and Prototyping</div>
                            <div className='border-2 border-white rounded-[20px] p-2 hover:text-[white] hover:border-[#27E98B] '>Product Development</div>
                            <div className='border-2 border-white rounded-[20px] p-2 hover:text-[white] hover:border-[#27E98B] '>Data Visualisation</div>
                            <div className='border-2 border-white rounded-[20px] p-2 hover:text-[white] hover:border-[#27E98B] '>Quality Assurance</div>
                            <div className='border-2 border-white rounded-[20px] p-2 hover:text-[white] hover:border-[#27E98B] '>Usability Testing and Analysis</div>
                            <div className='border-2 border-white rounded-[20px] p-2 hover:text-[white] hover:border-[#27E98B] '>Scenario Development</div>
                            <div className='border-2 border-white rounded-[20px] p-2 hover:text-[white] hover:border-[#27E98B] '>Information Architecture Design</div>
                            <div className='border-2 border-white rounded-[20px] p-2 hover:text-[white] hover:border-[#27E98B] '>UX Strategy Development</div>
                            <div className='border-2 border-white rounded-[20px] p-2 hover:text-[white] hover:border-[#27E98B] '>Market Research</div>
                            <div className='border-2 border-white rounded-[20px] p-2 hover:text-[white] hover:border-[#27E98B] '>Innovation Management</div>
                            <div className='border-2 border-white rounded-[20px] p-2 hover:text-[white] hover:border-[#27E98B] '>Design Enhancements</div>
                            <div className='border-2 border-white rounded-[20px] p-2 hover:text-[white] hover:border-[#27E98B] '>Storytelling</div>
                        </div>
                    </section>





                    <section className="section-5 w-[100%] sm:w-[80%]" id="Progress-bar">

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





                    <section className="section-6 m-5 max-w-fit sm:w-[80%]" id='Case'>
                        <Smalltitle img="./photos/bag.png" title="Case Study" />
                        <h2 className='title'>Cap Table Mangement</h2>
                        <Link to='/case-1'>
                            <Casestudy logo={"./photos/Biz.png"} description="Revamping Biz2Credit's loan application system to accommodate multi-product scenarios, simplifying the process for customers and optimizing management for bankers." image="./photos/img-1.png" />
                        </Link>

                        <Link to='/case-2'>

                            <Casestudy title="Cap Table Management UX Case Study" description="Revamping Biz2Credit's loan application system to accommodate multi-product scenarios, simplifying the process for customers and optimizing management for bankers." image="./photos/img-2.png" />
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Home
