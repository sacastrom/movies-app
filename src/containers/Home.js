import React, { Component } from 'react'

import Header from '../components/Header/Header'
import Modal from '../components/Modal/Modal'
import ModalMovie from '../components/ModalMovie'
import Movies from '../components/Movies/Movies'
import NavBar from '../components/NavBar/NavBar'
import SearchBar from '../components/SearchBar/SearchBar'

class Home extends Component {
	state = {
		isModalOpen: false,
		apiKey: 'e3087953b023a4a056fc42d81ebd595d',
		currentMovieId: '',
		searchInput: '',
		searchResults: [],
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
		this.setState({ currentMovieId: str, isModalOpen: true })
	}

	getMovies = (cat) => {
		fetch(`https://api.themoviedb.org/3/movie/${cat}?api_key=${this.state.apiKey}`)
			.then((res) => res.json())
			.then((res) => {
				this.setState({ movies: res.results })
			})
	}

	handleSearchInput = (e) => {
		let query = e.target.value
		this.setState({ searchInput: query })
		if (this.state.searchInput.length > 3) {
			fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=${this.state.apiKey}&query=${this.state.searchInput}`
			)
				.then((res) => res.json())
				.then((res) => this.setState({ searchResults: res.results }))
		}
	}

	componentDidMount() {
		this.getMovies('top_rated')
	}

	render() {
		let currentMovie =
			this.state.searchResults.find((e) => e.id === this.state.currentMovieId) ||
			this.state.movies.find((e) => e.id === this.state.currentMovieId)
		return (
			<React.Fragment>
				<Header>
					<NavBar data={this.state.nav} />
				</Header>
				<div className={'container'}>
					<SearchBar
						value={this.state.searchInput}
						placeholder={'Buscar peli'}
						onInputChange={this.handleSearchInput}
						results={this.state.searchResults}
						expandMovie={this.setMovie}
					/>
					<Movies movies={this.state.movies} title={'Top Rated'} amount={5} expandMovie={this.setMovie} />
					<Movies movies={this.state.movies} title={'Top Rated'} amount={5} expandMovie={this.setMovie} />
					<Movies movies={this.state.movies} title={'Top Rated'} amount={5} expandMovie={this.setMovie} />
					<Movies movies={this.state.movies} title={'Top Rated'} amount={5} expandMovie={this.setMovie} />
				</div>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					{currentMovie && <ModalMovie {...currentMovie} />}
				</Modal>
			</React.Fragment>
		)
	}
}

export default Home
