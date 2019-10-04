import React from 'react'
import './NavBar.scss'

const NavItem = ({ element }) => {
	return (
		<li>
			<a href={element.href}>{element.label}</a>
		</li>
	)
}

const NavBar = (props) => {
	return (
		<nav className={'mainNav'}>
			<ul>{props.data.map((e, i) => <NavItem key={i} element={e} />)}</ul>
		</nav>
	)
}

export default NavBar
