import React from 'react';
import profilepic from '../assets/profpic.png';
import { TypeAnimation } from 'react-type-animation';
import ShinyEffect from './ShinyEffect';
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from 'react-icons/ai';
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiRubyRough,
  DiRor,
  DiPython,
  DiDjango,
  DiPhp,
  DiLaravel,
  DiIllustrator,
  DiPhotoshop,
  DiReact,
} from 'react-icons/di';
import { motion } from 'framer-motion';
import { FaWhatsappSquare } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='mt-24 max-w-[1200px] mx-auto relative'>
      <div className='grid md:grid-cols-2 place-items-center gap-8'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              'Fullstack dev',
              1000,
              'Dev teacher',
              1000,
              'Backend developer.',
              1000,
              'Team leader.',
              1000,
              'Project manager',
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className='font-bold text-gray-400 text-xl md:text-5xl italic- mb-4'
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className='text-gray-200 md:text-7xl text-5xl tracking-tight mb-4'
          >
            HEY, I AM <br />
            <span className='text-purple-500'>Juliana</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className='text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6'
          >
            I'm a passionate developer with over 3 years of experience
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className='flex flex-row items-center gap-6 my-4 md:mb-0'
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 0px 8px rgba(0,0,0,0.3)',
              }}
              className='z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl'
            >
              <a
                href='https://drive.google.com/uc?export=download&id=10jR9tKJ7f8-coObwLzbbHXjG_iX1hYcz'
                target='_blank'
                rel='noopener noreferrer'
                download
              >
                Download CV
              </a>
            </motion.button>

            <div className='flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20'>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href='https://github.com/julianaalgarin'
                target='_blank'
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href=''
                target='_blank'
              >
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href='https://www.instagram.com/1julsss/'
                target='_blank'
              >
                <AiOutlineInstagram />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href='https://wa.me/3046600921'
                target='_blank'
              >
                <FaWhatsappSquare />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={profilepic}
          className='w-[300px] md:w-[450px]'
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className='flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24'
      >
        <p className='text-gray-200 mr-6'>My tech stack</p>
        <DiRubyRough className='text-red-500 mx-2' />
        <DiRor className='text-red-600 mx-2' />
        <DiHtml5 className='text-orange-600 mx-2' />
        <DiCss3 className='text-blue-500 mx-2' />
        <DiJavascript1 className='text-yellow-400 mx-2' />
        <DiPython className='text-yellow-400 mx-2' />
        <DiDjango className='text-green-600 mx-2' />
        <DiPhp className='text-purple-500 mx-2' />
        <DiLaravel className='text-red-600 mx-2' />
        <DiReact className='text-blue-500 mx-2' />
        <DiIllustrator className='text-yellow-700 mx-2' />
        <DiPhotoshop className='text-blue-600 mx-2' />
      </motion.div>

      <div className='absolute inset-0 hidden md:block'>
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
