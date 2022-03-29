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
	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackForm />
				<FeedbackStat feedback={feedback} />
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	)
}

export default App
