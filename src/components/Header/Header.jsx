import PropType from 'prop-types'

const Header = ({ text, bgColor, textColor }) => {
	const headerStyle = {
		background: bgColor,
		color: textColor,
	}
	return (
		<header style={headerStyle}>
			<div className='container'>
				<h2>{text}</h2>
			</div>
		</header>
	)
}

Header.defaultProps = {
	text: 'Feedback UI App',
	bgColor: 'rgba(0, 0, 0, 0.4)',
	textColor: '#ff6a95',
}

Header.propTypes = {
	text: PropType.string,
	bgColor: PropType.string,
	textColor: PropType.string,
}

export default Header
