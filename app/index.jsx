import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory  } from 'react-router';

import App from './components/App.jsx';
import HomeVideo from './components/HomeVideo.jsx';
import Form from './components/Form.jsx';
import PictureUpload from './components/PictureUpload.jsx';
import SharePicture from './components/SharePicture.jsx';
import Thanks from './components/Thanks.jsx';
import SingleVideo from './components/SingleVideo.jsx';

import css from './styles/main.less';

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}> 
			<IndexRoute component={HomeVideo} />
			<Route path="/deja-tus-datos" component={Form} />
			<Route path="/sube-tu-video" component={PictureUpload} />
			<Route path="/comparte-tu-video" component={SharePicture} />
			<Route path="/gracias" component={Thanks} />
			<Route path="/video/:videoId" component={SingleVideo}/>
		</Route>
	</Router>
);

render(router, document.getElementById('app'));