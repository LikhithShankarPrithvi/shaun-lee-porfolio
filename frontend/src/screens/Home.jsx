import React from 'react'
import { BsGithub, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Profiles from '../components/Profiles'

import { FaCode } from 'react-icons/fa'

const Home = () => {
	// console.log(window.screen.width)

	const titles = [
		'FrontEnd Developer',
		'BackEnd Developer',
		'Full Stack Developer',
		'Video Editor',
	]
	return (
		// Main Section
		<div className='flex justify-center shadow shadow-white m-3 py-5 '>
			{/* container for main section */}
			<div className='flex flex-col  item-center md:justify-evenly text-white m-3 mt-0 py-5 md:p-5 font-md'>
				{/* Container for Image& Text */}
				<div className='flex flex-col md:flex-row justify-between  md:pb-0'>
					{/* container for Im a developer Text */}

					<div className='flex flex-col justify-center px-5 md:px-10'>
						{/*Name Section */}
						<div className='font-bold flex text-3xl md:text-6xl md:pb-3 '>
							Likhith Shankar
						</div>
						{/* Slider Section  */}
						<div className='flex flex-col md:flex-row mt-4'>
							<div className='flex flex-col overflow-hidden h-[65px]'>
								<div className='animate-[slider_8s_ease-in-out_infinite_alternate] h-100% [&>*]:h-[65px] '>
									{titles.map((item, id) => (
										<div
											key={id}
											className='font-bold text-xl md:text-2xl lg:text-4xl'
										>
											{item}
										</div>
									))}
								</div>
							</div>
						</div>
						<div className='relative'>
							<img
								src={require('../Images/displayPicture.jpg')}
								alt=''
								className='pl-[45%] md:hidden max-h-40 object-fit right-0 bottom-0'
							/>
						</div>
					</div>
					{/* Image container */}

					<img
						src={require('../Images/displayPicture.jpg')}
						alt=''
						className='hidden md:flex h-80 md:h-40 object-cover pr-3 md:pr-0 pl-3 '
					/>

					{/* Hove to work on image for mobile app */}
					{/* <div className='absolute flex justify-end left-[40%] top-[20%]'>
						<img
							src={require('../Images/dp2.png')}
							alt=''
							className=' md:hidden object-fit'
						/>
					</div> */}
				</div>

				{/* My description */}
				<div className='flex justify-end px-4 md:px-0 md:text-xl '>
					<div className='md:mt-0 py-10 only:text-white font-lg md:max-w-2xl'>
						<div className='realtive'>
							<FaCode className='absolute mt-1 ml-1' />
							{/* <p>
								&nbsp; &nbsp; Hola Amigos ! Do you know the one
								thing that can always thrive and can never be
								automated no matter what ! Yes, You Guessed it -
								ART & DESIGN. I'm into Web Design, Video
								Editing, Photo-Art. Specialized in ReactJS, MERN
								& Python-flask for Backend. Ardent &copy;Adobe
								Premiere Pro, Open for Projects.
							</p> */}
							<p>
								&nbsp; &nbsp; Hola Amigos ! Welcome to my
								portfolio👋.
							</p>
							<div className='mt-4 '>
								<p>
									I'm currently working on ETL, SDE at Wipro
									Limited.
								</p>
								<p>
									I'm a Full Stack Developer, Tech Stacks -
									MERN & FReMP
								</p>
								<p>
									My Interests Span:
									<li>DSA - Coding</li>
									<li>Object Oriented System Design</li>
									<li>ML/ DL - Learning CS229</li>
									<li>
										Video Editing - Passion/ Side Hustle
									</li>
								</p>
							</div>
							<p className='mt-4'>Open To Projects</p>
							<p>
								Check out my{' '}
								<Link to='/about'>
									<u>About</u>
								</Link>{' '}
								section, Quick chat with me{' '}
								<a href='https://topmate.io/likhith_shankar'>
									<u>Here</u>
								</a>
							</p>
						</div>
					</div>
				</div>

				<div className='absolute flex flex-col md:relative md:flex md:flex-row pb-10 mb-4 justify-end mt-36 md:mt-4  '>
					<button className='p-2 mx-5 mb-3 mt-8 md:mt-0 md:mx-10 md:mr-0 md:mb-0 border border-white text-white  hover:bg-black hover:text-white md:bg-white md:text-black rounded-sm min-w-[100px]'>
						<a href='https://drive.google.com/file/d/1svsJ5NaJ3MfRyMFf5IlRwGTiEQUxC1rU/view?usp=share_link'>
							Resume
						</a>
					</button>
					<Link to='/contact'>
						<button className='p-2 mx-5 md:mx-10 md:mr-0 md:mb-0 bg-white text-black rounded-sm min-w-[100px]  hover:bg-black hover:text-white hover:border hover:border-white'>
							Contact
						</button>
					</Link>
				</div>

				<div className='flex flex-col mx-2 text-white md:hidden'>
					<h1 className='m-2 text-2xl md:text-4xl font-bold'>
						Profiles
					</h1>
					<div className='flex flex-col m-2 w-full'>
						<a href='https://leetcode.com/LikhithShankarPrithvi/'>
							<li className='hover:text-black hover:bg-white p-1'>
								Leetcode
							</li>
						</a>
						<a href='https://www.hackerrank.com/likhithshankarp1'>
							<li className='hover:text-black hover:bg-white  p-1'>
								Hackerrank
							</li>
						</a>
						<a href='https://www.interviewbit.com/profile/likhithshankarprithvi'>
							<li className='hover:text-black hover:bg-white  p-1'>
								InterviewBit
							</li>
						</a>
						<a href='https://medium.com/@likhithshankarprithvi'>
							<li className='hover:text-black hover:bg-white p-1'>
								Medium
							</li>
						</a>
						<a href='https://open.spotify.com/user/317d6ttscq6afs6vcpdn6cyyno2y?si=38c0ecc05e074753'>
							<li className='hover:text-black hover:bg-white p-1'>
								Spotify
							</li>
						</a>
					</div>
				</div>
				<div className='flex flex-row lg:hidden justify-center [&>*]:p-4'>
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
			<Profiles className='hidden md:block' />
		</div>
	)
}

export default Home
