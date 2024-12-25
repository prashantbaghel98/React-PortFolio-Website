import React from 'react'
import LinkedinSVG from './LinkedinSVG'
import BehanceSVG from './BehanceSVG'




const Profile = () => {
  return (
    <div className='flex flex-col justify-center items-center border-2 p-5  rounded-[20px] hover:border-[#61CE70] '>
      <h2 className=''>Manoj Kumar</h2>
      <p className='pb-5 text-center'>Product Designer, UI UX & Researcher</p>
      <img src="./photos/profile.png" alt="" className='h-[150px] w-[150px] mt-2 filter grayscale'/>
      <div className="profile-email mt-5 text-center">
        <p>manoj.uiux@gmail.com</p>
        <p>Based in Delhi NCR</p>
      </div>
      <div className="social-logo flex gap-4 mt-10">
          <a href='https://www.behance.net/manojktd02cd/drafts'> <BehanceSVG/> </a>
          <a href='https://www.linkedin.com/in/manoj-kumar-22386278/'> <LinkedinSVG/></a>
      </div>
      <button className='bg-[#61CE70] px-5 py-2 m-5 rounded-[20px] text-black hover:bg-black hover:text-white border-2 border-[#61CE70]'><a href='https://drive.google.com/file/d/1sX1n2Or-0IsR3GlqfQolvDNrnaONB35B/view?pli=1'>Download Resume</a></button>
    </div>
  )
}

export default Profile
