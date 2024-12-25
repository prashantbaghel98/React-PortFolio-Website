import React from 'react'

const Casestudy = (props) => {
    return (
        <div className=' sm:flex flex-5 w-[100%] border-2 mb-5 rounded-[20px] hover:border-[#27E98B] hover:text-white'>
            <div className='p-5 sm:w-[50%] my-auto  ps-5' >
                <img src={props.logo} alt="" className='' />
                <h2 className='mt-2 '>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <div className='p-5 my-auto'>
                <img src={props.image} alt="" className='h-[50%]' />

            </div>
        </div>
    )
}

export default Casestudy
