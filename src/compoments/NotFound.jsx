import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>NotFound 404</h1>
      <Link className='btn btn-dark' to='/'>Volver a home</Link>
    </div>
  )
}

export default NotFound