import React, { useRef } from 'react'

const UseRefBasics = () => {
    const title = useRef(null)
    console.log(title)
    const handleClick = () => {
        title.current.style.color = 'red'
        title.current.style.transform = 'translateX(80%)'
        title.current.style.transition = 'all 0.9s'
    }
  return (
    <>
        <h1 ref={title}>UseRef Basics</h1>
        <button onClick={handleClick} className='btn btn-success'>Click me</button>
    </>
  )
}

export default UseRefBasics