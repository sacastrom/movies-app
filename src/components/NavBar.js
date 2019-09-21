import React from 'react';

const NavItem = ({ element }) => {
	return (
		<li>
			<a href={element.href}>{element.label}</a>
		</li>
	);
};

const NavBar = (props) => {
	return (
		<nav>
			<ul>{props.data.map((e, i) => <NavItem key={i} element={e} />)}</ul>
		</nav>
	);
};

export default NavBar;
