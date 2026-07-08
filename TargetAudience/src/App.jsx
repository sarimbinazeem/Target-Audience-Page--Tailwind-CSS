import React from 'react'
import Section1 from './components/Section 1/Section1'

const App = () => {
  const users =[
    {
      img: "https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "royalblue",
      intro: "Prime customers, that have access to bank credit and are satisfied with the current product",
      tag:"Satisfied"
    },
    {
      img: "https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "royalblue",
      intro: "Prime customers, that have access to bank credit and are not satisfied with the current product",
      tag:"Underserved"
    },
    {
      img: "https://images.unsplash.com/photo-1760351561005-718d0e766dac?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "royalblue",
      intro: "Customers from near-prime and sub-prime segments with no access to bank credit",
      tag:"Underbanked"
    },
    {
      img: "https://images.unsplash.com/photo-1657727534676-cac1bb160d64?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
