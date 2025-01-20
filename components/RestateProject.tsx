'use client'

import { motion } from 'framer-motion'
import React from 'react'
import restate from './restate.png'
import Image from 'next/image'

type Props = {}

export default function RestateProject({}: Props) {
	return (
		<div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
						<motion.div 
							initial={{ y: -300, opacity: 0 }}
							transition={{ duration: 1.2 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<Image 
								src={restate}
								alt=''
								className='w-full h-auto max-w-xs md:max-w-md lg:max-w-lg'
							/>
						</motion.div>

						<div className='space-y-10 px-0 md:px-10 max-w-6xl'>
							<h4 className='text-4xl font-semibold text-center'>
								<span className='underline decoration-[#F7AB0A]/50'>Case Study: 4 of 4:</span> {" "}
								Real Estate Website
							</h4>

							<div className='flex items-center space-x-2 justify-center'>
								<img 
								className='h-10 w-10'
								src='https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png' alt="" />

								<img 
								className='h-8 w-8'
								src='https://cdn-icons-png.flaticon.com/512/732/732190.png' alt="" />

								<img 
								className='h-10 w-10'
								src='https://cdn-icons-png.freepik.com/256/4943/4943029.png?semt=ais_hybrid' alt="" />

								<img 
								className='h-8 w-8'
								src='https://koderspedia.com/wp-content/uploads/2024/03/expo-go-app-logo-BBBE394CB8-seeklogo.com_.png' alt="" />
							</div>

							<p className='text-lg text-center md:text-left'>
							Welcome to Restate, your trusted partner in finding the perfect property. Whether you're buying, selling, or renting, we offer a wide range of residential and commercial real estate options to suit your needs. Our expert team is committed to providing personalized services, guiding you through every step of the process with professionalism and integrity. With detailed listings, market insights, and a user-friendly platform, finding your dream home or investment property has never been easier. At Restate, we prioritize your goals and work to make your real estate journey smooth and successful. Start exploring today and let us help you turn your property dreams into reality!
							</p>

							<div onClick={() => window.location.href = 'https://github.com/VladimirRudkovskiy/Real-Estate-App'}>
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
																			
																			<p className='uppercase hidden md:inline-flex text-sm text-gray-400 hover:text-white'>Go to Code</p>
																		</motion.div>
																	</div>
						</div>
					</div>
	)
}

