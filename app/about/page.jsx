
import AboutOne from '@/components/AboutOne'
import AboutThree from '@/components/AboutThree'
import AboutTwo from '@/components/AboutTwo'
import HeaderTwo from '@/components/HeaderTwo'
import { aboutOne, aboutTwo } from '@/data'
import React from 'react'

function About() {
  return (
    <>
    <AboutOne data={aboutOne} order={true}/>
    <AboutTwo data={aboutTwo} order={false}/>
    <AboutThree />
    </>
  )
}

export default About