import React from 'react'

function Modal({selectedImg}) {
    return (
        <div className="backdrop">
            <img  src={selectedImg} alt="" />
            <h1>Inside modal</h1>
        </div>
    )
}

export default Modal
