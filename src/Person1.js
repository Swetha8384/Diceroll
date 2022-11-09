import React from 'react'

const person1 = (props) => {
  return (
    <div>
       <div class="card1" id={props.p1color} >
              <h3>P1</h3>
              <h3>total score:{props.p1total}</h3>
              <text>current score:{props.p1currentscore }</text>
       </div>
        <div class="card2" id={props.p2color}>
            <h3>P2</h3>
            <h3>total score:{props.p2total}</h3>
            <text>current score:{props.p2currentscore }</text>
        </div>
    </div>
  )
}

export default person1
