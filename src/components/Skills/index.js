import React from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
} from 'react-icons/fa'
import { DiMongodb, DiGitBranch } from 'react-icons/di'
import { IoLogoNodejs } from 'react-icons/io'
import { GrMysql, GrGraphQl } from 'react-icons/gr'
import { SiApollographql } from 'react-icons/si'

import './style.css'

export default function Skills() {
  return (
    <>
      <h1
        data-aos='fade'
        style={{ marginTop: '50px', color: 'cornflowerblue' }}>
        Skills
      </h1>

      <div className='skills' data-aos='fade'>
        <FaHtml5 className='html' />
        <FaCss3Alt className='css' />
        <DiGitBranch className='git' />
        <FaBootstrap className='bs' />
        <FaJsSquare className='js' />
        <FaReact className='react' />
        <GrGraphQl className='graphql' />
        <SiApollographql className='apollo' />
        <DiMongodb className='mongo' />
        <GrMysql className='sql' />
        <IoLogoNodejs className='node' />
      </div>
    </>
  )
}