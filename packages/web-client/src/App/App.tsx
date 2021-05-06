import React from 'react';
import styles from './App.module.css'

function App() {
  return (
    <div className="App">
      <div className={styles.header}>
        <h1 className={styles.header__logo}>Flashly</h1>
        <div className="navbar-container">
          <nav className={styles.navbar}>
            <a className={styles.navbar__link} href="/home">Home</a>
            <a className={styles.navbar__link} href="/decks">Decks</a>
          </nav>
        </div>

      </div>
    </div>
  );
}

export default App;
