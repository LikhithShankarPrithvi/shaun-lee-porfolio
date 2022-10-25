import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {
	const [nav, setNav] = useState(false)
	const handleNav = () => setNav(!nav)
	const handleClick = () => setNav(!nav)
	const menuBar = [
		{
			name: 'About',
			link: '/about',
		},
		{
			name: 'Projects',
			link: '/projects',
		},
		{
			name: 'Experience',
			link: '/experience',
		},
		{
			name: 'Contact',
			link: '/contact',
		},
	]

	return (
		<>
			<div
				className={
					!nav
						? 'hidden'
						: 'md:hidden transition ease-in-out flex justify-end'
				}
			>
				<ul className=' absolute text-xl bg-black shadow-sm shadow-white text-white px-8 m-3 mt-20 z-50'>
					{menuBar.map((item, id) => (
						<Link to={item.link} onClick={handleClick}>
							<li className='p-1'>{item.name}</li>
						</Link>
					))}
				</ul>
			</div>
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
					{menuBar.map((item, id) => (
						<Link to={item.link}>
							<div className='hover:text-black hover:bg-white hover:shadow-sm hover:shadow-slate-600 rounded-md pb-1'>
								{item.name}
							</div>
						</Link>
					))}
				</div>
				<div
					className='flex flex-col py-1 justify-between md:hidden'
					onClick={handleNav}
				>
					{!nav ? (
						<FiMenu className='text-white' />
					) : (
						<AiOutlineClose className='text-white' size={20} />
					)}
				</div>
			</div>
		</>
	)
}

export default Header
