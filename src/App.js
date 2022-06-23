import React from 'react'
import First from './components/first/First'
import Second from './components/second/Second'
import Third from './components/third/Third'
import Footer from './components/footer/Footer'

export default function App() {
	return(
		<>
			<main>
				<First />
				<Second />
		      <Third />
			</main>
			<Footer />
		</>
	)
}