import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import About from './screens/About'
import Contact from './screens/Contact'
import Projects from './screens/Projects'

const App = () => {
	return (
		<body>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
			</Routes>
			<Footer />
		</body>
	)
}

export default App
