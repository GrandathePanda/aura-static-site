import React, { Component } from 'react';
import Header from './components/Header/Header.jsx';
import SidebarMenu from './components/SidebarMenu/SidebarMenu.jsx';
import styles from './App.scss';
import CSSModules from 'react-css-modules';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sidebar_active: false
		};

		this.toggleSidebar = this.toggleSidebar.bind(this);
	}

	toggleSidebar ( bool ) {
		//manages the state of login for the admin version of the page
		this.setState( { sidebar_active: bool } );
	}

	toggleLogin ( bool ) {
		//manages the state of login for the admin version of the page
		//this.setState( { loggedIn: bool } );
	}

	render(props) {
		return (
			<div>
				<Header sidebar_active={this.state.sidebar_active} toggleSidebar={this.toggleSidebar} />
				<div className= 'app-container'>
					<SidebarMenu active={this.state.sidebar_active} />
					<div className={this.state.sidebar_active ? 'aura-container pushed' : 'aura-container' }><p>Welcome to Aura</p></div>
				</div>
			</div>
		);
	}
}

export default CSSModules( App, styles )
