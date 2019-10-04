import React, { Component } from 'react'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import Modal from '../components/Modal/Modal'

class Home extends Component {
	state = {
		isModalOpen: false,
		apiKey: 'e3087953b023a4a056fc42d81ebd595d',
		movies: [],
		nav: [
			{ label: 'Home', href: '/' },
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

	getMovies = (cat) => {
		fetch(`https://api.themoviedb.org/3/movie/${cat}?api_key=${this.state.apiKey}`)
			.then((res) => res.json())
			.then((res) => this.setState({ movies: res.results }))
	}

	componentDidMount() {
		this.getMovies('top_rated')
	}

	render() {
		console.log(this.state.movies)
		return (
			<React.Fragment>
				<Header>
					<NavBar data={this.state.nav} />
				</Header>
				<div className={'container'}>
					<a onClick={() => this.setMovie('Shawshank redemption')}>btn</a>
					{this.state.movies.map((e, i) => <p key={i}>{e.title}</p>)}
				</div>

				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<p>'oli'</p>
				</Modal>
			</React.Fragment>
		)
	}
}

export default Home
