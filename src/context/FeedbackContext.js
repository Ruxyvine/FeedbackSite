import { createContext, useState, useEffect } from "react";





const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
	const [feedback, setFeedback] = useState([])
	
	useEffect(() => {
		fetchFeedback()
	}, [])
//Fetch 
const fetchFeedback = async () => {
	const response = await fetch('https://62470443e3450d61b0060953.mockapi.io/feedback')
	const data = await response.json()
	setFeedback(data)
}


const [feedbackEdit, setFeedbackEdit] = useState({
	item: {},
	edit: false,

})




	//delete Feedback
const deleteFeedback = async id => {
		if (window.confirm('Are you sure want to delete ?'))
		await fetch(`https://62470443e3450d61b0060953.mockapi.io/feedback/${id}`, {method: 'DELETE'})
			setFeedback(feedback.filter(el => el.id !== id))
	}

	// Add feedback
const addFeedback = async newFeedback => {
	const response = await fetch('https://62470443e3450d61b0060953.mockapi.io/feedback', {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(newFeedback),
	})
	const data = await response.json()

		setFeedback([data, ...feedback])
	}

// Edit feedback
const editFeedback = (item) => {
	// console.log(item);

	setFeedbackEdit({
		item,
		edit: true,
	})
	// console.log(feedbackEdit);
}
// UPDATE feedback

const updateFeedback =  async (id, updItem) => {
	const response = await fetch(`https://62470443e3450d61b0060953.mockapi.io/feedback/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(updItem),
	})
	const data = await response.json()


	setFeedback(feedback.map(item => (item.id === id ? {...item, ...data} : item)))
}

	return (
		<FeedbackContext.Provider value={{
			feedback,
			addFeedback,
			deleteFeedback,
			editFeedback,
			feedbackEdit,
			updateFeedback,
		}}>
			{children}
		</FeedbackContext.Provider>
	)


}
export default FeedbackContext