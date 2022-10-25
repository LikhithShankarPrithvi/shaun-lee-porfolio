import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<>
			<div className='flex md:justify-between justify-between m-3 p-4 pb-5 shadow shadow-white text-xl hover:shadow-slate-600'>
				<div className='flex md:mx-10'>
					<Link to='/'>
						<div className='cursor-pointer text-white font-bold md:pr-10 '>
							Shaun Lee
						</div>
					</Link>
					<div className='hidden md:flex text-white font-bold'>|</div>
				</div>
				<div className='hidden md:flex flex-row justify-between text-white md:[&>*]:px-3 [&>*]:px-4 [&>*]:cursor-pointer '>
					{/* <div className='hover:text-black hover:bg-white hover:shadow-sm hover:shadow-slate-600 rounded-md pb-1'>
						Home
					</div> */}
					<Link to='/about'>
						<div className='hover:text-black hover:bg-white hover:shadow-sm hover:shadow-slate-600 rounded-md pb-1'>
							About
						</div>
					</Link>
					<div className='hover:text-black hover:bg-white hover:shadow-sm hover:shadow-slate-600 rounded-md pb-1'>
						Projects
					</div>
					<div className='hover:text-black hover:bg-white hover:shadow-sm hover:shadow-slate-600 rounded-md pb-1'>
						Experience
					</div>
					<Link to='/contact'>
						<div className='hover:text-black hover:bg-white hover:shadow-sm hover:shadow-slate-600 rounded-md pb-1'>
							Contact
						</div>
					</Link>
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
