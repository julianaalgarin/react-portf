import React from 'react'
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <div className='max-w-[1300px], mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4 text-purple-400'>
          <h3 className='text-2xl text-gray-200 font-semibold'>Juliana.</h3>
            <a href="#"><FaGithubSquare className='font-4xl'/></a>
            <a href="#"><FaInstagram className='font-4xl'/></a>
        </div>

        <p className='text-gray-400'>@2025 Juliana M.</p>

      </div>

    </div>

  )
}

export default Footer
