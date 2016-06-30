import React from 'react';
import {Link} from 'react-router';
import { browserHistory  } from 'react-router';

import request from 'superagent-webpack-client';

class PictureUpload extends React.Component
{
	constructor()
	{
		super();
		this.getFile = this.getFile.bind(this);
		this.uploadPic = this.uploadPic.bind(this);
		this.state =
		{
			file: "",
			type: ""
		}
	}
	getFile(e)
	{
		e.preventDefault();
		let reader = new FileReader();
		let file = e.target.files[0];
		var overlay = document.getElementById("overlay");
		reader.onloadend = () => {
			console.log(file);
			var mime = file.type.split("/");
			if(mime[0] === "video")
			{
				this.setState({
					file: file,
					type: file.type
				});
			}
			else
			{
				document.getElementById("title").innerHTML = "Solo puedes subir video";
				this.setState({
					file: ""
				});
				this.refs.fileUpload.value = "";
				this.refs.filePath.value = "";
				this.refs.filePath.className = "file-path validate invalid";
			}
			setTimeout(function(){
				overlay.className = "";
			}, 500);
		}
		document.getElementById("title").innerHTML = "Procesando tu video...";
		overlay.className+=" active";
		reader.readAsDataURL(file);
	}
	uploadPic()
	{
		var overlay = document.getElementById("overlay");
		if(this.state.file)
		{
			document.getElementById("title").innerHTML = "Subiendo tu video...";
			overlay.className+=" active";
			request
				.post('scripts/uploadPic.php')
				//.post('http://landing.cervezaminerva.mx/uploadPic.php')
				.field('email', sessionStorage.userEmail)
				.field('type', this.state.type)
				.attach('file',this.state.file)
				.set('Accept', 'application/json')
				.end(function(err, res)
				{
					if(res.body.success)
					{

						overlay.className = "";
						sessionStorage.videoId = res.body.videoId;
						browserHistory.push('/comparte-tu-video');
					}
					else
						console.log(err);
				});
		}
	}
	render()
	{
		return (
			<div className="AnimCompWrap">
				<div className="contentWrap">
					<h3>Sube tu video</h3>
					<div className="file-field input-field">
						<div className="btn">
							<span>File</span>
							<input type="file" ref="fileUpload" accept="video/*;capture=camcorder" onChange={this.getFile}/>
						</div>
						<div className="file-path-wrapper">
							<input ref="filePath" className="file-path validate" type="text" />
						</div>
					</div>
					<button className="waves-effect waves-light btn" onClick={this.uploadPic}>Confirmar</button>
				</div>
			</div>
		);
	}
}
export default PictureUpload;