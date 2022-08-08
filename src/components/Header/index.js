/** @format */

import React from 'react'

function Header() {
  return (
    <>
      <div className='box'>
        <img
          data-aos='fade'
          className='profile-pic'
          width='250px'
          height='250px'
          padding= '50px'
          src={process.env.PUBLIC_URL + '/images/profile-pic.jpg'}
          alt='Alan Anibal'
        />

        <div data-aos='fade' className='border2'></div>
      </div>

      <h1 data-aos='fade' className='name'>
        Alan Anibal De Souza Ramos
      </h1>

      <h2
        data-aos='fade'
        className='title'
        style={{
          textTransform: 'uppercase',
          color: 'cornflowerblue',
          fontWeight: '600',
          fontSize: '1.0rem',
        }}>
        Full Stack Web Developer
      </h2>
      <div className='mainsummary-container'>
        <div className='summary-container'>
          <p
            style={{ color: 'black', fontWeight: 'bold' }}
            className='summary'
            data-aos='fade'>
              Hello! I'm Alan Anibal, web developer passioned about tecnology and criativity.
              I'm a bootcamp graduate from the UC Berkeley Extension
            Full Stack Web Development Program looking for opportunities
            
          </p>
        </div>
        <div className='summary-container'>
          <p
            style={{ color: 'black', fontWeight: 'bold' }}
            className='summary'
            data-aos='fade'>
            When I'm not coding I love to play music with friends, cook, play chess and specialy spend time with my son and wife.
          </p>
        </div>
        <div className='summary-container'>
          <p
            style={{ color: 'black', fontWeight: 'bold' }}
            className='summary'
            data-aos='fade'>
            I'm also Artistic Director at the Napa Valley Youth Symphony and staff conductor at Festival Opera.
          </p>
        </div>
      </div>
    </>
  )
}

export default Header