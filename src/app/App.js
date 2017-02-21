import React, { Component } from 'react';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import styles from './App.scss';
import CSSModules from 'react-css-modules';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			profile_active: false
		};

		this.toggleProfile = this.toggleProfile.bind(this);
	}

	toggleProfile ( bool ) {
		//manages the state of login for the admin version of the page
		this.setState( { profile_active: bool } );
	}

	toggleLogin ( bool ) {
		//manages the state of login for the admin version of the page
		//this.setState( { loggedIn: bool } );
	}

	render(props) {
		return (
			<div>
				<Header profile_active={this.state.profile_active} toggleProfile={this.toggleProfile} />
				<div className= 'app-container'>
					<Profile active={this.state.profile_active} />
					<div className={this.state.profile_active ? 'aura-container pushed' : 'aura-container' }><p>Welcome to Aura</p></div>
				</div>
			</div>
		);
	}
}

export default CSSModules( App, styles )
