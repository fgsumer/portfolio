import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './navbar.module.css';
import styled from 'styled-components';

const Navigation = styled.header`
  a {
    color: #fff;
    text-decoration: none;
    display: inline-block;
    margin: 1rem 2rem;
    position: relative;
  }
  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 5%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  a:hover:after {
    width: 100%;
    left: 0;
    cursor: pointer;
  }
  ul {
    padding-right: 5rem;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    font-family: 'Merriweather', serif;
  }

  @media only screen and (max-width: 600px) {
    a:hover:after {
      width: 7rem;
      left: 1rem;
    }

    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;

      &.is-expanded {
        overflow: hidden;
        max-height: 20rem; /* approximate max height */
      }
    }
  }
`;

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
      <Navigation>
        <div className={styles.navigation}>
          <div className={styles.logo}>
            <img style={{ height: '4rem' }} src="/images-icons/logo.png" alt="icon"></img>
            {/* <h1 style={{ fontFamily: 'Permanent Marker' }}>F S</h1> */}
          </div>
          <nav className={styles.nav}>
            <img
              className={styles.menuItem}
              aria-hidden="true"
              onClick={e => this.handleToggle(e)}
              src="/images-icons/menu.svg"
              alt="icon"
            ></img>

            <ul className={`collapsed ${isExpanded ? 'is-expanded' : ''}`}>
              <NavLink to="/aboutme">
                <li className={styles.li}>About Me</li>
              </NavLink>
              <NavLink to="/projects">
                <li className={styles.li}>My Projects</li>
              </NavLink>
              <NavLink to="/projects">
                <li className={styles.li}>Contact</li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </Navigation>
    );
  }
}

export default NavBar;
