import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Projects = () => {
	const projectList = [
		{
			name: 'Aha OTT Website',
			link: 'https://aha-react-clone.web.app/',
			image: '../Images/ProjectImages/header.jpg',
			desc: 'Replica of Aha OTT platform popular in Southern India, User can Login and save favorites.',
			skills: ['ReactJS', 'Firebase', 'ContextAPI', 'TailwindCSS'],
			repoLink:
				'https://github.com/LikhithShankarPrithvi/aha-react-clone',
		},
		{
			name: 'Ecommerce Website',
			link: '',
			image: '../Images/ProjectImages/header.jpg',
			desc: 'Amazon like application, Admin Authentication and User cart Process is done',
			skills: ['ReactJS', 'NodeJS', 'MongoDB', 'Redux', 'ExpressJS'],
			repoLink: 'https://github.com/LikhithShankarPrithvi/ecommerce_MERN',
		},
		{
			name: 'Library Management System',
			link: '',
			image: '../Images/ProjectImages/header.jpg',
			desc: 'Book management system, MongoDB database and Firebase Auth. Admin for adding books.',
			skills: ['ReactJS', 'Flask-Python', 'MongoDB', 'Redux'],
			repoLink:
				'https://github.com/LikhithShankarPrithvi/book_mgmt_FReMP',
		},
		{
			name: 'Portfolio Site',
			link: '',
			image: '../Images/ProjectImages/header.jpg',
			desc: 'My Portfoilio Site build using ReactJS & TailwindCSS',
			skills: ['ReactJS', 'TailwindCSS'],
			repoLink:
				'https://github.com/LikhithShankarPrithvi/shaun-lee-porfolio',
		},
		{
			name: 'Classic Asteroids Arcade Game',
			link: '',
			image: '../Images/ProjectImages/header.jpg',
			desc: 'The first Level of Asteroids arcade game build on Unity Game Engine.',
			skills: ['C#', 'Unity'],
			repoLink:
				'https://github.com/LikhithShankarPrithvi/Asteroids-arcade-game',
		},
	]
	const videoProjectsList = [
		{
			name: 'SVUCE Campus Tour Video',
			link: 'https://youtu.be/bz3ADU_p3K4',
			image: 'campusTourSVUCE.jpg',
			desc: 'Director & Editor',
		},

		{
			name: 'Freshers Bootcamp 2k20',
			link: 'https://youtu.be/BHeoUGgOD2A',
			image: 'FreshersIntro.png',
			desc: 'Director & Editor',
		},
		{
			name: 'Cynosure Teaser',
			link: 'https://youtu.be/X1YlEQyRt_A',
			image: 'cynosureTeaser.jpg',
			desc: 'Concept & Editing',
		},
		{
			name: 'Cultural Club Promo',
			link: 'https://youtu.be/D424IYKZFUU',
			image: 'culturalClubPromo.jpg',
			desc: 'Editor',
		},
		{
			name: 'Talents Day Playlist',
			link: 'https://www.youtube.com/playlist?list=PLrwMxoFNtxphDqyzTpC-YgiU-jNgDkmy4',
			image: 'TalentsDay.png',
			desc: 'Editing & Admin',
		},
	]
	return (
		<>
			<div className='flex flex-col m-2 mt-1 md:ml-8 md:mr-8 text-white '>
				<h1 className='font-bold text-4xl pb-4 p-3 md:p-6 md:pb-2'>
					Technical Projects
				</h1>
				<div className='grid md:grid-cols-2 gap-5 lg:grid-cols-3 p-3 md:p-6 md:pb-0'>
					{projectList.map((item, id) => (
						<div className='shadow-sm shadow-white flex flex-col justify-between p-2 hover:shadow-slate-600'>
							<div className='p-2'>
								<h1 className='text-2xl font-bold '>
									{item.name}
								</h1>
								<p className='text-sm my-2 opacity-40'>
									{item.desc}
								</p>
								<div className='grid grid-rows-2 grid-cols-3 text-sm'>
									{item.skills.map((item2, id2) => (
										<h1 className='mr-5 py-1 hover:bg-white hover:text-black'>
											{/* <GoPrimitiveDot className='pt-2' /> */}
											{item2}
										</h1>
									))}
								</div>
							</div>
							<div className='flex justify-end [&>*]:m-4 size={40}'>
								{item.link !== '' ? (
									<a href={item.link}>
										<FaExternalLinkAlt size={20} />
									</a>
								) : (
									''
								)}
								{/* <FaExternalLinkAlt
										size={20}
										className={`${
											item.link === ''
												? 'hidden text-black'
												: 'hidden'
										}}`}
									/> */}
								<a href={item.repoLink}>
									<FaGithub size={20} className='' />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* <div className='border border-white mx-24 mt-16 '></div> */}
			{/* Container for Video Projects Section*/}
			<div className='flex flex-col m-3 md:m-8 text-white '>
				<h1 className='font-bold text-4xl pb-4 p-3 md:p-6 md:pb-2'>
					Film Projects
				</h1>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 md:p-6'>
					{videoProjectsList.map((item, id) => (
						<div className='shadow-sm shadow-white relative group md:m-3'>
							<img
								src={require(`../Images/videoProjectImages/${item.image}`)}
								alt={item.name}
								className='aspect-[8/3] object-cover opacity-40'
							/>
							<div className='absolute top-0 w-full h-full opacity-0 group-hover:opacity-100 group-hover:bg-black/90 flex flex-col justify-center align-middle'>
								<h1 className='text-white text-xl font-bold ml-10 mb-0'>
									{item.name}
								</h1>
								<h1 className='ml-10 text-lg'>{item.desc}</h1>
							</div>
							<a
								href={item.link}
								className='absolute bottom-0 right-0 m-4 opacity-0 group-hover:opacity-70'
							>
								<FaExternalLinkAlt size={32} />
							</a>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Projects
