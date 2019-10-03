import React from 'react'
import './Modal.scss'

const Modal = ({ children, isOpen, toggle }) => {
	let modalClass = isOpen ? 'open' : 'close'
	return (
		<div className={`modal ${modalClass}`}>
			<button onClick={() => toggle()}>x</button>
			{children}
		</div>
	)
}

export default Modal
