import React from 'react'

const Smalltitle = (props) => {
  return (
    <div className='flex gap-2 border-b-2  w-fit p-[10px_20px]  text-[12px] mb-5 border-[#27E98B]'>
     <img src={props.img} alt="" className='h-[20px] w-[20px] '/>
      <h4>{props.title}</h4>
    </div>
  )
}

export default Smalltitle




