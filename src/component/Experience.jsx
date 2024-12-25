import React from 'react'

const Experience = (props) => {
  return (
    <div onClick={props.click}className="flex gap-3 flex-row border-white border-2 p-5 rounded-[20px] mb-10 sm:w-[100%] hover:text-white hover:border-[#27E98B]">
    <div className="basis-1/3 font-[200]">{props.year}</div>
    <div className="basis-1/3 font-[200]">{props.position}</div>
    <div className="basis-2/3 font-[200]">{props.company}</div>
    <div className="basis-0/4 me-1 "><img src="/photos/arrow.png" alt="" className='h-5 ' /></div>
  </div>
  )
}

export default Experience
