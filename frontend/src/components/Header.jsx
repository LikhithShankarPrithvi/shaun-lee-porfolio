import React from 'react'

const Header = () => {
	return (
		<>
			<div className='flex md:justify-evenly justify-between m-3 p-4 pb-5 shadow shadow-white text-xl hover:shadow-slate-600'>
				<div className='flex'>
					<div className='cursor-pointer text-white font-bold md:pr-10 '>
						Shaun Lee
					</div>
					<div className='hidden md:flex text-white font-bold'>|</div>
				</div>
				<div className='hidden md:flex flex-row justify-between text-white md:[&>*]:px-3 [&>*]:px-4 [&>*]:cursor-pointer '>
					{/* <div className='hover:text-black hover:bg-white hover:shadow-sm hover:shadow-slate-600 rounded-md pb-1'>
						Home
					</div> */}
					<div className='hover:text-black hover:bg-white hover:shadow-sm hover:shadow-slate-600 rounded-md pb-1'>
						About
					</div>
					<div className='hover:text-black hover:bg-white hover:shadow-sm hover:shadow-slate-600 rounded-md pb-1'>
						Projects
					</div>
					<div className='hover:text-black hover:bg-white hover:shadow-sm hover:shadow-slate-600 rounded-md pb-1'>
						Experience
					</div>
					<div className='hover:text-black hover:bg-white hover:shadow-sm hover:shadow-slate-600 rounded-md pb-1'>
						Contact
					</div>
				</div>
				<div className='flex flex-col py-1 justify-between md:hidden'>
					<div className='border border-white w-[40px]'></div>
					<div className='border border-white w-[40px]'></div>
					<div className='border border-white w-[40px]'></div>
				</div>
			</div>
		</>
	)
}

export default Header
