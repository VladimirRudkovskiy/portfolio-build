'use client'

import { motion } from 'framer-motion'
import React from 'react'
import ecommerce from './ecommerce.png'
import Image from 'next/image'


export default function EcommerceProject() {
	return (
		<div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
						<motion.div 
							initial={{ y: -300, opacity: 0 }}
							transition={{ duration: 1.2 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<Image 
								src={ecommerce}
								alt=''
								className='w-full h-auto max-w-xs md:max-w-md lg:max-w-lg'
							/>
						</motion.div>

						<div className='space-y-10 px-0 md:px-10 max-w-6xl'>
							<h4 className='text-4xl font-semibold text-center'>
								<span className='underline decoration-[#F7AB0A]/50'>Case Study: 3 of 4:</span> {" "}
								Ecommerce Website
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
								className='h-10 w-10'
								src='https://upload.wikimedia.org/wikipedia/commons/9/95/Sanity-square-logo.png?20230215151537' alt="" />

							</div>

							<p className='text-lg text-center md:text-left'>
							Welcome to Shopper, your one-stop online shop for all your shopping needs! We offer a vast selection of high-quality products across various categories, including electronics, fashion, home goods, beauty, and more. With a user-friendly interface, secure payment options, and fast shipping, shopping with us is both convenient and hassle-free. Our customer-first approach means you&apos;ll find great deals, top-notch customer service, and reliable support every step of the way. Whether you&apos;re looking for the latest trends or everyday essentials, Shopper makes it easy to find exactly what you&apos;re looking for—delivered straight to your door. Start browsing today and enjoy a seamless shopping experience!
							</p>

							<div onClick={() => window.location.href = 'https://github.com/VladimirRudkovskiy/Ecommerce-Website'}>
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

