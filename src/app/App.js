import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Profile from './components/Profile.jsx';
import CSSModules from 'react-css-modules';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			profile_active: false
		};
	}

	render(props) {
		return (
			<div>
				<Header />
				<div className= { this.state.profile_active ? 'app-container pushed' : 'app-container' }>
					<Profile />
				</div>
			</div>
		);
	}
}

export default CSSModules(Header, styles)
