import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import FeedbackForm from './components/FeedbackForm/FeedbackForm'
import FeedbackList from './components/FeedbackList/FeedbackList'
import FeedbackStat from './components/FeedbackStat/FeedbackStat'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import AboutPages from './pages/AboutPages'
import Card from './Shared/Card'
import AboutLinkIcon from './components/AboutLinkIcon/AboutLinkIcon'
import Post from './components/Post/Post'
const App = () => {
	// const [feedback, setFeedback] = useState(FeedbackData)
	const [feedback, setFeedback] = useState([])

	const deleteFeedback = id => {
		if (window.confirm('Ara you sure want to delete ?'))
			setFeedback(feedback.filter(el => el.id !== id))
	}

	const addFeedback = newFeedback => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}
	return (
		<Router>
			<Header />
			<div className='container'>
				<Routes>
					<Route
						exact
						path='/'
						element={
							<>
								<FeedbackForm handleAdd={addFeedback} />
								<FeedbackStat feedback={feedback} />
								<FeedbackList
									feedback={feedback}
									handleDelete={deleteFeedback}
								/>
							</>
						}
					></Route>
					<Route exact path='/about' element={<AboutPages />}></Route>
					<Route exact path='/post/:id/:name' element={<Post />}></Route>
				</Routes>
				<AboutLinkIcon />
			</div>
		</Router>
	)
}

export default App
