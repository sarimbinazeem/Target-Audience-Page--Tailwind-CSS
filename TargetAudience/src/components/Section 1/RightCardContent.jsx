import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.idx}</h2>
        <div>
            <p>{props.intro}</p>
            <div>
                <button style={{backgroundColor: props.color}}>{props.tag}</button>
                <button style={{backgroundColor: props.color}}><i class="ri-arrow-right-line"></i></button>
                
            </div>
        </div>
    </div>
  )
}

export default RightCardContent
