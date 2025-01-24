'use client'

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { Social } from '@/typings'
import { social } from '@/sanity/schemaTypes/social'



export default function Header() {
	return (
		<header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 0.8,
				}}
				className='flex flex-row items-center'>
				{/* Social Icons */}
				<SocialIcon 
					className='custom-class-icon'
					url="https://x.com/therealnorth_1" 
					fgColor='gray'
					bgColor='transparent'
				/>
				

				<SocialIcon 
					className='custom-class-icon'
					url="https://instagram.com/therealnorth_"
					fgColor='gray'
					bgColor='transparent'
				/>

				<SocialIcon 
					className='custom-class-icon'
					url="https://github.com/VladimirRudkovskiy" 
					fgColor='gray'
					bgColor='transparent'
				/>
			</motion.div>

			<div onClick={() => window.location.href = '#contact'}>
				<motion.div 
					initial={{
						x: 500,
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						x: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 0.8,
					}}
					className='flex flex-row items-center text-gray-300 cursor-pointer'>
					<SocialIcon
						className='cursor-pointer custom-class-icon'
						network='email'
						fgColor='gray'
						bgColor='transparent'
					/>

					<p className='uppercase hidden md:inline-flex text-sm text-gray-400 hover:text-white'>Get In Touch</p>
				</motion.div>
			</div>
		</header>
	)
}
