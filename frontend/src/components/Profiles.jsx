import React from 'react'

const Profiles = () => {
	return (
		<>
			<div className='hidden md:flex flex-col m-3 mr-0 text-white justify-center '>
				<h1 className='m-2 text-2xl md:text-4xl font-bold'>Profiles</h1>
				<div className='flex flex-col m-2 w-full'>
					<a href='https://leetcode.com/LikhithShankarPrithvi/'>
						<li class='hover:text-black hover:bg-white p-2'>
							Leetcode
						</li>
					</a>
					<a href='https://www.hackerrank.com/likhithshankarp1'>
						<li class='hover:text-black hover:bg-white  p-2'>
							Hackerrank
						</li>
					</a>
					<a href='https://www.interviewbit.com/profile/likhithshankarprithvi'>
						<li class='hover:text-black hover:bg-white  p-2'>
							InterviewBit
						</li>
					</a>
					<a href='https://medium.com/@likhithshankarprithvi'>
						<li class='hover:text-black hover:bg-white p-2'>
							Medium
						</li>
					</a>
					<a href='https://open.spotify.com/user/317d6ttscq6afs6vcpdn6cyyno2y?si=38c0ecc05e074753'>
						<li class='hover:text-black hover:bg-white p-2'>
							Spotify
						</li>
					</a>
				</div>
			</div>
		</>
	)
}

export default Profiles
