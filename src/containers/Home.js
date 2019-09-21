import React, { Component } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Home',
			nav: [
				{ label: 'Home', href: '/home' },
				{ label: 'Top Rated', href: '/top' },
				{ label: 'Popular', href: '/popular' }
			]
		};
	}

	changeTitle(newtitle) {
		this.setState({ title: newtitle });
	}

	render() {
		console.log(this.state);
		return (
			<React.Fragment>
				<Header title={this.state.title} />
				<NavBar data={this.state.nav} />
				<a href={'!#'} onClick={() => this.changeTitle('TEST')}>
					btn
				</a>
			</React.Fragment>
		);
	}
}

export default Home;
