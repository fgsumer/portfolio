import React from 'react';
import styles from './typewriter.module.css';

const options = ['junior front-end developer', 'cat mum', 'jigsaw puzzle enthusiast'];

class TypeWriter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      currentItemIndex: 0,
    };
    this.type = this.type.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    this.type(this.state.currentItemIndex);
  }

  type(currentItemIndex) {
    this._isMounted &&
      this.setState({ currentItemIndex }, () => {
        this.show(options[currentItemIndex]);
      });
  }

  show(target) {
    let charCount = 0;
    this.timer = setInterval(() => {
      this._isMounted &&
        this.setState({ text: target.substr(0, charCount) }, () => {
          if (charCount === target.length) {
            clearInterval(this.timer);
            setTimeout(() => this.hide(target), 2000);
          }
          charCount++;
        });
    }, 200);
  }

  hide(target) {
    let charCount = target.length;
    this.timer = setInterval(() => {
      this._isMounted &&
        this.setState({ text: target.substr(0, charCount) }, () => {
          if (charCount === 0) {
            clearInterval(this.timer);
            let currentItemIndex = this.state.currentItemIndex + 1;
            if (currentItemIndex === options.length) currentItemIndex = 0;
            setTimeout(() => this.type(currentItemIndex), 500);
          }
          charCount--;
        });
    }, 150);
  }

  componentWillUnmount() {
    this._isMounted = false;
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className={styles.typewriter}>
        <div className={styles.typewriter__type}> I am &lt;{this.state.text}</div>
        <div className={styles.typewriter__cursor}>
          <span className={styles.typewriter__type}>&gt;</span>
        </div>
      </div>
    );
  }
}

export default TypeWriter;
