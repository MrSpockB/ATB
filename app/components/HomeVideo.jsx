import React from 'react';
import {Link} from 'react-router';
import { browserHistory  } from 'react-router';

class HomeVideo extends React.Component
{
	render()
	{
		return(
			<div className="AnimCompWrap">
				<div className="contentWrap">
					<h2>HomeVideo</h2>
					<Link to="/deja-tus-datos">Regístrate</Link>
				</div>
			</div>
		);
	}
}

export default HomeVideo;