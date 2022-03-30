import { m } from 'framer-motion'
import { useParams } from 'react-router-dom'
import Card from '../../Shared/Card'

const Post = () => {
	const params = useParams()

	return (
		<Card>
			<h1>Post id: {params.id}</h1>
			<p>Post name: {params.name}</p>
		</Card>
	)
}

export default Post
