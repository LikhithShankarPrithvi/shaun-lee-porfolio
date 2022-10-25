import React from 'react'
import { TiPointOfInterest } from 'react-icons/ti'
import {
	SiAdobepremierepro,
	SiAdobephotoshop,
	SiAdobeillustrator,
	SiCanva,
} from 'react-icons/si'
import Education from '../components/Education'

const About = () => {
	const skills = [
		'Python',
		'Javascript',
		'ReactJS',
		'MERN Stack',
		'FReMP',
		'Flask',
		'Git',
		'OOPS',
		'DSA',
		'Java',
		'C++',
	]
	const eduInfo = [
		{
			name: 'Sri Venkateswara University',
			place: 'Tirupati',
			course: 'Computer Science and Engineering',
			years: '2017-2021',
			grade: 'CGPA - 8.1/10',
		},
		{
			name: 'Viswasai Junior College',
			place: 'Nellore',
			course: '12th Class (MPC)',
			years: '2015-2017',
			grade: '98%',
		},
		{
			name: 'Y K Achari High School',
			place: 'Nellore',
			course: '10th Class',
			years: '2014-2015',
			grade: '98%',
		},
	]
	console.log(eduInfo)
	return (
		<>
			{/* container for colonizing about section and skills section*/}
			<div className='flex flex-col md:flex-row justify-center  text-white mt-5'>
				{/* container for segregating about and education parts in about section*/}
				<div className='flex flex-col m-3 md:w-5/12 '>
					{/* container for about section */}
					<div className=' p-6 m-3 mb-4 '>
						<h1 className='font-bold text-4xl pb-4'>About Me</h1>
						<div className=''>
							&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I am a
							constant learner and very enthusiastic for working
							with new people and new technologies. I have good
							problem solving skills. I am also into web
							development. Currently i am exploring more into new
							frameworks. I believe in team work.I am determined
							to give my best at everything that I will be
							assigned to.
						</div>
					</div>
					{/* container for Education section */}
					<div className=' p-6 m-3'>
						<h1 className='font-bold text-4xl pb-4'>Education</h1>
						{eduInfo.map((item, id) => (
							<Education key={id} item={item} />
						))}
					</div>
				</div>

				<div className='flex flex-col m-3 md:w-5/12 shadow-sm shadow-white'>
					{/* Technical Skills Container */}
					<div className='p-6 w-full'>
						<h1 className='font-bold text-4xl pb-4'>
							Technical Skills
						</h1>
						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
							{skills.map(name => (
								<div className='flex hover:bg-slate-200 hover:text-black'>
									<TiPointOfInterest className='mt-1 mr-3' />
									<h1 className='text-xl md:text-lg'>
										{name}
									</h1>
								</div>
							))}
						</div>
					</div>
					<div className='border border-slate-400 items mx-4 my-2'></div>
					<div className='p-6 w-full'>
						<h1 className='font-bold text-4xl'>
							My Creative Tools
						</h1>
						<div className='grid grid-cols-2 lg:flex md:flex-row justify-between md:justify-start md:[&>*]:mr-4 mt-4 '>
							<div className='m-2 ml-0 opacity-60 hover:opacity-100'>
								<img
									src={require('../Images/pr.png')}
									alt={'Adobe Illustrator'}
									className='h-32 w-32 lg:h-24 lg:w-24 object-cover'
								/>
							</div>
							<div className='m-2 ml-0 opacity-60 hover:opacity-100'>
								<img
									src={require('../Images/ai.png')}
									alt={'Adobe Illustrator'}
									className='h-32 w-32 lg:h-24 lg:w-24 object-cover'
								/>
							</div>
							<div className='m-2 ml-0 opacity-60 hover:opacity-100'>
								<img
									src={require('../Images/ps.png')}
									alt={'Adobe Illustrator'}
									className='h-32 w-32 lg:h-24 lg:w-24 object-cover'
								/>
							</div>
							<div className='m-2 ml-0 opacity-60 hover:opacity-100'>
								<img
									src={require('../Images/canva.png')}
									alt={'Adobe Illustrator'}
									className='h-32 w-32 lg:h-24 lg:w-full object-fit'
								/>
							</div>
							{/* <SiAdobeillustrator
								size={50}
								className=' text-white '
							/>
							<SiAdobephotoshop
								size={50}
								className=' text-white '
							/>
							<SiAdobepremierepro
								size={50}
								className=' text-white '
							/>
							<SiCanva size={50} className=' text-white ' /> */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default About
