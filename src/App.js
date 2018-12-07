import React, { Component } from 'react';
import styles from './App.scss';
import Shell from './shell/Shell';

class App extends Component {
  render() {
    return (
      <div className={styles.mainDiv}>
        <Shell></Shell>
      </div>
    );
  }
}

export default App;
