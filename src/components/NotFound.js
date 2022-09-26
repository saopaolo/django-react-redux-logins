import React from 'react'
import './NotFound.css'

function NotFound() {
  return (
    <div className='notfound'>
        <h1 className='notfound__heading'>404 Not Found</h1>
        <p className='notfound__paragraph'>The link you requested does not exist on our website.</p>
    </div>
  )
}

export default NotFound