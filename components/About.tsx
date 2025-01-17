'use client'

import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
	return (
		<motion.div 
		initial={{ opacity: 0 }}

		whileInView={{ opacity: 1 }}

		transition={{ duration: 1.5 }}
		className='flex flex-col relative h-screen text-center md:text-left md:flex-row msx-w-7xl px-10 justify-evenly mx-auto items-center'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About
		</h3>

		<motion.img
		initial={{
			x: -200,
			opacity: 0,
		}}
		transition={{
			duration: 1
		}}
		whileInView={{
			x:0,
			opacity: 1
		}}
		viewport={{ once: true }}


		src="https://pbs.twimg.com/media/GhfJrlnWwAAlBxt?format=jpg&name=large"
		
		className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
		/>

		<div className='space-y-10 px-0 md:px-10'>
			<h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background</h4>
			<p className='text-base'>Hi, I'm Vladimir 🌹, a passionate and experienced web developer with over 7 years of hands-on experience in building dynamic, user-friendly websites and applications. I specialize in both front-end and back-end development, ensuring seamless functionality and exceptional user experiences.

			Throughout my career, I’ve worked on a variety of projects, from small businesses to large-scale applications, always striving to deliver high-quality results. I’m proficient in modern web technologies like HTML, CSS, JavaScript, and frameworks such as React, and Next.js. I’m also comfortable with database management, API integration, and optimizing websites for performance and scalability.

			What drives me is creating innovative, efficient solutions that meet both the user and business needs. I thrive in collaborative environments and am always eager to learn new tools and techniques to stay ahead in the fast-evolving world of web development.

			Feel free to explore my work, and let’s connect if you think we could collaborate on something exciting!</p>
		</div>

		</motion.div>
	)
}


