import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './navbar.module.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }
  render() {
    const { isExpanded } = this.state;
    return (
      <div className={styles.navigation}>
        <div className={styles.logo}>
          <Link to="/">Fatma Sümer Logo</Link>
        </div>
        <nav className={styles.nav}>
          <img
            className={styles.menu}
            aria-hidden="true"
            onClick={e => this.handleToggle(e)}
            src="/images-icons/menu.svg"
            alt="icon"
          ></img>

          <ul className={`styles.collapsed ${isExpanded ? 'styles.is-expanded' : ''}`}>
            <NavLink to="/aboutme">
              <li>About Me</li>
            </NavLink>
            <NavLink to="/projects">
              <li>My Projects</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
