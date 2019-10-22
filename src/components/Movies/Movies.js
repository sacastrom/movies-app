import React from 'react'

const Movie = (props) => {
	let { title, id, onClick } = props
	return (
		<li>
			<a onClick={() => onClick(id)}>
				<strong>{title}</strong>
			</a>
		</li>
	)
}

class Movies extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentPage: 1,
			totalMovies: this.props.amount
		}
	}

	showMore = (e) => {
		e.preventDefault()
		if (this.props.movies.length > this.state.totalMovies) {
			let increment = this.state.currentPage + 1
			this.setState({
				currentPage: increment,
				totalMovies: this.props.amount * increment
			})
		}
	}

	render() {
		let { title, movies, amount, expandMovie } = this.props
		let aux = amount ? movies.slice(0, this.state.totalMovies) : movies
		return (
			<div>
				<h3>{title}</h3>
				<ul>{aux.map((movie, i) => <Movie key={i} {...movie} onClick={expandMovie} />)}</ul>
				<button onClick={(e) => this.showMore(e)}>show more</button>
			</div>
		)
	}
}

export default Movies
