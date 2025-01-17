'use client'

import { motion } from 'framer-motion'
import { article } from 'framer-motion/client'
import React from 'react'

type Props = {}

export default function FreshExperience({}: Props) {
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
			className='w-50 h-32 rounded-full object-cover object-center'
			src="https://cdn.prod.website-files.com/63733e5318c742e62b36b033/6373578191208f5ad7f19201_logo.svg" />

			<div className='px-0 md:px-10'>
				<h4 className='text-4xl font-light'>Student/Jun-Middle dev</h4>
				<p className='font-bold text-2xl mt-1'>FreshCode</p>
				<div className='flex space-x-3 my-2'>
					<img 
					className='h-10 w-10 rounded-full'
					src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="" />

					<img 
					className='h-10 w-10 rounded-full'
					src="https://www.svgrepo.com/show/331782/visual-studio.svg" alt="" />

					<img 
					className='h-10 w-12 rounded-full'
					src="https://cms-assets.tutsplus.com/uploads/users/1125/posts/29791/preview_image/RN.jpg" alt="" />

					<img 
					className='h-10 w-10 rounded-full'
					src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256" alt="" />

				</div>
				<p className='uppercase pu-5 text-gray-300'>Jul 18, 2019 - Apr 12, 2022</p>

				<ul className='list-disc space-y-4 ml-5 text-lg'>
					<li>Software Development & Coding.</li>
					<li>Collaborating with Senior Developers.</li>
					<li>Problem-Solving & Debugging.</li>
					<li>Learning & Development.</li>
					<li>Documentation & Reporting.</li>
				</ul>
			</div>
		</article>
	)
}


