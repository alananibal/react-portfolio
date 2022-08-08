/** @format */

import React from 'react'
import Modal from 'react-modal'
import { CgClose } from 'react-icons/cg'

function ProjectModal({ projectData, open, setOpen }) {
  Modal.setAppElement('#root')

  if (projectData !== undefined) {
    return (
      <>
        <Modal
          className='modalContainer'
          isOpen={open}
          onRequestClose={() => setOpen(false)}>
          <div className='modal-container'>
            <h3 className='modal-header'>{projectData.name}</h3>
            <img
              className='modal-image img-fluid'
              src={projectData.image}
              alt='League Stats'
            />
            <p className='font-weight-bold w-75 description'>
              {projectData.description}
            </p>
            <p className='font-weight-bold'>
              Technologies Used:
              <span className='font-weight-normal'> {projectData.tech}</span>
            </p>
            <p className='font-weight-bolder'>
              {projectData.note !== null && 'Note:'}
              <span className='font-weight-normal'> {projectData.note}</span>
            </p>
            <div className='button-container'>
              <a
                href={projectData.link}
                rel='noopener noreferrer'
                target='_blank'>
                <button
                  className='footer-button'
                  style={{
                    fontFamily: 'Jura, sans-serif',
                  }}>
                  View Site
                </button>
              </a>
              <a
                href={projectData.github}
                rel='noopener noreferrer'
                target='_blank'>
                <button
                  className='footer-button'
                  style={{
                    fontFamily: 'Jura, sans-serif',
                  }}>
                  GitHub
                </button>
              </a>
            </div>
            <div className='modal-footer'>
              <button
                className='modal-footer-button'
                style={{
                  fontFamily: 'Jura, sans-serif',
                }}
                onClick={() => setOpen(false)}>
                Close
              </button>
            </div>
            <button className='close-button' onClick={() => setOpen(false)}>
              <CgClose />
            </button>
          </div>
        </Modal>
      </>
    )
  } else {
    return ''
  }
}

export default ProjectModal