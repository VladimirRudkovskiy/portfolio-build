'use client'

import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'



type Props = {}

export default function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: [
			"Hi, my name is Vladimir",
			"Guy-who-loves-Gaming.tsx",
			"<But-Loves-To-Code-More />",
		],
		loop: true,
		delaySpeed: 2000,

	})
	return (
		<div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
			<BackgroundCircles />
			<img 
			className='relative rounded-full h-32 w-32 mx-auto object-cover'
			src="https://avatars.githubusercontent.com/u/44618844?s=400&u=5646cd242616e93f4adc26f522aaad0fe67b92e4&v=4" alt="" />

			<div>
				<h2 className='text-sm uppercase text-[#F7AB0A] pb-2 tracking-[15px]'>
					Software Engineer
				</h2>
			</div>
			<h1 className='text-5xl lg:text-6xl font-semibold px-10'>
				<span className='mr-3'>{text}</span>
				<Cursor cursorColor='#F7AB0A'/>
			</h1>

			<div className='pt-8 z-20' >
				<Link href="#about">
				<button className='heroButton'>About</button>
				</Link>
				<Link href="#experience">
				<button className='heroButton'>Experience</button>
				</Link>
				<Link href="#skills">
				<button className='heroButton'>Skills</button>
				</Link>
				<Link href="#project">
				<button className='heroButton'>Projects</button>
				</Link>
				
			</div>
		</div>
	)
}
