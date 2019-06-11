import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';

//Import your BrowserRouter as Router and wrap your App in it.

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root'),
);
