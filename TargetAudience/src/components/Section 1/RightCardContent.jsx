import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-xl font-semibold rounded-full h-15 w-15 flex justify-center items-center'>{props.id}</h2>
        <div>
            <p className='text-white  text-lg font-semibold mb-10 text-shadow-2xs leading-relaxed'> {props.intro}</p>
            <div className='flex justify-between '>
                <button style={{backgroundColor: props.color}} className='rounded-full px-8 py-2 cursor-pointer font-medium text-white' >{props.tag}</button>
                <button style={{backgroundColor: props.color}} className='text-white rounded-full px-8 py-2 cursor-pointer'><i className="ri-arrow-right-line"></i></button>
                
            </div>
        </div>
    </div>
  )
}

export default RightCardContent
