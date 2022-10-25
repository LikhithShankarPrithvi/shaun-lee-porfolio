import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import About from './screens/About'
import Contact from './screens/Contact'

const App = () => {
	return (
		<body>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<About />} />
			</Routes>
			<Footer />
		</body>
	)
}

export default App
