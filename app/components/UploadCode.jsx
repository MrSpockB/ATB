import React from 'react';
import {Link} from 'react-router';

class UploadCode extends React.Component
{
	render()
	{
		return (
			<div>
				<p>UploadCode component</p>
				<Link to="/gracias">Gracias</Link>
			</div>
		);
	}
}
export default UploadCode;