import React from 'react'
import Sidebar from '../components/Sidebar'
import { BsGithub, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Contact = () => {
	return (
		<>
			<div className='flex justify-center'>
				<div className='flex items-center flex-col text-white h-80vh'>
					<div className='font-bold text-4xl mt-8'>Get In Touch</div>
					<form className='flex flex-col mt-8 mx-4 p-6 pb-3 max-w-4xl shadow-md'>
						<h1 className='w-full mt-2 px-2 py-2 text-sm md:text-xl bg-white text-black mb-3'>
							Contact me for hiring/ Help me join your team
						</h1>
						<h1 className='w-full mt-2 px-2 py-2 border-1 border-gray-400 outline-none focus:border-primary'>
							Full Name*
						</h1>
						<input
							type='text'
							placeholder='Enter Your Full Name'
							className='w-full p-2 px-4 text-white bg-black border border-zinc-600 '
						/>
						<h1 className='w-full mt-2 px-2 py-2 border-1 border-gray-400 outline-none focus:border-primary'>
							Email*
						</h1>
						<input
							type='text'
							placeholder='Enter Your Email'
							className='w-full p-2 px-4 text-white bg-black border border-zinc-600 '
						/>
						<h1 className='w-full mt-2 px-2 py-2 border-1 border-gray-400 outline-none focus:border-primary'>
							Message*
						</h1>
						<input
							type='text'
							placeholder='Type your message here'
							className='w-full p-2 px-4 pb-20 text-white bg-black border border-zinc-600 '
						/>
						<div className='my-6'>
							<button className='bg-white border text-black p-2 hover:bg-black hover:text-white hover:border hover:border-white'>
								Send Message
							</button>
						</div>
					</form>
					<div className='flex flex-row lg:hidden justify-center [&>*]:p-4 '>
						<a href='https://github.com/LikhithShankarPrithvi/'>
							<BsGithub size={40} />
						</a>
						<a href='http://www.linkedin.com/in/likhithps/'>
							<BsLinkedin size={40} />
						</a>
						<a href='https://twitter.com/LikhithPrithvi'>
							<BsTwitter size={40} />
						</a>
						<a href='https://www.instagram.com/likhi_shankar/'>
							<BsInstagram size={40} />
						</a>
					</div>
				</div>
				<Sidebar />
			</div>
		</>
	)
}

export default Contact
