import React, { useState } from 'react'
import Modal from './Modal'

const SingleColor = ({rgb,hex}) => {
    const [showModal,setShowModal] = useState(false)
    const [value,setValue] = useState('')
    const handleClick = () => {
        setShowModal(true);
        setValue(`#${hex}`)
    }
    navigator.clipboard.writeText(value)
  return (
    <>
            <div onClick={handleClick} className="col-lg-2" style={{height:'100px',background:`rgb(${rgb})`}}>
                #{hex}
                {showModal && <Modal/>}
            </div>
        </>
        

  )
}

export default SingleColor