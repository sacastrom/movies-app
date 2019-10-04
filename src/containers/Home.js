import React, { Component } from 'react'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import Modal from '../components/Modal/Modal'
import index from '@babel/template'

class Home extends Component {
	state = {
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

	setMovie = (str) => {
		this.setState({ currentMovie: str })
		this.toggleModal()
	}

	render() {
		return (
			<React.Fragment>
				<Header>
					<NavBar data={this.state.nav} />
				</Header>
				<div className={'container'}>
					<input type={'text'} />
					<a onClick={() => this.setMovie('Shawshank redemption')}>btn</a>
				</div>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<p>'oli'</p>
				</Modal>
			</React.Fragment>
		)
	}
}

export default Home
