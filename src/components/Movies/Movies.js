import React from 'react'

const Movie = (props) => {
	let { title, release_date, overview, video } = props
	return (
		<li>
			<p>
				<strong>{title}</strong>
			</p>
			{/*
			<em>{release_date}</em>
			<p>{overview}</p>
			*/}
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
		let increment = this.state.currentPage + 1
		this.setState({
			currentPage: increment,
			totalMovies: this.props.amount * increment
		})
	}

	render() {
		let { title, movies, amount } = this.props
		let aux = amount ? movies.slice(0, this.state.totalMovies) : movies
		console.log(movies.length, this.state.totalMovies, this.state.currentPage)
		return (
			<div>
				<h3>{title}</h3>
				<ul>{aux.map((movie, i) => <Movie key={i} {...movie} />)}</ul>
				<button onClick={(e) => this.showMore(e)}>show more</button>
			</div>
		)
	}
}

export default Movies
