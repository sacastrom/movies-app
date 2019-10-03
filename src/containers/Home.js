import React, { Component } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Modal from '../components/Modal/Modal'

class Home extends Component {
	state = {
		title: 'Home',
		isModalOpen: false,
		nav: [
			{ label: 'Home', href: '/home' },
			{ label: 'Top Rated', href: '/top' },
			{ label: 'Popular', href: '/popular' }
		]
	}

	changeTitle = (newtitle) => {
		this.setState({ title: newtitle })
	}

	toggleModal = () => {
		this.setState({ isModalOpen: !this.state.isModalOpen })
	}

	render() {
		return (
			<React.Fragment>
				<Header title={this.state.title} change={this.changeTitle} />
				<NavBar data={this.state.nav} />
				<a onClick={() => this.toggleModal()}>btn</a>

				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<p>Ola, ke ase</p>
				</Modal>
			</React.Fragment>
		)
	}
}

export default Home
