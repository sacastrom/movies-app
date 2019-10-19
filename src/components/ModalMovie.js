import React from 'react'

const ModalMovie = ({ title, release_date, overview }) => (
  <>
    <h2>{title}</h2>
    <em>{release_date}</em>
    <p>{overview}</p>
  </>
)

export default ModalMovie