'use client'

import { motion } from 'framer-motion'
import React from 'react'


export default function FiverExperience() {
	return (
		<article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
			<motion.img
			 initial={{ 
				y: -100,
				opacity: 0,
			 }}
			 whileInView={{ opacity: 1, y: 0 }}
			 transition={{ duration: 1.2 }}
			 viewport={{ once: true }}
			className='w-32 h-32 rounded-full object-cover object-center'
			src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7j72atakY6MHFWxzbnz23bQn9rwrzRfNNg&s" />

			<div className='px-0 md:px-10'>
				<h4 className='text-4xl font-light'>Freelancer</h4>
				<p className='font-bold text-2xl mt-1'>Fiverr</p>
				<div className='flex space-x-3 my-2'>
					<img 
					className='h-10 w-10 rounded-full'
					src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="" />

					<img 
					className='h-10 w-10 rounded-full'
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_979C0CYjHp3QH53N8pLqEI2Ku6g5fLTwA&s" alt="" />

					<img 
					className='h-10 w-10 rounded-full'
					src="https://www.svgrepo.com/show/331782/visual-studio.svg" alt="" />

					<img 
					className='h-10 w-12 rounded-full'
					src="https://cms-assets.tutsplus.com/uploads/users/1125/posts/29791/preview_image/RN.jpg" alt="" />

					<img 
					className='h-10 w-10 rounded-full'
					src="https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp" alt="" />

				</div>
				<p className='uppercase pu-5 text-gray-300'>Nov 11, 2021 - Jan 20, 2024</p>

				<ul className='list-disc space-y-4 ml-5 text-lg'>
					<li>Client Acquisition & Project Management.</li>
					<li>Custom Software Development & Solutions.</li>
					<li>Communication & Collaboration.</li>
					<li>Time Management & Deadlines.</li>
					<li>Marketing & Self-Promotion.</li>
				</ul>
			</div>
		</article>
	)
}


