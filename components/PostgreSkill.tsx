'use client'

import React from 'react'
import { motion } from 'framer-motion'

type Props = {
	directionLeft?: boolean;
}

function PostgreSkill({ directionLeft }: Props) {
	return (
		<div className='group relative flex cursor-pointer'>
			<motion.img 
			initial={{
				x:directionLeft ? 200: -200,
				opacity: 0,
			}}

			transition={{ duration: 0.5 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			src='https://cdn.iconscout.com/icon/free/png-256/free-postgresql-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945091.png'
			className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
			/>
			

			<div className='absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
				<div className='flex items-center justify-center h-full'>
					<p className='text-3xl font-bold text-black opacity-100'>60%</p>
				</div>
			</div>
		</div>
	)
}

export default PostgreSkill
