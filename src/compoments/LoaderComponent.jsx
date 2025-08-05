import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoaderComponent = () => {
  return (
    <div>
      <Spinner animation='grow' variant='dark'/>
    </div>
  )
}

export default LoaderComponent