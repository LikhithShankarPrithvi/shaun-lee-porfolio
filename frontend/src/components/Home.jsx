import React from 'react'
import { BsGithub, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Home = () => {
	console.log(window.screen.width)

	const titles = [
		'FrontEnd Developer',
		'BackEnd Developer',
		'Full Stack Developer',
		'Video Editor',
	]
	const title = titles[0]
	return (
		// Main Section
		<div className='flex justify-center m-3 shadow shadow-white '>
			{/* container for main section */}
			<div className='flex flex-col  item-center md:justify-evenly text-white m-3 p-5 font-md shadow shadow-white md:max-w-full'>
				{/* Container for Image& Text */}
				<div className='flex justify-center'>
					{/* container for Im a developer Text */}
					<div className='flex flex-col justify-center px-5 md:px-10'>
						<div className='font-bold text-xl md:text-3xl pb-3'>
							I'm a
						</div>
						{/* // animation shall be done */}
						<div className='flex flex-col overflow-hidden h-[65px]'>
							<div className='animate-[slider_8s_ease-in-out_infinite_alternate] h-100% [&>*]:h-[65px]'>
								{/* <div className=''> */}
								<div className='font-bold text-xl md:text-4xl'>
									FullStack Developer
								</div>
								<div className='font-bold text-xl md:text-4xl'>
									FrontEnd Developer
								</div>
								<div className='font-bold text-xl md:text-4xl'>
									BackEnd Developer
								</div>
								<div className='font-bold text-xl md:text-4xl'>
									Video Editor
								</div>
							</div>
						</div>
					</div>
					{/* Image container */}
					<img
						src={require('../Images/displayPicture.jpg')}
						alt=''
						className='h-40 md:h-40 object-cover pl-3'
					/>
				</div>
				{/* My description */}
				<div className='flex justify-center'>
					<div className='py-10 only:text-white font-lg md:w-[60%]'>
						<p>
							<p>
								Hola Amigos! Do you know the one thing that can
								always thrive and can never be automated no
								matter what !
							</p>
							<p> Yes, You Guessed it - ART & DESIGN.</p>
							<p>
								I'm into Web Design, Video Editing, Photo-Art.
							</p>
							<p>
								Specialized in ReactJS, MERN & Python-flask for
								Backend.
							</p>
							<p>
								Ardent &copy;Adobe Premiere Pro, Open for
								Projects.
							</p>
						</p>
					</div>
				</div>
				<div className='flex flex-row mb-4 justify-center '>
					<button className='p-2 mx-10 bg-white text-black rounded-sm min-w-[100px]'>
						Resume
					</button>
					<button className='p-2 mx-10 bg-white text-black rounded-sm min-w-[100px]'>
						Contact
					</button>
				</div>
				<div className='flex flex-row lg:hidden justify-center [&>*]:p-4 [&>*]:mx-5'>
					<button>
						<BsGithub size={40} />
					</button>
					<button>
						<BsLinkedin size={40} />
					</button>
					<button>
						<BsTwitter size={40} />
					</button>
					<button>
						<BsInstagram size={40} />
					</button>
				</div>
			</div>
			<div className='hidden lg:flex flex-col item-center text-white md:justify-evenly m-3 p-5 font-md shadow shadow-white'>
				<div className='flex flex-col justify-center [&>*]:p-4'>
					<button>
						<BsGithub size={40} />
					</button>
					<button>
						<BsLinkedin size={40} />
					</button>
					<button>
						<BsTwitter size={40} />
					</button>
					<button>
						<BsInstagram size={40} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Home
