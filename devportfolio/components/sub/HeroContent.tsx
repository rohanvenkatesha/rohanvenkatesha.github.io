"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight} from '@/utils/motion'
// import { ShieldCheckIcon } from '@heroicons/react/24/solid'
import { ArrowDownCircleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';

const HeroContent = () => {
  return (
    <motion.div 
    initial="hidden"
    animate="visible"
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            {/* <motion.div
            variants={slideInFromTop}
            className='Welcome-box py-[9px] px-[7px] border border-[#7042f88b] opacity-[1]'>
                <ShieldCheckIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                <h1 className='Welcome-text text-[13px]'>Welcome to my Portfolio </h1>
            </motion.div> */}
            <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>
                <span>
                Hi, I am <br/>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Rohan Venkatesha </span>
                <br/>
                Senior Software Engineer.
                </span>
            </motion.div>
            <motion.p
            variants={slideInFromLeft(0.8)}
            className='text-lg text-gray-400 my-5 max-w-[600px]'>
               I have 4+ years of experience in backend & API development, infrastructure systems engineering, and cloud & on-prem deployments. 
               Passionate about building scalable software solutions and delivering results using Python and modern technologies.
            </motion.p>
            {/* <motion.a
            variants={slideInFromLeft(1)}
            // className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'>
            //     Learn More!
            // </motion.a>
            className='Welcome-box py-[9px] px-[7px] border border-[#7042f88b] opacity-[1]'>
                <ShieldCheckIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                <h1 className='button text-center text-white cursor-pointer'> Download Resume </h1></motion.a> */}
            <div className="flex space-x-4">
            <motion.a
                variants={slideInFromLeft(1)}
                className="Welcome-box py-[9px] px-[7px] border border-[#7042f88b] opacity-[1] flex items-center"
            >
                <ArrowDownCircleIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                <h1 className="button text-center text-white cursor-pointer">Download Resume</h1>
            </motion.a>

            {/* <motion.a
                variants={slideInFromLeft(1.5)}
                className="Welcome-box py-[9px] px-[7px] border border-[#7042f88b] opacity-[1] flex items-center">
                <ShieldCheckIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                <h1 className="button text-center text-white cursor-pointer">Download Resume</h1>
            </motion.a> */}
            </div>
        </div>

        <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center'>
            <Image
            src='/home.jpg'
            alt='profile picture'
            height={350}
            width={350}
            className='home__img'
            />
        </motion.div>
    </motion.div>
  );
};

export default HeroContent