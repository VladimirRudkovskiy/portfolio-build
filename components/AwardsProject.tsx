import { motion } from 'framer-motion'
import React from 'react'
import awards from './awards.png'
import Image from 'next/image'


export default function AwardsProject() {
	return (
		<div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
						<motion.div 
							initial={{ y: -300, opacity: 0 }}
							transition={{ duration: 1.2 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<Image 
								src={awards}
								alt=''
								className='w-full h-auto max-w-xs md:max-w-md lg:max-w-lg'
							/>
						</motion.div>

						<div className='space-y-10 px-0 md:px-10 max-w-6xl'>
							<h4 className='text-4xl font-semibold text-center'>
								<span className='underline decoration-[#F7AB0A]/50'>Case Study: 1 of 4:</span> {" "}
								Gaming Website
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
							</div>

							<p className='text-lg text-center md:text-left'>
							Welcome to RADIANT, your ultimate destination for all things RPG! We provide in-depth coverage, guides, and reviews for the latest and greatest in role-playing games. Whether you're a seasoned adventurer or a newcomer to the genre, our site offers detailed insights into gameplay mechanics, character builds, story analysis, and much more. Explore our extensive library of articles, walkthroughs, and community discussions to level up your RPG experience. From classic titles to cutting-edge releases, RADIANT is your go-to source for everything RPG. Join our growing community and embark on your next epic journey!
							</p>
							<div onClick={() => window.location.href = 'https://gaming-website-peach.vercel.app/'}>
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

