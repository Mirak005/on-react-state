import React from 'react'

const Counter = (props) => {
    console.log(props)
    
    return (
        <div>
       <button 
       className="my-btn"
        onClick={() => props.decrement(2)}
        >
        -
      </button>
      <span> {props.c} </span>
      <button
        className="my-btn"
        onClick={() => {
          props.increment(2);
        }}
      >
        +
      </button>
        </div>
    )
}

export default Counter
