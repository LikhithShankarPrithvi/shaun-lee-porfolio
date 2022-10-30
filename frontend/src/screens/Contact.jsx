import React from 'react'
import Sidebar from '../components/Sidebar'
import { BsGithub, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { useState, useRef } from 'react'
import { TiTick } from 'react-icons/ti'

import emailjs from '@emailjs/browser'

const Contact = () => {
	const form = useRef()
	const [submitValue, setSubmit] = useState('Send Message')
	const [sent, setSent] = useState(false)
	const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(false)
	const newRequestHandler = () => {
		setSent(false)
		setSubmitButtonDisabled(false)
		setSubmit('Send Message')
	}

	const sendEmail = e => {
		e.preventDefault()
		setSubmit('Submitted')
		emailjs
			.sendForm(
				'service_239remn',
				'template_1116z7v',
				form.current,
				'FJnChidofp4iOcRmX'
			)
			.then(
				result => {
					console.log(result.text)
				},
				error => {
					console.log(error.text)
				}
			)
		setSent(true)
		setSubmitButtonDisabled(true)
		e.target.reset()
	}

	// const onComplete = fields => {
	// 	setSubmit('Submitting...')
	// 	const message = {
	// 		to: 'likhithshankarprithvi@gmail.com',
	// 		from: fields.email,
	// 		html: `
	//   <p><strong>Name:</strong> ${fields.name}</p>
	//   <p>${fields.message}</p>`,
	// 	}
	// 	form.resetFields()
	// 	setSubmit('Send Message')
	// }

	return (
		<>
			<div className='flex justify-center'>
				<div className='flex items-center flex-col text-white h-80vh'>
					<div className='font-bold text-4xl md:text-6xl mt-8'>
						Get In Touch
					</div>
					<div className='flex flex-col mx-4 p-6 pb-3 max-w-4xl shadow-md'>
						<h1 className='w-full mt-2 px-2 py-2 text-sm md:text-xl bg-gray-300 text-black mb-3'>
							Contact me for hiring/ Help me join your team
						</h1>
						<form ref={form} onSubmit={sendEmail}>
							<label
								htmlFor='name'
								className='form-label w-full mt-2 px-2 py-2 border-1 border-gray-400 outline-none focus:border-primary'
							>
								Full Name*
							</label>
							<input
								type='text'
								id='name'
								name='user_name'
								placeholder='Enter Your Full Name'
								className='form-control w-full p-2 px-4 text-white bg-black border border-zinc-600 '
								required
							/>
							<label
								htmlFor='email'
								className='form-label w-full mt-2 px-2 py-2 border-1 border-gray-400 outline-none focus:border-primary'
							>
								Email*
							</label>
							<input
								type='text'
								id='email'
								name='user_email'
								placeholder='Enter Your Email'
								className='form-control w-full p-2 px-4 text-white bg-black border border-zinc-600 '
								required
							/>
							<label
								htmlFor='message'
								className='form-label w-full mt-2 px-2 py-2 border-1 border-gray-400 outline-none focus:border-primary'
							>
								Message*
							</label>
							<input
								type='text'
								id='message'
								name='message'
								placeholder='Type your message here'
								className='form-control w-full p-2 px-4 pb-20 text-white bg-black border border-zinc-600 '
								required
							/>
							<div className='my-6 flex flex-col md:flex-row'>
								<button
									type='submit'
									disabled={isSubmitButtonDisabled}
									className={
										!sent
											? 'w-[50%] md:w-[25%] bg-white border text-black p-2 hover:bg-black hover:text-white hover:border hover:border-white'
											: 'bg-white border text-black p-2 '
									}
								>
									{submitValue}
								</button>
								<h1
									className={
										sent
											? 'm-1 text-sm mt-4 md:mt-3 md:ml-8 cursor-pointer relative'
											: 'hidden'
									}
									onClick={newRequestHandler}
								>
									<TiTick className='absolute' size={20} />{' '}
									&nbsp; Message Sent Succesfully, Submit
									another Message ? Click Here
								</h1>
							</div>
						</form>
					</div>
					<div className='flex flex-row md:hidden justify-center [&>*]:p-4 '>
						<a href='https://github.com/LikhithShankarPrithvi/'>
							<BsGithub size={40} />
						</a>
						<a href='http://www.linkedin.com/in/likhithps/'>
							<BsLinkedin size={40} />
						</a>
						<a href='https://twitter.com/LikhithPrithvi'>
							<BsTwitter size={40} />
						</a>
						<a href='https://www.instagram.com/likhi_shankar/'>
							<BsInstagram size={40} />
						</a>
					</div>
				</div>
				<Sidebar />
			</div>
		</>
	)
}

export default Contact
