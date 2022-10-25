import React from 'react'
import { BsGithub, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Sidebar = () => {
	return (
		<>
			<div className='hidden md:flex flex-col item-center text-white md:justify-evenly m-3 p-5 font-md shadow shadow-white'>
				<div className='flex flex-col justify-center [&>*]:p-4 [&>*]:my-2 [&>*]:rounded-sm '>
					<a
						href='https://github.com/LikhithShankarPrithvi/'
						className='hover:bg-white hover:text-black'
					>
						<BsGithub size={40} />
					</a>
					<a
						href='http://www.linkedin.com/in/likhithps/'
						className='hover:bg-white hover:text-black'
					>
						<BsLinkedin size={40} />
					</a>
					<a
						href='https://twitter.com/LikhithPrithvi'
						className='hover:bg-white hover:text-black'
					>
						<BsTwitter size={40} />
					</a>
					<a
						href='https://www.instagram.com/likhi_shankar/'
						className='hover:bg-white hover:text-black'
					>
						<BsInstagram size={40} />
					</a>
				</div>
			</div>
		</>
	)
}

export default Sidebar
