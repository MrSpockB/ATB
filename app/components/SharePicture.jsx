import React from 'react';
import {Link} from 'react-router';

class SharePicture extends React.Component
{
	constructor()
	{
		super();
		this.shareOnFace = this.shareOnFace.bind(this);	
	}
	shareOnFace()
	{
		FB.ui(
		{
			method: 'feed',
			action_type: 'og.shares',
			action_properties: JSON.stringify(
			{
				object : {
					'og:url': 'http://landing.cervezaminerva.mx/video/'+sessionStorage.videoId,
					'og:title': "Landing Page",
					'og:description': "Comparte tu video para poder participar en el viaje.",
					'og:image': "http://landing.cervezaminerva.mx/img/placeholder.png"
				}
			})
		});
	}

	render()
	{
		return (
			<div className="AnimCompWrap">
				<div className="contentWrap">
					<h3>Comparte tu video</h3>
					<a className="waves-effect waves-light btn blue darken-2" onClick={this.shareOnFace}>Compartir en Facebook</a>
				</div>
			</div>
		);
	}
}
export default SharePicture;