// LoaderComponent.jsx
import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoaderComponent = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60vh'
    }}>
      <Spinner animation="border" role="status" variant="primary" style={{ width: '4rem', height: '4rem' }}>
        <span className="visually-hidden">Cargando...</span>
      </Spinner>
    </div>
  )
}

export default LoaderComponent
