import React from 'react'
import './Header.scss'

const Header = (props) => {
	return (
		<header>
			<p>Logo</p>
			{props.children}
		</header>
	)
}

export default Header
