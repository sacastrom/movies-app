import React from 'react'

const Movie = ({ element }) => {
    return(
        <li>
            <h3>{element.title}</h3>
            <em>{element.release_date}</em>
            <p>{element.overview}</p>
        </li>
    )
}

const Movies = (props) => {
    return(
        <React.Fragment>
            <ul>{props.movies.map((e, i) => <Movie key={i} element={e}/> )}</ul>
        </React.Fragment>
    )
}

export default Movies