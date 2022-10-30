import React from 'react'

const Education = ({ item, id }) => {
	return (
		<>
			<div className='mb-4 hidden lg:block shadow-sm shadow-slate-300 hover:shadow-slate-600'>
				<div className='p-3'>
					<div className='flex flex-col md:flex-row md:justify-between'>
						<h1 key={item.name} className='font-extrabold text-md'>
							{item.name}
						</h1>
						<h1 key={item.place} className=''>
							{item.place}
						</h1>
					</div>
					<div className='flex flex-col md:flex-row md:justify-between'>
						<h1 key={item.course} className=''>
							{item.course}
						</h1>
						<h1 key={item.years} className=''>
							{item.years}
						</h1>
					</div>
					<div className='flex flex-col md:flex-row md:justify-between text-sm'>
						<h1 key={item.grade} className=''>
							{item.grade}
						</h1>
					</div>
				</div>
			</div>
			<div className='mb-2 shadow-md shadow-slate-300 hover:shadow-slate-600'>
				<div className='lg:hidden p-3'>
					<h1 key={item.years} className='text-sm'>
						{item.years}
					</h1>
					<h1 key={item.name} className='font-extrabold text-md'>
						{item.name}
					</h1>
					<h1 key={item.course} className='text-sm'>
						{item.course}
					</h1>
					<h1 key={item.place} className='text-sm'>
						{item.place}
					</h1>
					<h1 key={item.grade} className=''>
						{item.grade}
					</h1>
				</div>
			</div>
		</>
	)
}

export default Education
