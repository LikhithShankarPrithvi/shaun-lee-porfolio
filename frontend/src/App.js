import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'
import Experience from './screens/Experience'
import Projects from './screens/Projects'
import Profiles from './components/Profiles'

const App = () => {
	return (
		<body>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/experience' element={<Experience />} />
				<Route path='/profiles' element={<Profiles />} />
			</Routes>
			<Footer />
		</body>
	)
}

export default App
