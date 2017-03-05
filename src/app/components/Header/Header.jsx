import React from 'react';
import {render} from 'react-dom';
import styles from './Header.scss';
import CSSModules from 'react-css-modules';

class Header extends React.Component {
	render (props) {
		return (
				<div className="header">
					<p className="logo">Aura</p>
				<div className="links-container">
					<p className="links">About</p>
					<p className="links">FAQ</p>
					<p className="links">Support</p>
					<p className="links" onClick={ this.props.sidebar_active ? this.props.toggleSidebar.bind(null, false) : this.props.toggleSidebar.bind(null, true) }>profile_img</p>
				</div>
			</div>

		);
	}
}
export default CSSModules(Header, styles)
