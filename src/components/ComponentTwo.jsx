import React from 'react'

const ComponentTwo = ({count, onClickHandler}) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => onClickHandler()}>Increment</button>
    </div>
  )
}

export default ComponentTwo