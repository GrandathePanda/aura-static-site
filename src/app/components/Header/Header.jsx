import React from 'react';
import styles from './Header.scss';
import CSSModules from 'react-css-modules';

class Header extends React.Component {
	render (props) {
		return (
				<div className="header">
					<p className="logo">Aura</p>
				<div className="links-container">
					<p className="links">A B O U T</p>
					<p className="links">F A Q</p>
					<p className="links">S U P P O R T</p>
					<p className="links" onClick={ this.props.sidebar_active ? this.props.toggleSidebar.bind(null, false) : this.props.toggleSidebar.bind(null, true) }>profile_img</p>
				</div>
			</div>

		);
	}
}
export default CSSModules(Header, styles)
