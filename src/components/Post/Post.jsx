import { useParams } from 'react-router-dom'
import Card from '../../Shared/Card'
import { NumRandom } from '../../function/NumRandom.js'
import { randomColor } from '../../function/NumRandom.js'
import { useContext } from 'react'
import FeedbackContext from '../../context/FeedbackContext'
import { FaTimes } from 'react-icons/fa'

const Post = () => {
	const arraySmile = ['🤓', '👺', '👀', '👾', '😂', '😇', '🤯', '🫥']
	const {deleteFeedback} = useContext(FeedbackContext)

	const params = useParams()

	return (
		<Card>

				<button className='close' onClick={() => deleteFeedback(params.id)} >
					<FaTimes />
				</button>
			<h1 className='rating'>
				Post Rating: {params.rating}
				<span style={{ paddingLeft: '20px' }}>{NumRandom(arraySmile)}</span>
			</h1>
			<p
				style={{
					fontSize: '20px',
					fontWeight: '600',
					color: `${randomColor()}`,
				}}
			>
				Post text: {params.text}
			</p>
		</Card>
	)
}

export default Post
