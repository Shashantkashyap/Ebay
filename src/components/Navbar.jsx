import React from 'react'
import Nav1 from './Nav1'
import Nav2 from './Nav2'
import Nav3 from './Nav3'

function Navbar() {
  return (
    <div className='w-full'>
      <div className='w-[90%] mx-auto'><Nav1/></div>
      <div className='w-[100%] h-[0.4px] bg-gray-300 mx-auto'></div>
      <div className='w-[90%] mx-auto'><Nav2/></div>
      <div className='w-[100%] h-[0.3px] bg-gray-300 mx-auto'></div>
      <div className='w-[90%] mx-auto'><Nav3/></div>
    </div>
  )
}

export default Navbar
