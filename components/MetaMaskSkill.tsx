'use client'

import React from 'react'
import { motion } from 'framer-motion'

type Props = {
	directionLeft?: boolean;
}

function MetaMaskSkill({ directionLeft }: Props) {
	return (
		<div className='group relative flex cursor-pointer'>
			<motion.img 
			initial={{
				x:directionLeft ? -200: 200,
				opacity: 0,
			}}

			transition={{ duration: 0.5 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png'
			className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
			/>
			

			<div className='absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
				<div className='flex items-center justify-center h-full'>
					<p className='text-3xl font-bold text-black opacity-100'>50%</p>
				</div>
			</div>
		</div>
	)
}

export default MetaMaskSkill
