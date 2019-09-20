import React, { Component } from 'react';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Home'
		};
	}

	changeTitle(newtitle) {
		this.setState({ title: newtitle });
	}

	render() {
		return (
			<React.Fragment>
				<h1>{this.state.title}</h1>
				<p>esto es mas texto</p>
				<a href="!#" onClick={() => this.changeTitle('inicio')}>
					cambiar
				</a>
			</React.Fragment>
		);
	}
}

export default Home;
