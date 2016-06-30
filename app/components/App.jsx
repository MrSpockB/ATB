import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const App =({children,location}) =>
(

			<ReactCSSTransitionGroup component="div" className="wrapAnim" transitionName="main" transitionEnterTimeout={1000} transitionLeaveTimeout={1000} >
				{React.cloneElement(children,{key: location.pathname})}
			</ReactCSSTransitionGroup>
);

export default App;