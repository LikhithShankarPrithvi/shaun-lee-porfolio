import React, { useState } from 'react'
import { AiOutlineCaretRight } from 'react-icons/ai'
const WorkExperience = ({ item, id }) => {
	const [showDesc, setShowDesc] = useState(false)

	const HandleShowDesc = () => setShowDesc(!showDesc)
	return (
		<>
			<div className='mb-4 hidden lg:flex lg:px-32 justify-betweeen pl-10 '>
				<div className='p-6 grid grid-cols-2 shadow-sm shadow-white'>
					<div className='flex flex-col text-xl'>
						<h1 className=''>{item?.years}</h1>
						<h1 className=''>{item?.place}</h1>
					</div>

					<div className='flex flex-col  '>
						<h1 className='font-extrabold text-2xl'>
							{item?.name}
						</h1>
						<h1 className='mb-4 text-xl'>{item?.role}</h1>
						<div className='flex flex-col '>
							{item.desc.map((desc, id) => (
								<h1 className=' mb-2 flex hover:bg-slate-300 hover:text-black'>
									{desc}
								</h1>
							))}
						</div>
					</div>
					{/* <div className='flex flex-col md:flex-row md:justify-between text-sm'>
								<h1 className=''>{item?.desc}</h1>
							</div> */}
				</div>
			</div>
			<div className=' lg:hidden mb-2 shadow-md shadow-slate-300 hover:shadow-slate-600'>
				<div className=' p-3'>
					<h1 className='text-sm opacity-40'>{item?.years}</h1>
					<div className='relative flex mt-4'>
						<h1 className='font-extrabold text-lg'>{item?.name}</h1>
						<h1 className='text-sm ml-2 mt-1.5'>{item?.role}</h1>
					</div>
					<h1 className='text-sm opacity-40'>{item?.place}</h1>
					<h1 className='text-sm  mb-2 mt-6'>{item.desc[0]}</h1>
					<div className='flex justify-end'>
						<button
							className={showDesc ? 'hidden' : 'mt-2 text-right'}
							onClick={HandleShowDesc}
						>
							...More Details
						</button>
					</div>

					<div
						className={!showDesc ? 'hidden' : 'flex flex-col mt-2'}
					>
						{item.desc.map((desc, index, id) =>
							index !== 0 ? (
								<h1 className='text-sm  mb-2'>{desc}</h1>
							) : (
								''
							)
						)}
						<button className='text-right' onClick={HandleShowDesc}>
							...Hide Details
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default WorkExperience
