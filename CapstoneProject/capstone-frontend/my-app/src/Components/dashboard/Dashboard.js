import React from 'react'
import Calc from '../calc/Calc'
// import Card from '../card/Card'

// import HomeLoanApplicationForm from '../loanform1/Loanform1'
import Offcampus from '../offcampus/Offcampus'
import Question from '../question/Question'
import Carousel from '../carousel/Carousel'

export default function Dashboard() {
  return (
    <div>
      
      <Offcampus/>

      {/* <Card/> */}
      <Question/>
      <Calc/>
      <Carousel/>
       {/* <HomeLoanApplicationForm/> */}
        
    </div>
  )
}
