import React, { Component } from 'react';
import Header from './components/Header/Header.jsx';
import SidebarMenu from './components/SidebarMenu/SidebarMenu.jsx';
import styles from './App.scss';
import CSSModules from 'react-css-modules';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebar_active: false,
      loggedIn: false
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleSidebar ( bool ) {
    //manages the state of the side menu expanding
    this.setState( { sidebar_active: bool } );
  }

  handleLogin () {
    //manages the state of login validation from the server should go here
    this.setState( { loggedIn: true } );
  }

  render(props) {
    return (
      <div>
      <Header sidebar_active={this.state.sidebar_active} toggleSidebar={this.toggleSidebar} />
      {this.props.children}
      </div>
    );
  }
}

//<Header sidebar_active={this.state.sidebar_active} toggleSidebar={this.toggleSidebar} />
//<div className='app-container'>
//<SidebarMenu handleLogin={this.handleLogin} active={this.state.sidebar_active} />
//<div className={this.state.sidebar_active ? 'aura-container pushed' : 'aura-container' }><p>Welcome to Aura</p></div>
      //todo
//</div>
export default CSSModules( App, styles )
