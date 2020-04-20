import React, { Component } from 'react';
import styles from './navbar.module.css';
import styled from 'styled-components';

import resume from '../../assests/resume.pdf';

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
    width: 95%;
    left: 0;
    cursor: pointer;
  }
  ul {
    padding-right: 3rem;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    list-style-type: none;
    font-family: 'Merriweather', serif;
  }

  @media only screen and (max-width: 800px) {
    a {
      margin: 0.5rem;
    }
    a:hover:after {
      width: 6rem;
    }

    ul.collapsed {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      flex-wrap: no-wrap;
      overflow: hidden;
      max-height: 0;

      &.is-expanded {
        overflow: hidden;
        max-height: 30rem; /* approximate max height */
      }
    }
    .active {
      visibility: visible;
      transition: all 200ms ease-in;
    }
    .hidden {
      visibility: hidden;
      transition: all 200ms ease-out;
      transform: translate(0, -100%);
    }
  }
`;
const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`;
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      show: true,
      scrollPos: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    const { scrollPos } = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos,
    });
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
      <Transition>
        <Navigation className={this.state.show ? 'active' : 'hidden'}>
          <div className={styles.navigation}>
            <div className={styles.logo}>
              <img style={{ height: '4rem' }} src="/images-icons/logo.png" alt="icon" />

              {/* <h1 style={{ fontFamily: 'Permanent Marker' }}>F S</h1> */}
            </div>
            <nav className={styles.nav}>
              <img
                className={styles.menuItem}
                aria-hidden="true"
                onClick={e => this.handleToggle(e)}
                src="/images-icons/menu.svg"
                alt="icon"
              />
              <ul className={`collapsed ${isExpanded ? 'is-expanded' : ''}`}>
                <a href="#home">
                  <li className={styles.li}>Home</li>
                </a>
                <a href="#aboutme">
                  <li className={styles.li}>About Me</li>
                </a>
                <a href="#projects">
                  <li className={styles.li}>My Projects</li>
                </a>
                <a href="#contactme">
                  <li className={styles.li}>Contact Me</li>
                </a>
                <a
                  href={resume}
                  target="_blank"
                  onClick={() => window.open(resume)}
                  rel="noopener noreferrer"
                >
                  <li className={styles.li}>Resume</li>
                </a>
              </ul>
            </nav>
          </div>
        </Navigation>
      </Transition>
    );
  }
}

export default NavBar;
