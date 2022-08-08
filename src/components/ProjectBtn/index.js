/** @format */

import React, { useState, useEffect } from 'react'
import './style.css'
import 'aos/dist/aos.css'
import { Row, Col } from 'react-bootstrap'
import { projectData } from '../utils/constants'
import Aos from 'aos'
import ProjectModal from '../ProjectModal'

export default function ProjectBtn() {
  const [selected, setSelected] = useState(undefined)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <>
      <div data-aos='fade' className='project-header mb-4'>
        <span className='projects'>Projects</span>
      </div>
      <Row>
        {projectData.map((project, i) => (
          <Col
            key={i}
            xs={12}
            sm={12}
            md={6}
            lg={4}
            xl={3}
            className='justify-content-center'>
            <div key={i} className='image-container'>
              <button
                onClick={() => {
                  setSelected(i)
                  setOpen(true)
                }}
                className='image-button'>
                <img
                  data-aos='fade-up'
                  className='project-image mb-2'
                  src={project.image}
                  alt={project.name}
                />
              </button>
            </div>
          </Col>
        ))}
        <ProjectModal
          className='modalContainer'
          open={open}
          setOpen={setOpen}
          projectData={projectData[selected]}
        />
      </Row>
    </>
  )
}