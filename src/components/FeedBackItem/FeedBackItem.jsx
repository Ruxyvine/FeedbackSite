import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from '../../Shared/Card'

const FeedbackItem = ({ item, handleDelete }) => {
	return (
		<Card>
			<div className='num-display'>{item.rating}</div>
			<button className='close' onClick={handleDelete}>
				<FaTimes />
			</button>
			<div className='text-display'>{item.text}</div>
		</Card>
	)
}
FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
}

export default FeedbackItem
