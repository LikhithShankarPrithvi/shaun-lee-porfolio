import React from 'react'
import { FaReact, FaPython, FaJs, FaCode } from 'react-icons/fa'

const LogoDump = () => {
	return (
		<>
			<div className='hidden md:flex flex-row m-3 mr-0 text-white justify-center '>
				<div className='flex flex-col m-2 w-full  justify-center [&>*]:my-20'>
					<FaReact size={80} />
					<FaJs size={40} />
				</div>
				<div className='flex flex-col m-2 w-full pl-5'>
					<FaPython size={50} className='mt-72' />
				</div>
			</div>
		</>
	)
}

export default LogoDump
