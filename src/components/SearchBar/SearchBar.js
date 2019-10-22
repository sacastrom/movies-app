import React from 'react'

const SearchBar = ({ value, placeholder, onInputChange, results, expandMovie }) => (
	<div>
		<input placeholder={placeholder} type={'text'} value={value} onChange={(e) => onInputChange(e)} />
		<ul>
			{results &&
				results.map((e) => (
					<li key={e.id}>
						<a onClick={() => expandMovie(e.id)}>{e.title}</a>
					</li>
				))}
		</ul>
	</div>
)

export default SearchBar
