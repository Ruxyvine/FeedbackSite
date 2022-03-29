import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import FeedbackForm from './components/FeedbackForm/FeedbackForm'
import FeedbackList from './components/FeedbackList/FeedbackList'
import FeedbackStat from './components/FeedbackStat/FeedbackStat'
import Header from './components/Header/Header'
import FeedbackData from './data/FeedbackData'

const App = () => {
	const [feedback, setFeedback] = useState(FeedbackData)

	const deleteFeedback = id => {
		if (window.confirm('Ara you sure want to delete ?'))
			setFeedback(feedback.filter(el => el.id !== id))
	}

	const addFeedback = newFeedback => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}
	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackForm handleAdd={addFeedback} />
				<FeedbackStat feedback={feedback} />
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	)
}

export default App
