import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className=' h-full w-2/3 flex flex-nowrap overflow-x-auto rounded-4xl p-6 gap-10 '>
        {props.users.map((elem,index)=>
        {
            return <RightCard key={index} color={elem.color} id={idx+1} img={elem.img} tag={elem.tag} intro={elem.intro}/>
        })

        }
    </div>
  )
}

export default RightContent
