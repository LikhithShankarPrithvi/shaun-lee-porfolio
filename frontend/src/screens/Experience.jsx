import React from 'react'

import WorkExperience from '../components/WorkExperience'

const Experience = () => {
	const workExInfo = [
		{
			name: 'Wipro Limited',
			place: 'Hyderabad, India',
			role: 'Project Engineer',
			years: '08/2021-present',
			desc: [
				'Working on Retail Velocity (POS data integration ETL Tool). Ownership role for support and development of the system',
				'Responsible for automated data transformation and data entry into the cloud.',
				'Optimized the velocity server system by resolving several job scripting and scheduling conflicts which reduced the job span by over 75% and increased efficiency by over 50%.',
			],
		},
		{
			name: 'D.R.D.O',
			place: 'Bengaluru, India',
			role: 'Research Trainee',
			years: '05/2021-07/2021',
			desc: [
				'Implemented Machine Learning models for Radar Target Data Classification analysis and prediction.',
				'Developed an ML tool using Bayesian Classification, Support Vector Machine, Hidden Markov Model, Neural networks (Python)',
				'Responsible for modeling and ML tool integration. - pyQT5',
			],
		},
		{
			name: 'TopRecur',
			place: 'Hyderabad, India',
			role: 'Junior Developer (Freelance)',
			years: '01/2021- 01/2021',
			desc: [
				'Developed application to restrict multi user login & authentication by using the data and statistics in Google Cloud Platform - GCP, SQL, Python - Celery.',
			],
		},
	]

	const extraWorkInfo = [
		{
			name: 'Ignite Club',
			place: 'SVUCE, Tirupati',
			role: 'Cheif Operating Officer',
			years: '05/2020 - 05/2021',
			desc: [
				'Entrepreneurship Club in our College. Being a part of Ignite organized various CEO sessions and workshops from Industry experts ',
			],
		},
		{
			name: 'P.S.M Club',
			place: 'SVUCE, Tirupati',
			role: 'Co-Founder',
			years: '05/2020 - Active',
			desc: [
				'Photography and Short Film Makers Club, founded with main goal of bringing a culture and showcase digital presence of our college.',
			],
		},
		{
			name: 'Coding Club',
			place: 'SVUCE, Tirupati',
			role: 'Web Dev & CP teams',
			years: '05/2019 - 05/2020',
			desc: [
				'As a part of Coding Club Taught fellow students and juniors Foundations of Competitive programming and Web Development.',
			],
		},
		{
			name: 'E-Cell IIT Bombay',
			place: 'SVUCE, Tirupati',
			role: 'Campus Ambassador',
			years: '05/2020 - 05/2021',
			desc: [
				'Organized events and workshops sponsored by E Cell IIT Bombay, aided students in SVUCE get internship @Eureka Job fair ',
			],
		},
	]
	return (
		<>
			<div className='flex flex-col m-3 text-white p-3 '>
				<h1 className='text-4xl md:m-3 mb-5 md:ml-32 md:mb-10 font-bold'>
					Professional Experience
				</h1>
				{workExInfo.map((item, id) => (
					<WorkExperience key={id} item={item} />
				))}
			</div>
			<div className='flex flex-col m-3 text-white p-3 '>
				<h1 className='text-4xl md:m-3 mb-5 md:ml-32 md:mb-10 font-bold'>
					Extra-Curricular Experience
				</h1>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 lg:px-32'>
					{extraWorkInfo.map((item, id) => (
						<div
							key={id}
							className=' mb-2 shadow-md shadow-slate-300 hover:shadow-slate-600'
						>
							<div className=' p-3'>
								<h1 className='text-sm opacity-40'>
									{item.years}
								</h1>
								<div className='relative flex mt-4'>
									<h1 className='font-extrabold text-lg'>
										{item.name}
									</h1>
									<h1 className='text-sm ml-2 mt-1.5'>
										{item.role}
									</h1>
								</div>
								<h1 className='text-sm opacity-40'>
									{item.place}
								</h1>
								<div className='flex flex-col mt-6'>
									{item.desc.map((desc, id2) => (
										<h1 key={id2} className='text-sm  mb-2'>
											{desc}
										</h1>
									))}
								</div>
							</div>
						</div>
						// <WorkExperience key={id} item={item} />
					))}
				</div>
			</div>
		</>
	)
}

export default Experience
