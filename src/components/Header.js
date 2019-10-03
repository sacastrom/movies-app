import React from 'react'

const Header = (props) => {
	return (
		<header>
			<h1 onClick={() => props.change('Nuevo titulo')}>{props.title}</h1>
		</header>
	)
}

export default Header
