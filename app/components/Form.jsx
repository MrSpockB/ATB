import React from 'react';
import {Link} from 'react-router';
import { browserHistory  } from 'react-router';
import request from 'superagent-webpack-client';

class Form extends React.Component
{
	constructor()
	{
		super();
		this.submit = this.submit.bind(this);
		this.setName = this.setName.bind(this);
		this.setApellido = this.setApellido.bind(this);
		this.setTel = this.setTel.bind(this);
		this.setMail = this.setMail.bind(this);
		this.setTicket = this.setTicket.bind(this);
		this.setLocu = this.setLocu.bind(this);

		this.state = 
		{
			name: '',
			apellidos: '',
			tel: '',
			email: '',
			ticket: '',
			locu: 0
		};
	}
	setApellido(event)
	{
		this.setState({
			apellidos: event.currentTarget.value
		});
	}
	setName(event)
	{
		this.setState({
			name: event.currentTarget.value
		});
	}
	setTel(event)
	{
		this.setState({
			tel: event.currentTarget.value
		});
	}
	setMail(event)
	{
		this.setState({
			email: event.currentTarget.value
		});
	}
	setTicket(event)
	{
		this.setState({
			ticket: event.currentTarget.value
		});
	}
	setLocu(event)
	{
		this.setState({
			locu: event.currentTarget.value
		});
	}
	submit(event)
	{
		event.preventDefault();
		if(this.state.name != '' && this.state.tel != '' && this.state != '')
		{
			if(typeof(Storage) !== "undefined")
			{
				sessionStorage.userEmail = this.state.email;
			}
			request
				.post('scripts/savedata.php')
				//.post('http://landing.cervezaminerva.mx/savedata.php')
				.send(JSON.stringify(this.state))
				.set('Accept', 'application/json')
				.end(function(err, res)
				{
					if(res.ok)
					{

						browserHistory.push('/sube-tu-video');
					}
					else
						console.log(err);
				});
		}
		else
			console.log('Faltan datos');
	}
	render()
	{
		return (
			<div className="AnimCompWrap">
				<div className="contentWrap">
					<h3>Ingresa tus datos</h3>
					<div className="form">
						<div className="row">
							<form className="col s12" onSubmit={this.submit}>
								<div className="row">
									<div className="input-field col s12">
										<input id="nombre" type="text" className="validate" onChange={this.setName} value={this.state.name}/>
										<label htmlFor="nombre">Nombre</label>
									</div>
								</div>
								<div className="row">
									<div className="input-field col s12">
										<input id="apellidos" type="text" className="validate" onChange={this.setApellido} value={this.state.apellidos}/>
										<label htmlFor="apellido">Apellidos</label>
									</div>
								</div>
								<div className="row">
									<div className="input-field col s12">
										<input type="text" id="tel" className="validate" onChange={this.setTel} value={this.state.tel}/>
										<label htmlFor="tel">Teléfono</label>
									</div>
								</div>
								<div className="row">
									<div className="input-field col s12">
										<input type="email" id="mail" className="validate" onChange={this.setMail} value={this.state.email}/>
										<label htmlFor="mail" data-error="Mail inválido" data-success="Mail válido">Email</label>
									</div>
								</div>
								<div className="row">
									<div className="input-field col s12">
										<input type="text" id="numTicket" className="validate" onChange={this.setTicket} value={this.state.ticket}/>
										<label htmlFor="numTicket">Número de Ticket</label>
									</div>
								</div>
								<div className="row locu-select">
									<label className="locu-label">Escoge al locutor con quien quieres irte a Europa</label>
									<div className="input-field col s12">
									    <select className="browser-default" value={this.state.locu} onChange={this.setLocu} id="locu">
									    	<option value="0" disabled>Escoge al locutor</option>
									      	<option value="miriam-rascol">Miriam Rascol</option>
									      	<option value="pablo-gonzalez">Pablo Gonzalez</option>
									      	<option value="tirondopulus">Tirondopulus</option>
									    </select>
									</div>
								</div>
								<input className="waves-effect waves-light btn btn-submit" type="submit" value="Enviar datos"/>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Form;