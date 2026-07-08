import React from 'react'
import Section1 from './components/Section 1/Section1'

const App = () => {
  const users =[
    {
      img: "https://unsplash.com/photos/woman-looking-sideways-while-holding-black-laptop-computer-_ihwcvahzRk",
      color: "royalblue",
      intro: "Prime customers, that have access to bank credit and are satisfied with the current product",
      tag:"Satisfied"
    },
    {
      img: "https://unsplash.com/photos/woman-looking-sideways-while-holding-black-laptop-computer-_ihwcvahzRk",
      color: "royalblue",
      intro: "Prime customers, that have access to bank credit and are not satisfied with the current product",
      tag:"Underserved"
    },
    {
      img: "https://unsplash.com/photos/woman-looking-sideways-while-holding-black-laptop-computer-_ihwcvahzRk",
      color: "royalblue",
      intro: "Customers from near-prime and sub-prime segments with no access to bank credit",
      tag:"Underbanked"
    },
    {
      img: "https://unsplash.com/photos/woman-looking-sideways-while-holding-black-laptop-computer-_ihwcvahzRk",
      color: "royalblue",
      intro: "Sub-prime customers that dont have access to bank credit and are not satisfied with the current product",
      tag:"Unsatisfied"
    },
  ]

  return (
    <div>
      <Section1  users={users}/>
    </div>
  )
}

export default App
