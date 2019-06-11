import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

//Import Route and create three Route paths.
//One for Home, About, and Contact.

//After creating the route paths, set them equal to the correct component.

const App = () => (
	<div>
		<Navigation />
		<Route exact path='/' component={Home} />
		<Route path='/about' component={About} />
		<Route path='/contact' component={Contact} />
	</div>
);

export default App;
