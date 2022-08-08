import React from 'react'

var Spinner = require('react-spinkit')

function Loader() {
  return (
    <div
      style={{
        height: '100vh',
        backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto 0',
      }}
    >
      <div>
        <Spinner name='three-bounce' color='cornflowerblue' />
      </div>
    </div>
  )
}

export default Loader