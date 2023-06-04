import { func, number, oneOfType, string } from 'prop-types'
import markerPin from '../images/ficon.png'

const Marker = ({ data, className, lat, lng, markerId, onClick, ...props }) => {
   
	return (
		<img
			className="w-12 h-12 rounded-lg "
			src={'https://coffee-dating.com/App/uploads/' + data.Image}
			// eslint-disable-next-line react/no-unknown-property
			lat={lat}
            lng={lng}
			onClick={(e) => (onClick ? onClick(e, { markerId, lat, lng,data }) : null)}
			
			alt={markerId}
			{...props}
		/>
	)
}

Marker.defaultProps = {}

Marker.propTypes = {
	className: string,
	/**
	 * The id of the marker.
	 */
	markerId: oneOfType([number, string]).isRequired,
	/**
	 * The latitude of the marker.
	 */
	lat: number.isRequired,
	/**
	 * The longitude of the marker.
	 */
	lng: number.isRequired,
	/**
	 * The function to call when the marker is clicked.
	 */
	onClick: func,
}

export default Marker