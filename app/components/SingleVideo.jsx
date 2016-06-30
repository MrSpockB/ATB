import React from 'react';
import { browserHistory  } from 'react-router';
import request from 'superagent-webpack-client';

class SingleVideo extends React.Component
{
	constructor(props)
	{
		super(props);
		this.componentDidMount = this.componentDidMount.bind(this);
		this.state=
		{
			path: ''
		};

	}
	componentDidMount()
	{
		var component = this;		
		request
			.post('../scripts/getPath.php')
			//.post('http://landing.cervezaminerva.mx/getPath.php')
			.field('videoId', this.props.params.videoId)
			.set('Accept', 'application/json')
			.end(function(err, res)
			{
				if(res.body.success)
				{
					component.setState({
						path: res.body.path
					});
				}
				else
					console.log(err);
			});
	}
	render()
	{
		return (
			<div className="AnimCompWrap">
				<div className="contentWrap">
					<video src={"http://landing.cervezaminerva.mx/scripts/"+this.state.path} width="100%" controls></video>
				</div>
			</div>
		);
	}
}
export default SingleVideo;