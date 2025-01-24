'use client'

import { motion } from 'framer-motion'
import React from 'react'
import banking from './banking.png'
import Image from 'next/image'


export default function BankingProject() {
	return (
		<div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
						<motion.div 
							initial={{ y: -300, opacity: 0 }}
							transition={{ duration: 1.2 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<Image 
								src={banking}
								alt=''
								className='w-full h-auto max-w-xs md:max-w-md lg:max-w-lg'
							/>
						</motion.div>

						<div className='space-y-10 px-0 md:px-10 max-w-6xl'>
							<h4 className='text-4xl font-semibold text-center'>
								<span className='underline decoration-[#F7AB0A]/50'>Case Study: 2 of 4:</span> {" "}
								Banking Website
							</h4>

							<div className='flex items-center space-x-2 justify-center'>
								<img 
								className='h-8 w-8'
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_979C0CYjHp3QH53N8pLqEI2Ku6g5fLTwA&s' alt="" />

								<img 
								className='h-8 w-8'
								src='https://cdn-icons-png.flaticon.com/512/732/732190.png' alt="" />

								<img 
								className='h-10 w-10'
								src='https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png' alt="" />

								<img 
								className='h-8 w-8'
								src='https://appwrite.io/assets/logomark/logo.png' alt="" />
							</div>

							<p className='text-lg text-center md:text-left'>
							Welcome to Horizon, where your financial well-being is our top priority. We offer a wide range of banking services designed to help you manage, save, and grow your money with ease. From personal and business accounts to investment opportunities and loans, our secure, user-friendly platform ensures you have access to everything you need to make informed financial decisions. Stay on top of your finances with our intuitive mobile app, online banking, and 24/7 customer support. At Horizon, we are committed to providing innovative solutions and exceptional service to help you achieve your financial goals. Join us today and experience the future of banking.
							</p>

							<div onClick={() => window.location.href = 'https://horizon-bank-finished.vercel.app/sign-in'}>
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
																			
																			<p className='uppercase hidden md:inline-flex text-sm text-gray-400 hover:text-white'>Go to Demo</p>
																		</motion.div>
																	</div>
						</div>
					</div>
	)
}

