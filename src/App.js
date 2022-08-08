/** @format */

import React, { useState, useEffect } from 'react'
import './App.css'
import Footer from './components/Footer'
import ProjectBtn from './components/ProjectBtn'
import Skills from './components/Skills'
import Aos from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Loader from './components/Loader'
import Header from './components/Header'
import Info from './components/Info'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='container app_container'>
          <div className='main'>
            <Header />
            <Info />
            <Skills />
          </div>
          <ProjectBtn />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App