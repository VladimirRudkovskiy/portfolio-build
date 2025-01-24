'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SanitySkill from './SanitySkill'
import NextSkill from './NextSkill'
import JavaSkill from './JavaSkill'
import MetaMaskSkill from './MetaMaskSkill'
import ReactNativeSkill from './ReactNativeSkill'
import MoralisSkill from './MoralisSkill'
import TailWindSkill from './TailWindSkill'
import VisualStudioSkill from './VisualStudioSkill'
import FirebaseSkill from './FirebaseSkill'
import MongodbSkill from './MongodbSkill'
import HtmlSkill from './HtmlSkill'
import CssSkill from './CssSkill'
import PostgreSkill from './PostgreSkill'
import NodeSkill from './NodeSkill'
import MySqlSkill from './MySqlSkill'
import TypeScriptSkill from './TypeScriptSkill'


function Skills() {
	return (
		<motion.div 
		initial={{ opacity: 0 }}
		whileInView={{ opacity: 1 }}
		transition={{ duration: 1.5 }}
		viewport={{ once: true }}
		className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Skills
			</h3>

			<h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for currency profieciency
			</h3>

			<div className='grid grid-cols-4 gap-5'>
				<SanitySkill />
				<NextSkill />
				<JavaSkill />
				<MetaMaskSkill />
				<ReactNativeSkill />
				<MoralisSkill />
				<TailWindSkill />
				<VisualStudioSkill />
				<FirebaseSkill />
				<MongodbSkill />
				<HtmlSkill />
				<CssSkill />
				<PostgreSkill />
				<NodeSkill />
				<MySqlSkill />
				<TypeScriptSkill />
			</div>
		</motion.div>
	)
}

export default Skills
